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

  const contentDivClass = `flex-grow lg:p-10 p-5 sm:h-[70vh] h-[80vh] overflow-auto scrollbar-hide ${
    animateOut ? "fade-scale-out" : "fade-scale-in"
  }`;

  return (
    <div className="bg-blue-950 w-full h-screen grid grid-cols-1 sm:grid-cols-2 text-white overflow-auto scrollbar-hide">
      <div className="relative flex flex-col justify-start gap-4 lg:justify-around p-10 space-y-4 border-r border-white/40 sm:my-10">
       <div className='flex sm:flex-col justify-between items-center sm:items-start'>
        <h1 className="text-5xl font-bold">Kacey Flieder</h1>
        <FaArrowCircleDown onClick={handleScroll} className="text-2xl animate-bounce mr-5 sm:hidden block" size={64} />
        <h2 className="text-2xl opacity-90 sm:block hidden">Full Stack Developer</h2>
        </div>
        <h2 className="text-2xl opacity-90 sm:hidden block">Full Stack Developer</h2>
        <div>
        <WhatsApp />
        </div>
        <TechStack />
        <Socials />
      </div>

      <div className="sm:pt-10 flex flex-col w-full">
        <div className="flex lg:flex-row flex-col w-full lg:justify-between lg:pb-5 border-b border-white/40 items-center">
          <h1
            className={`lg:order-1 order-2 text-5xl lg:pl-5 py-6 lg:py-10 uppercase tracking-widest font-thin text-center w-full ${
              animateOut ? "fade-scale-out" : "fade-scale-in"
            } ${
              activeTab !== "contact" && activeTab !== "about"
                ? "lg:pl-10 text-6xl"
                : ""
            } ${myFont.className}`}
          >
            {activeTab === "projects"
              ? "Projects"
              : activeTab === "prices"
              ? "Pricing"
              : activeTab === "about"
              ? "About Me"
              : "Contact Me"}
          </h1>
          <div ref={contentRef} className="lg:order-2 order-1">
          <NavBar setActiveTab={handleTabChange} />
          </div>
        </div>
        
        {activeTab === "projects" ? (
          <div ref={innerContentRef} className={contentDivClass}>
            <Projects />
          </div>
        ) : activeTab === "prices" ? (
          <div ref={innerContentRef} className={`${contentDivClass} lg:pt-0`}>
           <Prices />
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
