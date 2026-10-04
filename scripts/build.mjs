// Builds the static landing site into dist/ for Netlify.
// Copies landing/, fills {{TOKENS}} from environment variables, and writes sitemap.xml and robots.txt.
//
// Environment variables (set them in Netlify: Site configuration > Environment variables):
//   FOUNDER_NAME    e.g. "Jane Doe"
//   CONTACT_EMAIL   e.g. "hello@nexops.one"
//   CONTACT_PHONE   e.g. "+352 621 123 456"
//   LEGAL_ENTITY    e.g. "NEXOPS ONE S.à r.l."
//   LEGAL_ENTITY_FR optional; defaults to LEGAL_ENTITY
//   SITE_URL        optional; defaults to Netlify's URL (the site's primary URL)
// Netlify sets CONTEXT (production, deploy-preview, branch-deploy). A production build fails if a value is missing.

import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const src = join(root, "landing");
const out = join(root, "dist");
const env = process.env;
const production = env.CONTEXT === "production";

const required = {
  FOUNDER_NAME: "[Founder name]",
  CONTACT_EMAIL: "contact@example.com",
  CONTACT_PHONE: "+352 000 000 000",
  LEGAL_ENTITY: "[Legal entity]",
};
const missing = Object.keys(required).filter((k) => !env[k]?.trim());
if (missing.length) {
  const msg = `Missing environment variables: ${missing.join(", ")}`;
  if (production) {
    console.error(`${msg}. Set them in Netlify before deploying to production.`);
    process.exit(1);
  }
  console.warn(`${msg}. Using placeholders (not a production build).`);
}
const value = (k) => env[k]?.trim() || required[k];

const siteUrl = (env.SITE_URL || env.URL || "http://localhost:8888").replace(/\/+$/, "");
const founder = value("FOUNDER_NAME");
const phone = value("CONTACT_PHONE");
const tokens = {
  SITE_URL: siteUrl,
  FOUNDER_NAME: founder,
  FOUNDER_INITIALS: founder.replace(/[^\p{L}\s-]/gu, "").split(/[\s-]+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "NO",
  CONTACT_EMAIL: value("CONTACT_EMAIL"),
  CONTACT_PHONE: phone,
  CONTACT_PHONE_E164: phone.replace(/[^\d+]/g, ""),
  LEGAL_ENTITY: value("LEGAL_ENTITY"),
  LEGAL_ENTITY_FR: env.LEGAL_ENTITY_FR?.trim() || value("LEGAL_ENTITY"),
  BUILD_DATE: new Date().toISOString().slice(0, 10),
};

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const unknown = new Set();
for (const file of walk(out).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8").replace(/\{\{([A-Z0-9_]+)\}\}/g, (m, k) => {
    if (!(k in tokens)) { unknown.add(`${k} in ${relative(out, file)}`); return m; }
    return escape(tokens[k]);
  });
  writeFileSync(file, html);
}
if (unknown.size) {
  console.error(`Unknown tokens: ${[...unknown].join(", ")}`);
  process.exit(1);
}

// Pages to index, with their language alternates.
const pairs = [
  ["/", "/fr/"],
  ["/privacy/", "/fr/confidentialite/"],
];
const urls = pairs.flatMap(([en, fr]) => [en, fr].map((loc) => `  <url>
    <loc>${siteUrl}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${en}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${siteUrl}${fr}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${en}"/>
  </url>`));
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);

// Only the production site is indexable; previews and branch deploys are not.
writeFileSync(join(out, "robots.txt"), production
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : "User-agent: *\nDisallow: /\n");

console.log(`Built ${relative(root, out)}/ for ${siteUrl} (${env.CONTEXT || "local"})`);
