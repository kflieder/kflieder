import React from 'react'

function EcommerceForm() {
  return (
     <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">

    {/* Product Count */}
    <div>
      <label className="block text-sm font-medium mb-1">
        How many products will you be selling?
      </label>
      <select
        name="product_count"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="1-10">1–10</option>
        <option value="10-50">10–50</option>
        <option value="50-200">50–200</option>
        <option value="200+">200+</option>
      </select>
    </div>

    {/* Product Variations */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do your products have variations? (sizes, colors, materials)
      </label>
      <input
        type="text"
        name="product_variations"
        placeholder="e.g., sizes S-XL, colors black/white"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Photos & Descriptions */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you already have product photos and descriptions?
      </label>
      <select
        name="product_content_ready"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="yes">Yes, everything is ready</option>
        <option value="some">Some</option>
        <option value="no">Not yet</option>
      </select>
    </div>

    {/* Payment Methods */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Which payment methods do you want to accept?
      </label>
      <input
        type="text"
        name="payment_methods"
        placeholder="e.g., Stripe, PayPal, OXXO, bank transfer"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Shipping Options */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you need shipping options? (local, national, international)
      </label>
      <input
        type="text"
        name="shipping_options"
        placeholder="e.g., Local + DHL national shipping"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>

    {/* Inventory Tracking */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you need inventory tracking?
      </label>
      <select
        name="inventory_tracking"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="unsure">Not sure</option>
      </select>
    </div>

    {/* Discount Codes */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Do you want discount codes or promo features?
      </label>
      <select
        name="discount_codes"
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
      >
        <option value="yes">Yes</option>
        <option value="later">Maybe later</option>
        <option value="no">No</option>
      </select>
    </div>

    {/* Special Requirements */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Any special requirements? (subscriptions, memberships, digital products)
      </label>
      <textarea
        name="special_reqs"
        rows={3}
        placeholder="Tell me anything specific you need..."
        className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
      />
    </div>
    </div>
  )
}

export default EcommerceForm
