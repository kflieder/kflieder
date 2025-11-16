import { NextResponse } from "next/server";

export async function GET() {
  try {
    const clientId = process.env.STRIPE_CLIENT_ID_TEST;
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/oauth/callback`;
    const state = "optional-state"; // can be user ID or any string to track requests

    // Standard OAuth link (not Express)
    const oauthLink = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${clientId}&scope=read_write&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

    return NextResponse.json({ url: oauthLink });
  } catch (error) {
    console.error("Error generating OAuth link:", error);
    return NextResponse.json(
      { error: "failed_to_generate_oauth_link" },
      { status: 500 }
    );
  }
}
