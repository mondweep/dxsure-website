"use client";

import { signIn } from "next-auth/react";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const isUnauthorised = searchParams.error === "AccessDenied";

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrap}>
          <span style={styles.logo}>
            Agentics<span style={styles.logoDot}>.</span>Consulting
          </span>
          <span style={styles.logoSub}>CRM Dashboard</span>
        </div>

        <h1 style={styles.heading}>Sign in</h1>
        <p style={styles.sub}>
          Access is restricted to authorised team members.
        </p>

        {isUnauthorised && (
          <div style={styles.error}>
            Your Google account is not authorised to access this dashboard.
            Contact Mondweep to request access.
          </div>
        )}

        <button
          style={styles.googleBtn}
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F6F1E9",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  card: {
    background: "#fff",
    border: "1px solid #EDE8DC",
    borderRadius: "20px",
    padding: "2.5rem 2.25rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  },
  logoWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "0.15rem",
    marginBottom: "2rem",
  },
  logo: {
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 600,
    color: "#1C1C1C",
    letterSpacing: "-0.01em",
  },
  logoDot: { color: "#334155" },
  logoSub: {
    fontSize: "0.65rem",
    fontWeight: 500,
    color: "#7A7A7A",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "1.625rem",
    fontWeight: 700,
    color: "#1C1C1C",
    marginBottom: "0.5rem",
  },
  sub: {
    fontSize: "0.875rem",
    color: "#4A4A4A",
    marginBottom: "1.75rem",
    lineHeight: 1.6,
  },
  error: {
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "10px",
    padding: "0.875rem 1rem",
    fontSize: "0.8rem",
    color: "#B91C1C",
    marginBottom: "1.25rem",
    lineHeight: 1.6,
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    width: "100%",
    padding: "0.75rem 1rem",
    background: "#fff",
    border: "1.5px solid #EDE8DC",
    borderRadius: "10px",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#1C1C1C",
    cursor: "pointer",
    fontFamily: "'Inter', system-ui, sans-serif",
    transition: "border-color 0.15s, box-shadow 0.15s",
  },
};
