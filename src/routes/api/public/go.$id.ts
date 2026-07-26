import { createFileRoute } from "@tanstack/react-router";
import { CASINO_MAP } from "../../../lib/casinos";

export const Route = createFileRoute("/api/public/go/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const c = CASINO_MAP[params.id];
        if (!c) return new Response("Not found", { status: 302, headers: { Location: "/" } });
        return new Response(null, {
          status: 302,
          headers: {
            Location: c.url,
            "Referrer-Policy": "no-referrer",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});