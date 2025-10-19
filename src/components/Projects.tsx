import React from 'react'

function Projects() {

  const projects = [
    {
      title: "E-commerce Website",
      description: "Online store selling artisan bags, clothing, and pillows. Built with React, Tailwind CSS, Firebase, and Stripe. Features include product listings, shopping cart, and secure checkout using stripe integration.",
      link: "https://lisa-kabila.vercel.app/",
      imageSrc: "/lisa-kabila.png",
    },
    {
      title: "yourNook.app",
      description: "A social media platform that features 3 infinite scroll feeds: Posts, Blogs, and Discussion Threads. Built with next.js, Tailwind CSS, and Firebase for authentication and data storage.",
      link: "https://www.yournook.app",
      imageSrc: "/feedPage.png",
    },
    {
      title: "Portfolio Landing Page",
      description: "A personal portfolio landing page showcasing a photographer. Built with HTML, CSS, and JavaScript. Features include image galleries, about me section, and contact form.",
      link: "https://kflieder.github.io/PhotographerPortfolio/",
      imageSrc: "/photoHome.png",
    },
    {
      title: "Fitness Instructors Landing Page",
      description: "A landing page for a fitness instructor to showcase their services and attract clients. Built with html, css, and javascript. Features include service listings, testimonials, and contact form.",
      link: "https://kflieder.github.io/Fitness-Trainer/",
      imageSrc: "/fitnessHome.png",
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
