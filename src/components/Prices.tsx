"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function Prices() {
  const { t, lang } = useLanguage();

  const packages = [
    {
      title: t('landing_title', lang),
      price: {
        usd: 25,
        mxn: 500,
      },
      description:
        t('landing_desc', lang),
      features: [
        t('landing_features_1', lang),
        t('landing_features_2', lang),
        t('landing_features_3', lang),
        t('landing_features_4', lang),
        t('landing_features_5', lang),
      ],
    },
    {
      title: t('multi_title', lang),
      price: {
        usd: "50–100",
        mxn: "1000–2000",
      },
      description:
        t('multi_desc', lang),
      features: [
        t('multi_features_1', lang),
        t('multi_features_2', lang),
        t('multi_features_3', lang),
        t('multi_features_4', lang),
        t('multi_features_5', lang),
        t('multi_features_6', lang),
      ],
    },
    {
      title: t('ecom_title', lang),
      price: {
        usd: 250,
        mxn: 5000,
      },
      description:
        t('ecom_desc', lang),
      features: [
        t('ecom_features_1', lang),
        t('ecom_features_2', lang),
        t('ecom_features_3', lang),
        t('ecom_features_4', lang),
        t('ecom_features_5', lang),
        t('ecom_features_6', lang),
        t('ecom_features_7', lang),
      ],
    },
  ];

  
const addOns = [
  {
    title: t('extra_page_title', lang),
    price: t('extra_page_price', lang),
    currency: t('currency', lang),
    description: t('extra_page_desc', lang)
  },
  {
    title: t('extra_products_title', lang),
    price: t('extra_products_price', lang),
    unit: t('per_10_products', lang),
    currency: t('currency', lang),
    description: t('extra_products_desc', lang)
  },
  {
    title: t('seo_title', lang),
    price: t('seo_price', lang),
    billing: t('monthly', lang),
    currency: t('currency', lang),
    description: t('seo_desc', lang)
  },
  {
    title: t('extra_revisions_title', lang),
    price: t('custom', lang),
    description: t('extra_revisions_desc', lang)
  },
  {
    title: t('custom_animations_title', lang),
    priceRange: t('custom_animations_priceRange', lang),
    currency: t('currency', lang),
    description: t('custom_animations_desc', lang)
  },
  {
    title: t('blog_integration_title', lang),
    price: t('blog_integration_price', lang),
    currency: t('currency', lang),
    description: t('blog_integration_desc', lang)
  },
  {
    title: t('logo_banner_title', lang),
    price: t('logo_banner_price', lang),
    currency: t('currency', lang),
    description: t('logo_banner_desc', lang)
  },
  {
    title: t('maintenance_title', lang),
    price: t('maintenance_price', lang),
    billing: t('monthly', lang),
    currency: t('currency', lang),
    description: t('maintenance_desc', lang)
  },
  {
    title: t('domain_hosting_title', lang),
    price: t('domain_hosting_price', lang),
    currency: t('currency', lang),
    description: t('domain_hosting_desc', lang)
  },
  {
    title: t('email_form_title', lang),
    price: t('email_form_price', lang),
    currency: t('currency', lang),
    description: t('email_form_desc', lang)
  },
  {
    title: t('translation_setup_title', lang),
    price: t('translation_setup_price', lang),
    currency: t('currency', lang),
    description: t('translation_setup_desc', lang)
  },
  {
    title: t('analytics_pixel_title', lang),
    price: t('analytics_pixel_price', lang),
    currency: t('currency', lang),
    description: t('analytics_pixel_desc', lang)
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
                    {
                      addon.billing && <span className="text-xs text-white/70">({addon.billing})</span>
                    }
                    {
                      addon.unit && <span className="text-xs text-white/70">({addon.unit})</span>
                    }
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
