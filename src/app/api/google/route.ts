import { NextResponse} from 'next/server';

export async function GET(request: Request) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: 'Missing API key or Place ID' }, { status: 500 });
  }

 const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

 const res = await fetch(url);
 const data = await res.json();
 const reviews = data.result?.reviews?.map((review: any) => ({
    author: review.author_name,
    rating: review.rating,
    text: review.text,
    time: new Date(review.time * 1000).toLocaleDateString(),
  })) || [];

  return NextResponse.json({ rating: data.result.rating, totalReviews: data.result.user_ratings_total, author: data.result.author_name, reviews}, { status: 200 });
}