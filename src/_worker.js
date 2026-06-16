export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", app: "blytz-ventures-web" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Contact form POST
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
          return new Response(JSON.stringify({ error: "All fields are required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const result = await env.blytz_ventures_contact.prepare(
          "INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)"
        ).bind(name, email, subject, message).run();

        return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Internal server error" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};
