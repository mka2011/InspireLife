// Build-time configuration only. Leave unset until the production domain is known.
const configuredUrl = process.env.SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;
if (siteUrl && !["http:", "https:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export function canonicalUrl(path: string): string | undefined {
  return siteUrl ? new URL(path, siteUrl).href : undefined;
}
