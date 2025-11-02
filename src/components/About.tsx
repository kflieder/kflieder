import React from "react";
import { useLanguage } from "@/context/LanguageContext";



function About() {
  const { t, lang } = useLanguage();
  return (
    <div id="about" className="border p-3 border-white/40 rounded-xl h-[60vh] overflow-auto scrollbar-hide text-white/80 bg-gradient-to-b from-white/5 to-transparent">
      <img
        className="w-46 mb-1 h-auto rounded-full float-left mr-6 border p-1"
        src="/profilePic.jpg"
        alt="Kacey Flieder"
      />
      <div dangerouslySetInnerHTML={{__html: t("about_text", lang)}} />
    </div>
  );
}

export default About;
