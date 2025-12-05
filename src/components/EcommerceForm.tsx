import React from "react";
import { useLanguage } from "../context/LanguageContext";

function EcommerceForm() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">

      {/* Product Count */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Cuántos productos vas a vender?"
            : "How many products will you be selling?"}
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
          {isEs
            ? "¿Tus productos tienen variaciones? (tallas, colores, materiales)"
            : "Do your products have variations? (sizes, colors, materials)"}
        </label>
        <input
          type="text"
          name="product_variations"
          placeholder={
            isEs
              ? "ej: tallas S-XL, colores negro/blanco"
              : "e.g., sizes S-XL, colors black/white"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Photos & Descriptions */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Ya tienes fotos y descripciones de los productos?"
            : "Do you already have product photos and descriptions?"}
        </label>
        <select
          name="product_content_ready"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="yes">
            {isEs ? "Sí, todo está listo" : "Yes, everything is ready"}
          </option>
          <option value="some">
            {isEs ? "Algunas" : "Some"}
          </option>
          <option value="no">
            {isEs ? "Aún no" : "Not yet"}
          </option>
        </select>
      </div>

      {/* Payment Methods */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Qué métodos de pago quieres aceptar?"
            : "Which payment methods do you want to accept?"}
        </label>
        <input
          type="text"
          name="payment_methods"
          placeholder={
            isEs
              ? "ej: Stripe, PayPal, OXXO, transferencia bancaria"
              : "e.g., Stripe, PayPal, OXXO, bank transfer"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Shipping Options */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Necesitas opciones de envío? (local, nacional, internacional)"
            : "Do you need shipping options? (local, national, international)"}
        </label>
        <input
          type="text"
          name="shipping_options"
          placeholder={
            isEs
              ? "ej: Envío local + DHL nacional"
              : "e.g., Local + DHL national shipping"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Inventory Tracking */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Necesitas control de inventario?"
            : "Do you need inventory tracking?"}
        </label>
        <select
          name="inventory_tracking"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="yes">{isEs ? "Sí" : "Yes"}</option>
          <option value="no">{isEs ? "No" : "No"}</option>
          <option value="unsure">{isEs ? "No estoy seguro" : "Not sure"}</option>
        </select>
      </div>

      {/* Discount Codes */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Quieres cupones de descuento o funciones promocionales?"
            : "Do you want discount codes or promo features?"}
        </label>
        <select
          name="discount_codes"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="yes">{isEs ? "Sí" : "Yes"}</option>
          <option value="later">{isEs ? "Quizás después" : "Maybe later"}</option>
          <option value="no">{isEs ? "No" : "No"}</option>
        </select>
      </div>

      {/* Special Requirements */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {isEs
            ? "¿Algún requisito especial? (suscripciones, membresías, productos digitales)"
            : "Any special requirements? (subscriptions, memberships, digital products)"}
        </label>
        <textarea
          name="special_reqs"
          rows={3}
          placeholder={
            isEs
              ? "Cuéntame lo que necesitas..."
              : "Tell me anything specific you need..."
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

    </div>
  );
}

export default EcommerceForm;
