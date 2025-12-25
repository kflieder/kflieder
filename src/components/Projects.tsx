import React from 'react'
import { useLanguage } from '@/context/LanguageContext';

function Projects() {

  const { t, lang } = useLanguage();

  const projects = [
    {
      title: t("project_econido_title", lang),
      description: t("project_econido_desc", lang),
      link: "https://econido.mx/",
      imageSrc: '/econido.png',
    },
    {
      title: t("project_property_title", lang),
      description: t("project_property_desc", lang),
      link: "https://kabila.net/",
      imageSrc: '/brooke.png',
    },
    {
      title: t("project_ecom_title", lang),
      description: t("project_ecom_desc", lang),
      link: "https://www.casa-sale-in-merida.com/",
      imageSrc: '/lisa-kabila.png',
    },
   
    {
      title: t("project_portfolio_title", lang),
      description: t("project_portfolio_desc", lang),
      link: "https://kflieder.github.io/PhotographerPortfolio/",
      imageSrc: "/photoHome.png",
    },
    {
      title: t("project_fitness_title", lang),
      description: t("project_fitness_desc", lang),
      link: "https://kflieder.github.io/Fitness-Trainer/",
      imageSrc: "/fitnessHome.png",
    },
     {
      title: t("project_yournook_title", lang),
      description: t("project_yournook_desc", lang),
      link: "https://www.yournook.app",
      imageSrc: "/feedPage.png",
    }
    
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div id={`project-${index}`} key={index} className="mb-8 p-4 border border-white/20 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-md ring-1 ring-transparent hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 transition"
            >
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-white/5">
              <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="mt-4 flex items-start justify-between gap-3 px-2">
              <div>
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-1 text-sm text-white/70">
                {project.description}
              </p>
              </div>
              <svg
              className="mt-1 h-5 w-5 flex-none text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              >
              <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </div>
            </a>
        </div>
      ))}
    </>
  );
}

export default Projects
