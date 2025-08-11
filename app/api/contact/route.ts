import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, product, message, token } = await req.json();

    // Basic spam guard: honeypot must be empty
    if (typeof token === "string" && token.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // TODO: Wire up to email provider or webhook (e.g., Sendgrid, Resend, Slack webhook)
    // For now, just log so developers can verify during development.
    console.log("Support request:", { name, email, product, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


