import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import WebsiteForm from "./WebsiteForm";
import EcommerceForm from "./EcommerceForm";
import WebAppForm from "./WebAppForm";
import MaintenanceForm from "./MaintenanceForm";

function ContactFormEng() {
  const [service, setService] = useState("");
  console.log(service);
  return (
    <form
      action="https://usebasin.com/f/2efa799ea8ea"
      method="POST"
      className="max-w-xl mx-auto p-6 bg-white/10 backdrop-blur-sm text-white rounded-lg shadow-lg space-y-8"
    >
      <h2 className="text-2xl font-semibold">Contact Me</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium">What are you looking for?</label>

        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="mt-1 group relative w-full bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40 focus:ring-2 focus:ring-blue-400 rounded-md px-4 py-2 data-placeholder:text-blue-200/40 text-base">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>

          <SelectContent className="bg-blue-950 text-white border border-blue-800">
            <SelectItem value="website">Website</SelectItem>
            <SelectItem value="ecommerce">E-commerce</SelectItem>
            <SelectItem value="webapp">Web App</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {service === "website" && <WebsiteForm />}
      {service === "ecommerce" && <EcommerceForm />}
      {service === "webapp" && <WebAppForm />}
      {service === "maintenance" && <MaintenanceForm />}
      {service === "other" && (
        <div>
          <label className="block text-sm font-medium mb-1">
            Tell me what you’re looking for
          </label>
          <textarea
            name="other_details"
            rows={4}
            placeholder="Describe your project or idea..."
            className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full py-2 px-4 border hover:bg-white/20 transition-all duration-300 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactFormEng;
