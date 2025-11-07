"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { useLanguage } from "@/context/LanguageContext";

type Post = SanityDocument & {
  title: string;
  slug: { current: string };
  publishedAt: string;
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

function BlogPosts() {
  const { lang } = useLanguage();
  const [translatedPosts, setTranslatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchTranslations() {
      const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

      const translatedPosts = await Promise.all(
        posts.map(async (post) => {
          const res = await fetch(
            "/app/api/posts", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({ slug: post.slug.current, targetLang: lang }),
            }
          );
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
          };
        })
      );
      setTranslatedPosts(translatedPosts)
    }  
    fetchTranslations();
  }, [lang]);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {translatedPosts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/blogRoute/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BlogPosts;
