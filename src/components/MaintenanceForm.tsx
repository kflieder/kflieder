import React from 'react'

function MaintenanceForm() {
  return (
   <div className="space-y-3">
  <label className="block text-sm font-medium mb-1">
    What maintenance services do you need?
  </label>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">

    {/* Checkbox Items */}
    {[
      "Monthly website updates",
      "Content updates (text/images)",
      "Add/remove pages",
      "SEO monitoring & improvements",
      "Performance optimization",
      "Speed improvements",
      "Security monitoring",
      "Backups & restoration",
      "Plugin updates (WordPress)",
      "Bug fixes",
      "Broken link checks",
      "Hosting support",
      "Domain/DNS help",
      "Uptime monitoring",
      "Email setup/support",
    ].map((item) => (
      <label key={item} className="flex items-center gap-2">
        <input
          type="checkbox"
          name="maintenance_needs[]"
          value={item}
          className="h-4 w-4 rounded bg-blue-900 border-blue-300 text-blue-400"
        />
        <span className="text-sm">{item}</span>
      </label>
    ))}
  </div>

  {/* Frequency */}
  <div className="pt-3 space-y-1">
    <label className="block text-sm font-medium">
      How often do you need maintenance?
    </label>
    <select
      name="maintenance_frequency"
      className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
    >
      <option value="">Select frequency…</option>
      <option value="one-time">One-time fix</option>
      <option value="monthly">Monthly</option>
      <option value="quarterly">Quarterly</option>
      <option value="as-needed">As needed</option>
    </select>
  </div>

  {/* Other Field */}
  <div className="pt-2">
    <label className="block text-sm mb-1">Other maintenance needs:</label>
    <input
      type="text"
      name="maintenance_other"
      placeholder="Describe anything not listed"
      className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
    />
  </div>
</div>
  )
}

export default MaintenanceForm
