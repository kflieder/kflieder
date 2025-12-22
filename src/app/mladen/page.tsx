"use client";

import { useState } from "react";

export default function ProjectIntakeForm() {
  const [formData, setFormData] = useState({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form
      action="https://usebasin.com/f/2efa799ea8ea"
      method="POST"
      className="space-y-10 max-w-3xl mx-auto border p-10"
    >
      {/* Big Picture & Goals */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Big Picture & Goals</h2>

        <div className="space-y-2">
          <label className="font-medium">
            What is the main goal of this website?
          </label>
          <p className="text-sm text-gray-500">
            You mentioned selling art and promoting mentorship programming —
            feel free to expand or clarify.
          </p>
          <textarea
            name="mainGoal"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">Who is your ideal visitor?</label>
          <textarea
            name="idealVisitor"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </section>

      {/* Pages & Structure */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Pages & Structure</h2>

        <div className="space-y-2">
          <label className="font-medium">
            Which pages do you want on the site?
          </label>
          <p className="text-sm text-gray-500">
            Examples: Homepage, Gallery, Shop, About, Contact
          </p>
          <textarea
            name="pagesWanted"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">
            How do you imagine users moving between the gallery and the shop?
          </label>
          <p className="text-sm text-gray-500">
            Example: A visitor browses the gallery, clicks a piece they like,
            views details (size, price, description), and can purchase directly
            from that page.  
            Some artists choose to have the gallery double as the shop so users
            can buy art the moment they connect with it.
          </p>
          <textarea
            name="galleryVsShop"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </section>

      {/* Art & Content */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Art & Content</h2>

        <div className="space-y-2">
          <label className="font-medium">
            How many art pieces will be available at launch?
          </label>
          <input
            name="artCount"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">
            Do you already have titles, descriptions, sizes, or editions?
          </label>
          <textarea
            name="artDetails"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">
            Will your art be organized into sections or categories?
          </label>
          <p className="text-sm text-gray-500">
            For example: collections, themes, styles, series
          </p>
          <textarea
            name="artCategories"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </section>

      {/* Ecommerce */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Ecommerce</h2>

        <div className="space-y-2">
          <label className="font-medium">What will be sold?</label>
          <p className="text-sm text-gray-500">
            Originals, prints, digital downloads, etc. (I know we already talked about prints, but let me know if you would also like to be able to take orders for originals and digitals)
          </p>
          <textarea
            name="productsSold"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">Preferred payment methods?</label>
          <p className="text-sm text-gray-500">Stripe, PayPal, etc</p>
          <textarea
            name="payments"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </section>

      {/* Branding & Visuals */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Branding & Visuals</h2>

        <div className="space-y-2">
          <label className="font-medium">Do you have a logo?</label>
          <input
            name="logo"
            onChange={handleChange}
            className="w-full p-3 border rounded"  
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">
            Do you have a preferred color scheme or reference websites?
          </label>
          <p className="text-sm text-gray-500">
            Links are welcome.
          </p>
          <textarea
            name="colorSchemeOrReferences"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="space-y-2 mt-6">
          <label className="font-medium">
            How would you describe the overall vibe?
          </label>
          <p className="text-sm text-gray-500">
            Minimal, bold, dark, expressive, artsy, etc.
          </p>
          <textarea
            name="visualStyle"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
        </div>
      </section>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded hover:opacity-90 transition"
      >
        Submit Project Details
      </button>
    </form>
  );
}
