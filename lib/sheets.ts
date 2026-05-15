import { google } from "googleapis";

export interface SheetResult {
  headers: string[];
  rows: string[][];
  total: number;
  error?: string;
}

export async function getSheetData(spreadsheetId: string): Promise<SheetResult> {
  try {
    // Decode the base64-encoded service account JSON — avoids OpenSSL 3 / Vercel
    // private-key newline mangling that causes error:1E08010C:DECODER routines::unsupported
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS!, "base64").toString("utf8")
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A:Z",
    });

    const values = response.data.values ?? [];

    if (values.length === 0) {
      return { headers: [], rows: [], total: 0 };
    }

    const headers = values[0].map(String);
    const rows = values.slice(1).map((row) =>
      headers.map((_, i) => String(row[i] ?? ""))
    );

    return { headers, rows, total: rows.length };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { headers: [], rows: [], total: 0, error: msg };
  }
}
