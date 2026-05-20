const FALLBACK_SITE_URL = "https://www.techionik.com";

const SITE_URL_KEYS = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_BASE_URL",
  "SITE_URL",
] as const;

export const SITE_NAME = "Techionik";

export function getSiteUrl(): string {
  const configuredUrl = SITE_URL_KEYS.map((key) => process.env[key]).find(
    (value): value is string => Boolean(value),
  );

  const normalizedUrl = configuredUrl ?? FALLBACK_SITE_URL;
  return normalizedUrl.replace(/\/$/, "");
}

export function getCanonicalUrl(pathname = "/"): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
