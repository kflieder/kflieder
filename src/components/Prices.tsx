"use client";
import React, { useState } from "react";

function Prices() {
  const packages = [
    {
      title: "Landing Page",
      price: {
        usd: 25,
        mxn: 500,
      },
      description:
        "Perfect for individuals or small businesses who need a sleek, single-page presence.",
      features: [
        "1 fully responsive page",
        "Custom design with your branding",
        "Contact form or call-to-action button",
        "Deployed and hosted (Vercel)",
        "1 round of revisions included",
      ],
    },
    {
      title: "Multi-Page Website",
      price: {
        usd: "50–100",
        mxn: "1000–2000",
      },
      description:
        "Ideal for growing businesses that need multiple pages for services, portfolios, or content.",
      features: [
        "Up to 3 custom pages",
        "Navigation bar + page routing",
        "Responsive design for all devices",
        "SEO optimization setup",
        "Integrated contact form",
        "2 rounds of revisions included",
      ],
    },
    {
      title: "E-commerce Website",
      price: {
        usd: 250,
        mxn: 5000,
      },
      description:
        "A complete online store setup for selling products with secure payments and modern design.",
      features: [
        "1 home page + product page with up to 40 products",
        "Product listings and categories",
        "Shopping cart functionality",
        "Stripe integration",
        "Customer checkout + order confirmation",
        "Deployed and configured for production",
        "3 rounds of revisions included",
      ],
    },
  ];

  
const addOns = [
  {
    title: "Extra Page",
    price: 25,
    currency: "USD",
    description: "Add an extra page to your site — perfect for FAQs, galleries, or brand stories."
  },
  {
    title: "Extra Products",
    price: 15,
    unit: "per 10 products",
    currency: "USD",
    description: "Expand your product catalog easily with batches of 10 new items."
  },
  {
    title: "Monthly SEO Optimization",
    price: 25,
    billing: "monthly",
    currency: "USD",
    description: "Continuous SEO tuning — keywords, meta descriptions, and speed optimization."
  },
  {
    title: "Extra Revisions",
    price: "Custom",
    description: "Pricing depends on the complexity of the changes — content vs. layout."
  },
  {
    title: "Custom Animations / Effects",
    priceRange: "20–50",
    currency: "USD",
    description: "Bring your site to life with subtle hover effects and motion animations."
  },
  {
    title: "Blog Integration",
    price: 40,
    currency: "USD",
    description: "Add a full blog section for news, updates, or SEO-rich content."
  },
  {
    title: "Basic Logo or Banner Design",
    price: 30,
    currency: "USD",
    description: "Simple, clean visuals that align perfectly with your website’s aesthetic."
  },
  {
    title: "Maintenance & Updates",
    price: 30,
    billing: "monthly",
    currency: "USD",
    description: "Regular site updates, backups, and security monitoring."
  },
  {
    title: "Domain + Hosting Setup",
    price: 20,
    currency: "USD",
    description: "Get your domain and hosting connected — fully handled for you. (Unless you choose Vercel free plan, that is included in the package prices.)"
  },
  {
    title: "Email / Contact Form Integration",
    price: 20,
    currency: "USD",
    description: "Seamlessly connects your site’s forms to your email or CRM."
  },
  {
    title: "Language Translation Setup",
    price: 30,
    currency: "USD",
    description: "Add multi-language functionality for international visitors."
  },
  {
    title: "Google Analytics + Meta Pixel Setup",
    price: 15,
    currency: "USD",
    description: "Track traffic and conversions with Google and Meta tracking tools."
  }
];


  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  function togglePackageDetails(title: string) {
    setExpandedPackage((prev) => (prev === title ? null : title));
  }

  return (
    <>
      {packages.map((pkg) => (
        <div
          id={`package-${pkg.title}`}
          key={pkg.title}
          className="mb-4 rounded-xl border border-white/15 bg-white/5 px-6 pt-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-white/10"
        >
          <div className="flex items-end justify-between gap-4 border-b border-white/10 ">
            <h3 className="text-lg font-semibold tracking-tight">{pkg.title}</h3>
            <div className="text-right">
              <div className="text-sm flex flex-col font-medium">
            <span className="text-emerald-300">{pkg.price.usd} usd</span>
            
            <span className="text-emerald-300">{pkg.price.mxn} mxn</span>
              </div>
            </div>
          </div>

          

          <button
            type="button"
            onClick={() => togglePackageDetails(pkg.title)}
            aria-expanded={expandedPackage === pkg.title}
            className="group relative mx-auto mt-4 flex flex-col items-center text-sm font-medium text-indigo-300 hover:text-white focus:outline-none cursor-pointer"
          >
            <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 backdrop-blur-sm">
              View details
            </span>
            <svg
              className={`mt-1 h-4 w-4 transition-transform duration-300 ${expandedPackage === pkg.title ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`mb-4 overflow-hidden transition-all duration-300 ${
              expandedPackage === pkg.title ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="mt-3 text-sm text-white/70">{pkg.description}</p>
            <ul className="space-y-2 pl-1">
              {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    <div className="mt-8 border-t border-white/20 pt-6">
        <h2 className="mb-4 text-2xl font-bold">Add-Ons</h2>
        {addOns.map((addon) => (
            <div key={addon.title} className="mb-4 rounded-xl border border-white/15 bg-white/5 px-6 pt-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-white/10">
              <div className="flex items-end justify-between gap-4 border-b border-white/10 ">
                <h3 className="text-lg font-semibold tracking-tight">{addon.title}</h3>
                <div className="text-right">
                  <div className="text-sm flex flex-col font-medium">
                    {addon.priceRange ? (
                      <span className="text-emerald-300">{addon.priceRange} {addon.currency}</span>
                    ) : (
                      <span className="text-emerald-300">{addon.price} {addon.currency}</span>
                    )}
                  </div>
                </div>
                
                
              </div>
              <div className="my-2 text-sm text-white/70">
                {addon.description}
              </div>
            </div>
        ))}
    </div>
    </>
  );
}

export default Prices;
