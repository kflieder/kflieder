import React from 'react'

function WebsiteForm() {
  return (
     <div className="space-y-4 mt-4">

      {/* Business Name */}
      <div>
        <label className="block text-sm mb-1">Business Name</label>
        <input
          type="text"
          name="businessName"
          placeholder="e.g. Luna Café"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Page Count */}
      <div>
        <label className="block text-sm mb-1">How many pages?</label>
        <input
          type="number"
          name="pageCount"
          placeholder="e.g. 3"
          min="1"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Domain */}
      <div>
        <label className="block text-sm mb-1">Do you already have a domain?</label>
        <select
          name="domain"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="help">I need help choosing one</option>
        </select>
      </div>

      {/* Branding */}
      <div>
        <label className="block text-sm mb-1">Logo + Branding</label>
        <select
          name="branding"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">Select an option</option>
          <option value="yes">I already have a logo + branding</option>
          <option value="partial">I have some assets but need help</option>
          <option value="no">I need full branding done</option>
        </select>
      </div>

      {/* Copywriting */}
      <div>
        <label className="block text-sm mb-1">Do you need copywriting?</label>
        <select
          name="copywriting"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">Select an option</option>
          <option value="no">No, I will provide all text</option>
          <option value="yes">Yes, please write the copy</option>
          <option value="mixed">I will provide some, need help with some</option>
        </select>
      </div>

      {/* Website Type */}
      <div>
        <label className="block text-sm mb-1">What type of website?</label>
        <select
          name="siteType"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">Select a type</option>
          <option value="personal">Personal</option>
          <option value="portfolio">Portfolio</option>
          <option value="business">Business</option>
          <option value="restaurant">Restaurant / Menu</option>
          <option value="real-estate">Real estate</option>
          <option value="booking">Booking / Appointments</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Inspiration Websites */}
      <div>
        <label className="block text-sm mb-1">Any example websites you like?</label>
        <input
          type="text"
          name="inspirationSites"
          placeholder="Paste URLs (optional)"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Deadline */}
      <div>
        <label className="block text-sm mb-1">Timeline / Deadline</label>
        <input
          type="text"
          name="deadline"
          placeholder="e.g. 2 weeks, end of month"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm mb-1">Budget range (optional)</label>
        <input
          type="text"
          name="budget"
          placeholder="e.g. $200–$500"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Extra Notes */}
      <div>
        <label className="block text-sm mb-1">Additional details (optional)</label>
        <textarea
          name="notes"
          placeholder="Anything else you want me to know?"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40 h-24 resize-none"
        />
      </div>

    </div>
  )
}

export default WebsiteForm
