"use client";
import React, { useRef, useState } from "react";
import TechStack from "./TechStack";
import NavBar from "./NavBar";
import Socials from "./Socials";
import Projects from "./Projects";
import { Barlow } from "next/font/google";
import Prices from "./Prices";
import About from "./About";
import Contact from "./Contact";
import { FaArrowCircleDown } from "react-icons/fa";
import WhatsApp from "./WhatsApp";
import { useLanguage } from "@/context/LanguageContext";
import MainNav from "./MainNav";
import Reviews from "./reviews/Reviews";

const myFont = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function LandingPage() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "prices" | "about" | "contact"
  >("projects");
  const [animateOut, setAnimateOut] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerContentRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLanguage, t } = useLanguage();

  const handleTabChange = (
    newTab: "projects" | "prices" | "about" | "contact"
  ) => {
    if (newTab === activeTab) return;
    setAnimateOut(true);

    if (innerContentRef.current) {
      innerContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    const timeout = setTimeout(() => {
      setActiveTab(newTab);
      setAnimateOut(false);
    }, 300);
    return () => clearTimeout(timeout);
  };

  function handleScroll() {
    if (contentRef.current) {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const contentDivClass = `flex-grow p-5 sm:h-[70vh] h-[80vh] overflow-auto scrollbar-hide ${
    animateOut ? "fade-scale-out" : "fade-scale-in"
  }`;

  return (
    <div className="relative bg-blue-950 w-full h-screen grid grid-cols-1 sm:grid-cols-2 text-white overflow-auto sm:overflow-hidden">
      <div className="relative flex flex-col justify-start gap-8 lg:justify-around sm:p-10 pb-15 border-r border-white/40 sm:mb-10">
        <MainNav />
        <div className="flex sm:flex-row flex-col justify-center items-center sm:items-start gap-6 sm:gap-0">
          <div className="flex flex-col justify-around items-center sm:items-start w-full gap-4">
            <h1 className="text-4xl font-bold w-auto shrink-0">
              Kacey Flieder
            </h1>
            <h2 className="text-2xl opacity-90 block sm:hidden">
            {t("role", lang)}
          </h2>
            <FaArrowCircleDown
              onClick={handleScroll}
              className="text-2xl animate-bounce sm:hidden flex"
              size={54}
            />
            <h2 className="text-xl opacity-90 sm:block hidden">
              {t("role", lang)}
            </h2>
            <WhatsApp />
          </div>
          

          <TechStack />
        </div>

        <Reviews />

        <Socials />
      </div>
      <button
        onClick={toggleLanguage}
        className="underline underline-offset-4 absolute top-2 right-5 sm:right-8 z-10 cursor-pointer"
      >
        {lang === "es" ? "English" : "Español"}
      </button>

      <div className="sm:pt-5 flex flex-col w-full">
        <div className="flex flex-col w-full lg:justify-between lg:pb-5 border-b border-white/40 items-center">
          <h1
            className={`text-5xl py-6 lg:py-10 uppercase tracking-widest font-thin text-center w-full ${
              animateOut ? "fade-scale-out" : "fade-scale-in"
            } ${
              activeTab !== "contact" && activeTab !== "about" ? "text-6xl" : ""
            } ${myFont.className}`}
          >
            {activeTab === "projects"
              ? t("projects", lang)
              : activeTab === "prices"
                ? t("prices", lang)
                : activeTab === "about"
                  ? t("about", lang)
                  : t("contact", lang)}
          </h1>
          <div ref={contentRef} className="w-full">
            <NavBar setActiveTab={handleTabChange} activeTab={activeTab} />
          </div>
        </div>

        {activeTab === "projects" ? (
          <div id="projects" ref={innerContentRef} className={contentDivClass}>
            <Projects />
          </div>
        ) : activeTab === "prices" ? (
          <div
            id="prices"
            ref={innerContentRef}
            className={`${contentDivClass} mb-20`}
          >
            <Prices setActiveTab={handleTabChange} activeTab={activeTab} />
          </div>
        ) : activeTab === "about" ? (
          <div ref={innerContentRef} className={contentDivClass}>
            <About />
          </div>
        ) : (
          <div ref={innerContentRef} className={`${contentDivClass} px-0`}>
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
