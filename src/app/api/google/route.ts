import { NextResponse} from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "Missing API key or Place ID", reviews: [] },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    const reviews =
      Array.isArray(data?.result?.reviews)
        ? data.result.reviews.map((r: any) => ({
            author: r.author_name ?? "Anonymous",
            rating: r.rating ?? 0,
            text: r.text ?? "",
            time: r.time ?? null,
          }))
        : [];

    return NextResponse.json({ reviews });
  } catch (err) {
    return NextResponse.json(
      { error: "Google API failed", reviews: [] },
      { status: 500 }
    );
  }
}
