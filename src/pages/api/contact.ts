import type { APIRoute } from 'astro';
import type { Runtime } from '@astrojs/cloudflare';
import type { D1Database } from '@cloudflare/workers-types';

export const prerender = false;

type ContactRuntimeEnv = {
  DB: D1Database;
};

const SUBJECTS = new Set(['partnership', 'careers', 'collaboration', 'other']);

const badRequest = (request: Request, message: string) => {
  if (wantsJson(request)) {
    return Response.json({ error: message }, { status: 400 });
  }

  return Response.redirect(new URL('/contact?error=validation', request.url), 303);
};

const serverError = (request: Request) => {
  if (wantsJson(request)) {
    return Response.json(
      { error: 'Unable to save your message right now. Please try again.' },
      { status: 500 },
    );
  }

  return Response.redirect(new URL('/contact?error=server', request.url), 303);
};

const normalizeField = (value: FormDataEntryValue | null) =>
  typeof value === 'string' ? value.trim() : '';

const wantsJson = (request: Request) =>
  request.headers.get('accept')?.includes('application/json') ?? false;

export const POST: APIRoute = async ({ request, locals }) => {
  const formData = await request.formData();
  const name = normalizeField(formData.get('name'));
  const email = normalizeField(formData.get('email')).toLowerCase();
  const subject = normalizeField(formData.get('subject'));
  const message = normalizeField(formData.get('message'));

  if (name.length < 2 || name.length > 100) {
    return badRequest(request, 'Please enter your name.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    return badRequest(request, 'Please enter a valid email address.');
  }

  if (!SUBJECTS.has(subject)) {
    return badRequest(request, 'Please select a subject.');
  }

  if (message.length < 10 || message.length > 5000) {
    return badRequest(request, 'Please enter a message with at least 10 characters.');
  }

  const runtime = (locals as Runtime<ContactRuntimeEnv>).runtime;

  try {
    await runtime.env.DB
      .prepare(
        `INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)`,
      )
      .bind(name, email, subject, message)
      .run();
  } catch (error) {
    console.error('Failed to persist contact submission', error);
    return serverError(request);
  }

  if (wantsJson(request)) {
    return Response.json({ message: 'Thanks, your message has been sent.' });
  }

  return Response.redirect(new URL('/contact?success=1', request.url), 303);
};
