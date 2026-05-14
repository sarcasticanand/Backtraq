import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

interface BookingData {
  type: "rental" | "purchase";
  city: string;
  area: string;
  propertyType: string;
  sizeSqft?: string;
  tier: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
}

const tierLabels: Record<string, string> = {
  basic: "Basic (₹1,499)",
  standard: "Standard (₹2,499)",
  premium: "Premium (₹3,999)",
  "buyer-standard": "Buyer Standard (₹4,999)",
  "buyer-premium": "Buyer Premium (₹8,999)",
  prepurchase: "Pre-purchase (₹14,999)",
};

async function sendEmails(data: BookingData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const from = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const notifyEmail = process.env.NOTIFICATION_EMAIL || "sagaranand.001@gmail.com";
  const tierLabel = tierLabels[data.tier] || data.tier;

  await Promise.allSettled([
    resend.emails.send({
      from,
      to: notifyEmail,
      subject: `New Backtraq booking — ${data.name}, ${data.area}`,
      html: `
        <h2>New Booking Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${data.name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone / WhatsApp</td><td style="padding:8px;border:1px solid #eee">${data.phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Type</td><td style="padding:8px;border:1px solid #eee">${data.type === "purchase" ? "Home buyer" : "Renter"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Plan</td><td style="padding:8px;border:1px solid #eee">${tierLabel}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">City</td><td style="padding:8px;border:1px solid #eee">${data.city}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Area</td><td style="padding:8px;border:1px solid #eee">${data.area}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Property type</td><td style="padding:8px;border:1px solid #eee">${data.propertyType}${data.sizeSqft ? ` · ${data.sizeSqft}` : ""}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Preferred date</td><td style="padding:8px;border:1px solid #eee">${data.date}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Time slot</td><td style="padding:8px;border:1px solid #eee">${data.timeSlot}</td></tr>
          ${data.notes ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Notes</td><td style="padding:8px;border:1px solid #eee">${data.notes}</td></tr>` : ""}
        </table>
        <p style="margin-top:16px;color:#555;font-size:13px">Reply to this email or WhatsApp ${data.phone} to confirm.</p>
      `,
    }),
    resend.emails.send({
      from,
      to: data.email,
      subject: "Backtraq — Your inspection request is received",
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1A1A1A">
          <h2 style="color:#1F3D2A">Booking received, ${data.name.split(" ")[0]}.</h2>
          <p>We've received your inspection request for <strong>${data.area}, ${data.city}</strong>.</p>
          <p>We'll WhatsApp you at <strong>${data.phone}</strong> within 30 minutes to confirm your slot.</p>
          <table style="border-collapse:collapse;width:100%;font-size:14px;margin-top:16px">
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Plan</td><td style="padding:8px;border:1px solid #eee">${tierLabel}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Requested date</td><td style="padding:8px;border:1px solid #eee">${data.date}, ${data.timeSlot}</td></tr>
          </table>
          <p style="margin-top:24px">In the meantime:</p>
          <ul style="padding-left:20px;line-height:1.8">
            <li>Save our number: <strong>+91 ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.slice(2) || "99990 00000"}</strong></li>
            <li>Have the property address ready to share on WhatsApp</li>
            <li>Payment can be made on the day of inspection (cash or UPI)</li>
          </ul>
          <p style="margin-top:24px;color:#5C5C5C;font-size:13px">Backtraq — Independent home inspections, Gurgaon &amp; Delhi NCR</p>
        </div>
      `,
    }),
  ]);
}

async function appendToSheet(data: BookingData) {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!serviceAccountEmail || !privateKey || !sheetId) return;

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const tierLabel = tierLabels[data.tier] || data.tier;

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Bookings!A:L",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          data.name,
          data.phone,
          data.email,
          data.type === "purchase" ? "Buyer" : "Renter",
          tierLabel,
          data.city,
          data.area,
          data.propertyType,
          data.date,
          data.timeSlot,
          data.notes || "",
        ],
      ],
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const data: BookingData = await req.json();

    await Promise.allSettled([sendEmails(data), appendToSheet(data)]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
