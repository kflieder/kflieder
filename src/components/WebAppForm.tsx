import React from 'react'

function WebAppForm() {
  return (
      <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">

    {/* App Purpose */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Briefly describe the purpose of your web app:
      </label>
      <textarea
        name="app_purpose"
        rows={3}
        placeholder="e.g., a booking app for yoga classes"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Key Features */}
    {/* Key Features (Checkbox List) */}
<div className="space-y-3">
  <label className="block text-sm font-medium mb-1">
    What features do you need?
  </label>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">

    {/* Checkbox Item */}
    {[
      "User authentication",
      "User dashboard",
      "Admin dashboard",
      "Role-based permissions",
      "Analytics & reporting",
      "Real-time updates",
      "Booking or scheduling",
      "Messaging or chat",
      "File uploads",
      "Payment system",
      "API integrations",
      "Notifications",
      "Maps / geolocation",
      "E-commerce module",
      "Subscriptions & memberships",
    ].map((feature) => (
      <label key={feature} className="flex items-center gap-2">
        <input
          type="checkbox"
          name="key_features[]"
          value={feature}
          className="h-4 w-4 rounded bg-blue-900 border-blue-300 text-blue-400"
        />
        <span className="text-sm">{feature}</span>
      </label>
    ))}

  </div>

  {/* Other Field */}
  <div className="pt-2">
    <label className="block text-sm mb-1">Other features:</label>
    <input
      type="text"
      name="key_features_other"
      placeholder="Describe anything not listed"
      className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
    />
  </div>
</div>

    {/* User Accounts */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do users need to create accounts?
      </label>
      <select
        name="user_accounts"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="unsure">Not sure yet</option>
      </select>
    </div>

    {/* Authentication Type */}
    <div>
      <label className="block text-sm font-medium mb-1">
        What type of login do you need?
      </label>
      <select
        name="auth_type"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="email-password">Email + Password</option>
        <option value="google">Google Login</option>
        <option value="facebook">Facebook Login</option>
        <option value="magic-link">Magic Link</option>
        <option value="multiple">Multiple options</option>
        <option value="none">No login needed</option>
      </select>
    </div>

    {/* Admin Dashboard */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you need an admin dashboard?
      </label>
      <select
        name="admin_dashboard"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="yes">Yes</option>
        <option value="maybe">Maybe</option>
        <option value="no">No</option>
      </select>
    </div>

    {/* Database */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you already have a database?
      </label>
      <select
        name="database"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="none">No, I need one</option>
        <option value="supabase">Supabase</option>
        <option value="firebase">Firebase</option>
        <option value="plan-to-use">I know what DB I want</option>
        <option value="unsure">Not sure</option>
      </select>
    </div>

    {/* User Roles */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you need different user roles? (admin, client, vendor, member)
      </label>
      <input
        type="text"
        name="user_roles"
        placeholder="e.g., admin + basic users"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Integrations */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you need integrations? (Stripe, calendars, maps, APIs)
      </label>
      <input
        type="text"
        name="integrations"
        placeholder="e.g., Stripe + Google Calendar"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Timeline */}
    <div>
      <label className="block text-sm font-medium mb-1">
        What’s your ideal timeline?
      </label>
      <select
        name="timeline"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="1-month">1 month</option>
        <option value="2-3-months">2–3 months</option>
        <option value="2-3-months">4-6 months</option>
        <option value="flexible">Flexible</option>
      </select>
    </div>

    {/* Anything else */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Anything else I should know?
      </label>
      <textarea
        name="webapp_extra"
        rows={3}
        placeholder="Add any extra details or ideas!"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

  </div>
  )
}

export default WebAppForm
