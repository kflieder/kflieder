import { NextResponse } from "next/server";

export async function GET() {
  console.log("🔥 minimal GET hit");
  return NextResponse.json({ message: "Minimal GET works!" });
}
