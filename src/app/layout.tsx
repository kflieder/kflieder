import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Kacey Flieder | Full Stack Developer",
  description:
    "Full stack developer based in Mexico. Specializing in building modern websites, web applications, and scalable digital solutions using React, Next.js, and other web technologies.",
  authors: [{ name: "Kacey Flieder" }],
  robots: "index, follow",
  openGraph: {
    title: "Kacey Flieder | Full Stack Developer",
    description:
      "Full stack developer based in Mexico. Specializing in building modern websites, web applications, and scalable digital solutions using React, Next.js, and other web technologies.",
    type: "website",
    url: "https://kacey.yournook.app",
    images: [
      {
        url: "https://kacey.yournook.app/profilePic.jpg",
        width: 1200,
        height: 630,
        alt: "Kacey Flieder Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kacey Flieder | Full Stack Developer",
    description:
      "Full stack developer based in Mexico. Specializing in building modern websites, web applications, and scalable digital solutions using React, Next.js, and other web technologies.",
    images: ["https://kacey.yournook.app/ProfilePic.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Kacey Flieder",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Web Applications",
    "Software Engineer",
    "Programming",
    "Coding",
    "Web Design",
    "Digital Solutions",
    "Developer Portfolio",
  ],
};



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TBJXTJY75F"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          `}

          gtag('config', 'G-TBJXTJY75F');
        </Script>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
