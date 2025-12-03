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
import TiltCard from "./TiltCard";

type Post = SanityDocument & {
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: {
    name: string;
  };
};

const myFont = Kelly_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, title_es, slug, publishedAt, mainImage, author->{name}}`;
const options = { next: { revalidate: 30 } };

function BlogPosts() {
  const { lang } = useLanguage();
  const { projectId, dataset } = client.config();
  const builder =
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;
  const urlFor = (source: SanityImageSource) =>
    builder ? builder.image(source) : null;
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      async function fetchPosts() {
        setIsLoading(true);
        try {
          const data = await client.fetch<Post[]>(POSTS_QUERY, {}, options)
          const postsWithImages = data.map((post) => ({
        ...post,
        imageUrl: post.mainImage ? urlFor(post.mainImage)?.fit("clip").auto("format").url() : null,
      }));
          setPosts(postsWithImages)
        } catch (error) {
          console.error('error fetching posts', error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchPosts();
    }, [])
 

  // useEffect(() => {
  //   async function fetchTranslations() {
  //     setIsLoading(true);
  //     try {
  //       const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  //       const translatedPosts = await Promise.all(
  //         posts.map(async (post) => {
  //           const res = await fetch("/api/posts", {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //               slug: post.slug.current,
  //               targetLang: lang,
  //             }),
  //           });

  //           const postImageUrl = post.mainImage
  //             ? urlFor(post.mainImage)?.fit("clip").auto("format").url()
  //             : null;
  //           if (!res.ok) {
  //             console.error(
  //               `Failed to fetch translation for post: ${post.slug.current}`
  //             );
  //             return post; // Return original post if translation fails
  //           }
  //           const data = await res.json();
  //           return {
  //             ...post,
  //             title: data.translated?.title || post.title,
  //             imageUrl: postImageUrl,
  //           };
  //         })
  //       );
  //       console.log(posts);
  //       setTranslatedPosts(translatedPosts);
  //     } catch (error) {
  //       console.error("Error fetching translated posts:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchTranslations();
  // }, [lang]);

  return (
    <main className="flex flex-col items-center justify-center container mx-auto w-full sm:max-w-6xl sm:p-8 pt-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h1
          className={`sm:text-7xl text-3xl tracking-widest mb-8 ${myFont.className} drop-shadow-[0_0_5px_#a16eff]`}
        >
          Code & Cosmos
        </h1>
        <h3>
          This page is currently under construction, feel free to check back
          periodically to see it's evolution :){" "}
        </h3>
      </div>
      <div className="sm:max-w-3xl relative w-full h-[20vh] rounded-xl mb-8 flex justify-center items-center text-center">
        {/* <img
          src="/stars.jpg"
          alt="galaxy"
          className="absolute w-full h-[20vh] object-cover rounded-xl opacity-50"
          
        /> */}
        <div className="absolute inset-0 star-bg rounded-xl"></div>

        <div className="h-[20vh] overflow-hidden rounded-xl">
          <div className=" w-full rounded-xl bg-black/60 overflow-hidden">
            <MatrixBanner />
          </div>
        </div>
        <h3
          className={`sm:text-2xl text-3xl tracking-widest absolute ${myFont.className}`}
        >
          Inisghts for Tech, Mind, and Business
        </h3>
      </div>
      <ul className="grid sm:grid-cols-4 grid-cols-1 gap-4 w-full place-items-center">
        {isLoading ? (
          <div className="flex col-span-4 justify-center items-center w-full p-10">
            <div className="loader w-full"></div>
          </div>
        ) : (
         posts.map((post) => (
            <TiltCard key={post._id}>
              <Link href={`/blogRoute/${post.slug.current}?lang=${lang}`}>
                {post.imageUrl && (
                  <div className="overflow-hidden absolute top-0">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="object-contain h-full w-full"
                    />
                  </div>
                )}

                <div
                  className={`absolute bottom-0 right-0 left-0 bg-black p-2 pt-5 flex flex-col justify-between rounded-b-xl h-34 ${myFont.className}`}
                  style={{
                    clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
                  }}
                >
                  <h2 className="text-base">{lang === 'en' ? post.title : post.title_es}</h2>
                  <div className="text-xs flex justify-between w-full">
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                    <p>{post.author.name}</p>
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))
        )}
      </ul>
    </main>
  );
}

export default BlogPosts;
