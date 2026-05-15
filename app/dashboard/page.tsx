import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getSheetData, SheetResult } from "@/lib/sheets";
import SignOutButton from "@/components/SignOutButton";

const CRMS = [
  {
    id: "agentics-lead",
    title: "Agentics Consulting",
    description: "Lead enquiries from dxsure.uk",
    sheetId: "1MVzDUkgefnVdZp4E8HRJgFDIoUTfeubgq98KQKhTcTI",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/1MVzDUkgefnVdZp4E8HRJgFDIoUTfeubgq98KQKhTcTI/edit",
    accent: "#334155",
    accentBg: "rgba(51,65,85,0.07)",
  },
  {
    id: "personal-brand",
    title: "Personal Brand",
    description: "Contact form — mondweep-chakravorty.netlify.app",
    sheetId: "1Ya5GyZ0MQ8Dp-bLgY4odJGCyH3ww4ZBn34z8Nm-DGDk",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/1Ya5GyZ0MQ8Dp-bLgY4odJGCyH3ww4ZBn34z8Nm-DGDk/edit",
    accent: "#6B7280",
    accentBg: "rgba(107,114,128,0.07)",
  },
  {
    id: "assam-bernardi",
    title: "Assam / Bernardi Music Group",
    description: "Programme CRM",
    sheetId: "15LQJni7F1_Hi_czToCOv5JRVPIa_leb75MznB0_2cpg",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/15LQJni7F1_Hi_czToCOv5JRVPIa_leb75MznB0_2cpg/edit",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.07)",
  },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  // Fetch all three sheets in parallel
  const results: SheetResult[] = await Promise.all(
    CRMS.map((crm) => getSheetData(crm.sheetId))
  );

  const now = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  return (
    <div style={s.page}>
      {/* Top nav */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div>
            <span style={s.logo}>
              Agentics<span style={s.logoDot}>.</span>Consulting
            </span>
            <span style={s.logoSub}>CRM Dashboard</span>
          </div>
          <div style={s.headerRight}>
            <span style={s.userEmail}>{session.user?.email}</span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main style={s.main}>
        {/* Page heading */}
        <div style={s.pageHead}>
          <h1 style={s.pageTitle}>CRM Overview</h1>
          <span style={s.refreshNote}>Last loaded: {now}</span>
        </div>

        {/* Summary row */}
        <div style={s.summaryRow}>
          {CRMS.map((crm, i) => {
            const r = results[i];
            return (
              <div key={crm.id} style={{ ...s.summaryCard, borderTop: `3px solid ${crm.accent}` }}>
                <div style={s.summaryCount}>{r.error ? "—" : r.total}</div>
                <div style={s.summaryLabel}>{crm.title}</div>
                <div style={s.summaryDesc}>{crm.description}</div>
              </div>
            );
          })}
        </div>

        {/* CRM panels */}
        {CRMS.map((crm, i) => {
          const result = results[i];
          const recentRows = result.rows.slice(-10).reverse(); // most recent first

          return (
            <section key={crm.id} style={s.panel}>
              {/* Panel header */}
              <div style={s.panelHeader}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        ...s.panelTag,
                        background: crm.accentBg,
                        color: crm.accent,
                      }}
                    >
                      {result.error ? "Error" : `${result.total} row${result.total !== 1 ? "s" : ""}`}
                    </span>
                    <h2 style={s.panelTitle}>{crm.title}</h2>
                  </div>
                  <p style={s.panelDesc}>{crm.description}</p>
                </div>
                <a
                  href={crm.sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...s.sheetLink, borderColor: crm.accent, color: crm.accent }}
                >
                  Open in Sheets ↗
                </a>
              </div>

              {/* Error state */}
              {result.error && (
                <div style={s.errorBox}>
                  <strong>Could not load sheet data.</strong> Make sure the sheet is shared
                  with <code>{process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}</code> (Viewer access).
                  <br />
                  <small style={{ color: "#B91C1C", marginTop: "0.25rem", display: "block" }}>
                    {result.error}
                  </small>
                </div>
              )}

              {/* Empty state */}
              {!result.error && result.total === 0 && (
                <div style={s.emptyBox}>No rows yet — submissions will appear here.</div>
              )}

              {/* Data table */}
              {!result.error && result.total > 0 && (
                <div style={s.tableWrap}>
                  <table style={s.table}>
                    <thead>
                      <tr>
                        {result.headers.map((h) => (
                          <th key={h} style={s.th}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentRows.map((row, ri) => (
                        <tr key={ri} style={ri % 2 === 0 ? s.rowEven : s.rowOdd}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={s.td}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {result.total > 10 && (
                    <p style={s.rowNote}>
                      Showing 10 most recent of {result.total} rows.{" "}
                      <a href={crm.sheetUrl} target="_blank" rel="noopener noreferrer" style={{ color: crm.accent }}>
                        View all in Sheets ↗
                      </a>
                    </p>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </main>

      <footer style={s.footer}>
        Agentics.Consulting · DxSure Ltd · Co. No. 15957322
      </footer>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#F6F1E9",
    fontFamily: "'Inter', system-ui, sans-serif",
    color: "#1C1C1C",
  },
  header: {
    background: "rgba(246,241,233,0.96)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #EDE8DC",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  headerInner: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  logo: {
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#1C1C1C",
    display: "block",
  },
  logoDot: { color: "#334155" },
  logoSub: {
    fontSize: "0.6rem",
    fontWeight: 500,
    color: "#7A7A7A",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    display: "block",
    marginTop: "0.1rem",
  },
  headerRight: { display: "flex", alignItems: "center", gap: "1rem" },
  userEmail: { fontSize: "0.8rem", color: "#4A4A4A" },
  main: { maxWidth: "1180px", margin: "0 auto", padding: "2.5rem 2rem" },
  pageHead: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: "2rem",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  pageTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#1C1C1C",
  },
  refreshNote: { fontSize: "0.75rem", color: "#7A7A7A" },
  summaryRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.25rem",
    marginBottom: "2.5rem",
  },
  summaryCard: {
    background: "#fff",
    border: "1px solid #EDE8DC",
    borderRadius: "14px",
    padding: "1.5rem",
  },
  summaryCount: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: "0.5rem",
    color: "#1C1C1C",
  },
  summaryLabel: { fontSize: "0.875rem", fontWeight: 600, color: "#1C1C1C", marginBottom: "0.25rem" },
  summaryDesc: { fontSize: "0.75rem", color: "#7A7A7A" },
  panel: {
    background: "#fff",
    border: "1px solid #EDE8DC",
    borderRadius: "16px",
    marginBottom: "2rem",
    overflow: "hidden",
  },
  panelHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.5rem 1.75rem",
    borderBottom: "1px solid #EDE8DC",
    flexWrap: "wrap",
  },
  panelTag: {
    display: "inline-block",
    padding: "0.2rem 0.65rem",
    borderRadius: "20px",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.04em",
  },
  panelTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#1C1C1C",
  },
  panelDesc: { fontSize: "0.8rem", color: "#7A7A7A", marginTop: "0.25rem" },
  sheetLink: {
    fontSize: "0.75rem",
    fontWeight: 700,
    border: "1.5px solid",
    borderRadius: "8px",
    padding: "0.4rem 0.875rem",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "opacity 0.15s",
    flexShrink: 0,
  },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "0.8rem" },
  th: {
    padding: "0.75rem 1rem",
    textAlign: "left",
    fontWeight: 700,
    fontSize: "0.7rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#4A4A4A",
    background: "#F6F1E9",
    borderBottom: "1px solid #EDE8DC",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #F6F1E9",
    color: "#1C1C1C",
    verticalAlign: "top",
    maxWidth: "280px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  rowEven: { background: "#fff" },
  rowOdd: { background: "#FDFCFA" },
  errorBox: {
    margin: "1.5rem",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "10px",
    padding: "1rem 1.25rem",
    fontSize: "0.8rem",
    color: "#7F1D1D",
    lineHeight: 1.7,
  },
  emptyBox: {
    padding: "2rem",
    textAlign: "center",
    color: "#7A7A7A",
    fontSize: "0.85rem",
  },
  rowNote: {
    padding: "0.75rem 1rem",
    fontSize: "0.75rem",
    color: "#7A7A7A",
    borderTop: "1px solid #F6F1E9",
  },
  footer: {
    textAlign: "center",
    padding: "2rem",
    fontSize: "0.7rem",
    color: "#7A7A7A",
    borderTop: "1px solid #EDE8DC",
  },
};
