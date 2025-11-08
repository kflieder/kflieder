import { PortableText, type SanityDocument } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { translatePostIfNeeded } from "@/helpers/translationHelper";
import type { JSX } from "react";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const { projectId, dataset } = client.config();
const builder =
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;
const urlFor = (source: SanityImageSource) =>
  builder ? builder.image(source) : null;

const options = { next: { revalidate: 30 } };

type PostPageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

async function PostPage({
  params,
  searchParams,
}: PostPageProps) {
  const { lang = "en" } = searchParams ?? {};

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    params,
    options
  );
  const translatedPost = await translatePostIfNeeded(post, lang);

  console.log("🪶 LANG:", lang);
  console.log(
    "📦 ORIGINAL POST BODY TYPE:",
    typeof post.body,
    Array.isArray(post.body)
  );
  console.log("📜 TRANSLATED POST:", JSON.stringify(translatedPost, null, 2));
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blogs" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{translatedPost.title || post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {typeof translatedPost.body === "string" ? (
          <div>{translatedPost.body}</div>
        ) : (
          <PortableText value={translatedPost.body} />
        )}
      </div>
    </main>
  );
}

export default PostPage as unknown as (props: any) => Promise<JSX.Element>;
