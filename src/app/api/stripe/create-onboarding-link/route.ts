import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const country = (body.country ?? "MX") as string;

    //create a connected account object (express) on my platform

    // const connectedAccount = await stripe.accounts.create({
    //   type: "express",
    //   country,
    //   capabilities: {
    //     card_payments: { requested: true },
    //     transfers: { requested: true },
    //   },
    // });

    const acctId = 'acct_1STTi6Bf4C5QrAiR';
    // create and account link (onboarding) which the client will open

    const accountLink = await stripe.accountLinks.create({
      account: acctId,
      refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/onboard/refresh`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/onboard/complete`,
      type: "account_onboarding",
    });

    // 3) optionally: persist acctId to your DB here (not shown) so you can lookup later
    return NextResponse.json({ url: accountLink.url, accountId: acctId });
  } catch (error) {
    console.error("Stripe onboarding error:", error);
    return NextResponse.json(
      { error: "failed_to_create_onboarding_link" },
      { status: 500 }
    );
  }
}
