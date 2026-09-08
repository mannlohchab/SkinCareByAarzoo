export function postgresSsl(connectionString = process.env.DATABASE_URL) {
  const flag = String(process.env.DATABASE_SSL ?? "").toLowerCase();
  if (flag === "false" || flag === "0" || flag === "disable") {
    return false;
  }
  if (flag === "true" || flag === "1" || flag === "require") {
    return { rejectUnauthorized: false };
  }

  const databaseUrl = connectionString || "";
  if (/sslmode=disable/i.test(databaseUrl)) {
    return false;
  }
  if (/sslmode=(require|verify-ca|verify-full)/i.test(databaseUrl)) {
    return { rejectUnauthorized: false };
  }

  try {
    const host = new URL(databaseUrl.replace(/^postgresql:/i, "http:")).hostname;
    if (["localhost", "127.0.0.1", "::1", "postgres", "db"].includes(host)) {
      return false;
    }
  } catch {
    // Fall through to the hosted-Postgres default.
  }

  return { rejectUnauthorized: false };
}
