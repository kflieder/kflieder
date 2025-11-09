"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { useLanguage } from "@/context/LanguageContext";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Kelly_Slab } from "next/font/google";
import MatrixBanner from "./MatrixBanner";

type Post = SanityDocument & {
  title: string;
  slug: { current: string };
  publishedAt: string;
};

const myFont = Kelly_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage}`;
const options = { next: { revalidate: 30 } };

function BlogPosts() {
  const { lang } = useLanguage();
  const [translatedPosts, setTranslatedPosts] = useState<Post[]>([]);
  const { projectId, dataset } = client.config();
  const builder =
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;
  const urlFor = (source: SanityImageSource) =>
    builder ? builder.image(source) : null;
  const cardRef = useRef<HTMLLIElement | null>(null);
  const [style, setStyle] = useState({ transform: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Max rotation of 10 degrees
    const rotateY = ((x - centerX) / centerX) * -10; // Max rotation of 10 degrees

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(600px) rotateX(0deg) rotateY(0deg)" });
  };

  useEffect(() => {
    async function fetchTranslations() {
      setIsLoading(true);
      try {
        const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

        const translatedPosts = await Promise.all(
          posts.map(async (post) => {
            const res = await fetch("/api/posts", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                slug: post.slug.current,
                targetLang: lang,
              }),
            });

            const postImageUrl = post.mainImage
              ? urlFor(post.mainImage)?.fit("clip").auto("format").url()
              : null;
            if (!res.ok) {
              console.error(
                `Failed to fetch translation for post: ${post.slug.current}`
              );
              return post; // Return original post if translation fails
            }
            const data = await res.json();
            return {
              ...post,
              title: data.translated?.title || post.title,
              imageUrl: postImageUrl,
            };
          })
        );
        setTranslatedPosts(translatedPosts);
      } catch (error) {
        console.error("Error fetching translated posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTranslations();
  }, [lang]);

  return (
    <main className="flex flex-col items-center justify-center container mx-auto w-full sm:max-w-3xl sm:p-8 pt-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h1
          className={`sm:text-7xl text-3xl tracking-widest mb-8 ${myFont.className} drop-shadow-[0_0_5px_#a16eff]`}
        >
          Code & Cosmos
        </h1>
        <h3>This page is currently under construction, feel free to check back periodically to see it's evolution :) </h3>
      </div>
      <div className="relative w-full h-[20vh] rounded-xl mb-8 flex justify-center items-center text-center"
      
      >
        {/* <img
          src="/stars.jpg"
          alt="galaxy"
          className="absolute w-full h-[20vh] object-cover rounded-xl opacity-50"
          
        /> */}
        <div className="absolute inset-0 star-bg rounded-xl"></div>

        <div className="h-[20vh] overflow-hidden rounded-xl">
          <div className=" w-full rounded-xl bg-black/60 overflow-hidden"
          >
            <MatrixBanner />
          </div>
        </div>
        <h3
          className={`sm:text-2xl text-3xl tracking-widest absolute ${myFont.className}`}
        >
          Inisghts for Tech, Mind, and Business
        </h3>
      </div>
      <ul className="flex flex-col gap-y-4 w-full">
        {isLoading ? (
          <div className="flex justify-center items-center w-full p-10">
            <div className="loader w-full"></div>
          </div>
        ) : (
          translatedPosts.map((post) => (
            <li
              ref={cardRef}
              className="hover:underline border-4 rounded-2xl border-white/50 w-full sm:w-54 h-74  relative"
              key={post._id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={style}
            >
              <Link href={`/blogRoute/${post.slug.current}?lang=${lang}`}>
                {post.imageUrl && (
                  <div className="h-full w-full rounded-xl overflow-hidden absolute top-0">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="rounded-xl object-conver h-full w-full"
                    />
                  </div>
                )}

                <div
                  className={`absolute bottom-2.5 right-2.5 left-2.5 bg-black p-2 rounded-b-xl ${myFont.className}`}
                  style={{
                    clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
                  }}
                >
                  <h2 className="text-base">{post.title}</h2>
                  <p className="text-xs">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}

export default BlogPosts;
