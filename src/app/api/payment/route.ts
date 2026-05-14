import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";

const tierPrices: Record<string, number> = {
  basic: 149900,
  standard: 249900,
  premium: 399900,
  "buyer-standard": 499900,
  "buyer-premium": 899900,
  prepurchase: 1499900,
};

const tierLabels: Record<string, string> = {
  basic: "Basic Inspection",
  standard: "Standard Inspection",
  premium: "Premium Inspection",
  "buyer-standard": "Standard Buyer Inspection",
  "buyer-premium": "Premium Buyer Inspection",
  prepurchase: "Pre-purchase Package",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action } = body;

  if (action === "create") {
    const { tier, name, email, phone } = body;
    const amount = tierPrices[tier];
    if (!amount) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Payment not configured" }, { status: 503 });
    }

    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `backtraq_${Date.now()}`,
      notes: {
        tier,
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      tierLabel: tierLabels[tier] || tier,
    });
  }

  if (action === "verify") {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json({ error: "Payment not configured" }, { status: 503 });
    }

    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return NextResponse.json({ verified: false }, { status: 400 });
    }

    return NextResponse.json({ verified: true, paymentId: razorpay_payment_id });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
