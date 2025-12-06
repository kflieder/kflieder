import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kaceycodes.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    { url: `${baseUrl}/#about` },
    { url: `${baseUrl}/#projects` },
    { url: `${baseUrl}/#contact` },
    { url: `${baseUrl}/#prices` },
    { url: `${baseUrl}/#whatsapp` },
    { url: `${baseUrl}/#socials` },
    { url: `${baseUrl}/#techstack` },
  ];
}
