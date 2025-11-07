import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { translatePostIfNeeded } from "@/helpers/translationHelper";


export async function POST(req: NextRequest) {
     console.log("POST/api/posts called"); // <- add this
    try {
        const { slug, targetLang } = await req.json();
        const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
        const post = await client.fetch(POST_QUERY, { slug });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        const translated = await translatePostIfNeeded(post, targetLang);

        return NextResponse.json({ translated }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });  
    }
}

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const slug = url.searchParams.get("slug");
        const targetLang = url.searchParams.get("targetLang");

        console.log("GET/api/posts called with:", { slug, targetLang });

        if (!slug || !targetLang) {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
        const post = await client.fetch(POST_QUERY, { slug });
        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        const translated = await translatePostIfNeeded(post, targetLang);

        return NextResponse.json({ translated }, { status: 200 });
    } catch (error) {
        console.log("Error in GET /api/posts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}