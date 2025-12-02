import { PortableText, type SanityDocument } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import type { JSX } from "react";
import ShareButton from "@/components/ShareButton";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{ 
  _id,
  title,
  title_es,
  slug,
  publishedAt,
  mainImage,
  body,
  body_es,
  author->{name}
}`;
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

async function PostPage({ params, searchParams }: PostPageProps) {
  const { lang = "en" } = searchParams ?? {};

  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);

 
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(550).height(310).url()
    : null;
    
  const components = {
  marks: {
    strong: (props: any) => <strong>{props.children}</strong>,
    em: (props: any) => <em>{props.children}</em>,
    link: (props: any) => (
      <a href={props.value.href} target="_blank" rel="noopener noreferrer" className="underline text-blue-500">
        {props.children}
      </a>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed whitespace-pre-line">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-4">{children}</h3>,
  },
};





  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 border mt-10">
      <div className='w-full flex justify-between'>
      <Link href="/blogs" className="hover:underline">
        ← Back to posts
      </Link>
      <ShareButton title={post.title} />
      </div>
      <div className='w-full flex justify-center'>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      </div>
      <h1 className="text-4xl font-bold mb-8">
        {lang === 'en' ? post.title : post.title_es}
      </h1>
      <div className="prose prose-invert max-w-none">
        <PortableText
          value={lang === 'en' ? post.body : post.body_es}
          components={components}
        />
      </div>
    </main>
  );
}

export default PostPage as unknown as (props: any) => Promise<JSX.Element>;
