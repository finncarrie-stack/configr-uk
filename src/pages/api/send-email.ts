import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Auth check
  const secret = request.headers.get('x-send-secret');
  if (secret !== import.meta.env.SEND_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  let body: { to: string; subject: string; text?: string; html?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { to, subject, text, html } = body;
  if (!to || !subject || (!text && !html)) {
    return new Response(JSON.stringify({ error: 'Missing required fields: to, subject, text or html' }), { status: 400 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Finn @ Configr <finn.carrie@configr.uk>',
      to,
      subject,
      ...(html ? { html } : { text }),
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return new Response(JSON.stringify({ error: data }), { status: res.status });
  }

  return new Response(JSON.stringify({ success: true, id: data.id }), { status: 200 });
};
