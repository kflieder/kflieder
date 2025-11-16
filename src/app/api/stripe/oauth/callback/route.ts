import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST as string);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state"); // optional, for tracking

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // Exchange the OAuth code for a connected account
    const resp = await stripe.oauth.token({
      grant_type: "authorization_code",
      code,
    });

    const connectedAccountId = resp.stripe_user_id;

    // TODO: Save connectedAccountId to your DB linked to the user/client
    console.log("Connected account ID:", connectedAccountId);
    console.log(resp.stripe_user_id)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/success/oauth?connectedAccountId=${connectedAccountId}`);
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.json({ error: "Failed to complete OAuth" }, { status: 500 });
  }
}
