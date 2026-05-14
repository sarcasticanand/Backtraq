import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    await Promise.allSettled([notifySubscription(email), saveSubscriber(email)]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

async function notifySubscription(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const from = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const notifyEmail = process.env.NOTIFICATION_EMAIL || "sagaranand.001@gmail.com";

  await Promise.allSettled([
    resend.emails.send({
      from,
      to: notifyEmail,
      subject: `New blog subscriber: ${email}`,
      html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
    }),
    resend.emails.send({
      from,
      to: email,
      subject: "Backtraq — you're on the list",
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1A1A1A">
          <h2 style="color:#1F3D2A">You're on the list.</h2>
          <p>We'll email you when new guides drop — useful, specific, written by people who actually inspect properties for a living.</p>
          <p style="margin-top:24px;color:#5C5C5C;font-size:13px">Backtraq — Independent home inspections, Gurgaon &amp; Delhi NCR</p>
        </div>
      `,
    }),
  ]);
}

async function saveSubscriber(email: string) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return;
  await supabase.from("subscribers").insert({ email });
}
