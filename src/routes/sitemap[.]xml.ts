import { createFileRoute } from "@tanstack/react-router";

const BASE = "https://www.consulentia18.it";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [
          { loc: `${BASE}/`, priority: "1.0", changefreq: "weekly" },
          { loc: `${BASE}/contacts`, priority: "0.5", changefreq: "yearly" },
          { loc: `${BASE}/privacy-policy`, priority: "0.3", changefreq: "yearly" },
          { loc: `${BASE}/cookie`, priority: "0.3", changefreq: "yearly" },
        ];
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n") +
          `\n</urlset>\n`;
        return new Response(body, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});