"use client";
import BlogPosts from "@/components/BlogPosts";
import MainNav from "@/components/MainNav";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

function page() {
  const { lang, toggleLanguage } = useLanguage();
  return (
    <div className="bg-blue-950 text-white h-screen overflow-auto flex flex-col">
     <div className="flex justify-between items-center p-10">
        <MainNav />
        <button
          onClick={toggleLanguage}
          className="underline underline-offset-4 cursor-pointer"
        >
          {lang === "es" ? "English" : "Español"}
        </button>
        </div>
      
      <BlogPosts />
      
    </div>
  );
}

export default page;
