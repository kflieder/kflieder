import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

function WebAppForm() {
  const { lang } = useLanguage();

  const features = {
    en: [
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
    ],
    es: [
      "Autenticación de usuarios",
      "Panel de usuario",
      "Panel de administrador",
      "Permisos basados en roles",
      "Analíticas y reportes",
      "Actualizaciones en tiempo real",
      "Reservas o programación",
      "Mensajería o chat",
      "Subida de archivos",
      "Sistema de pagos",
      "Integraciones con API",
      "Notificaciones",
      "Mapas / geolocalización",
      "Módulo de comercio electrónico",
      "Suscripciones y membresías",
    ],
  };

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">

      {/* App Purpose */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Briefly describe the purpose of your web app:"
            : "Describe brevemente el propósito de tu aplicación web:"}
        </label>
        <textarea
          name="app_purpose"
          rows={3}
          placeholder={
            lang === 'en'
              ? "e.g., a booking app for yoga classes"
              : "ej., una app de reservas para clases de yoga"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Key Features */}
      <div className="space-y-3">
        <label className="block text-sm font-medium mb-1">
          {lang === 'en' ? "What features do you need?" : "¿Qué funciones necesitas?"}
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">
          {(lang === 'en' ? features.en : features.es).map((feature) => (
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
          <label className="block text-sm mb-1">
            {lang === 'en' ? "Other features:" : "Otras funciones:"}
          </label>
          <input
            type="text"
            name="key_features_other"
            placeholder={
              lang === 'en'
                ? "Describe anything not listed"
                : "Describe cualquier cosa que no esté en la lista"
            }
            className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
          />
        </div>
      </div>

      {/* User Accounts */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Do users need to create accounts?"
            : "¿Los usuarios necesitan crear cuentas?"}
        </label>
        <select
          name="user_accounts"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="yes">{lang === 'en' ? "Yes" : "Sí"}</option>
          <option value="no">{lang === 'en' ? "No" : "No"}</option>
          <option value="unsure">
            {lang === 'en' ? "Not sure yet" : "Aún no estoy seguro"}
          </option>
        </select>
      </div>

      {/* Authentication Type */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en' ? "What type of login do you need?" : "¿Qué tipo de acceso necesitas?"}
        </label>
        <select
          name="auth_type"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="email-password">
            {lang === 'en' ? "Email + Password" : "Correo + Contraseña"}
          </option>
          <option value="google">{lang === 'en' ? "Google Login" : "Acceso con Google"}</option>
          <option value="facebook">{lang === 'en' ? "Facebook Login" : "Acceso con Facebook"}</option>
          <option value="magic-link">{lang === 'en' ? "Magic Link" : "Enlace mágico"}</option>
          <option value="multiple">
            {lang === 'en' ? "Multiple options" : "Opciones múltiples"}
          </option>
          <option value="none">{lang === 'en' ? "No login needed" : "No se necesita acceso"}</option>
        </select>
      </div>

      {/* Admin Dashboard */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Do you need an admin dashboard?"
            : "¿Necesitas un panel de administrador?"}
        </label>
        <select
          name="admin_dashboard"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="yes">{lang === 'en' ? "Yes" : "Sí"}</option>
          <option value="maybe">{lang === 'en' ? "Maybe" : "Tal vez"}</option>
          <option value="no">{lang === 'en' ? "No" : "No"}</option>
        </select>
      </div>

      {/* Database */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Do you already have a database?"
            : "¿Ya tienes una base de datos?"}
        </label>
        <select
          name="database"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="none">
            {lang === 'en' ? "No, I need one" : "No, necesito una"}
          </option>
          <option value="supabase">Supabase</option>
          <option value="firebase">Firebase</option>
          <option value="plan-to-use">
            {lang === 'en' ? "I know what DB I want" : "Sé qué base de datos quiero"}
          </option>
          <option value="unsure">
            {lang === 'en' ? "Not sure" : "No estoy seguro"}
          </option>
        </select>
      </div>

      {/* User Roles */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Do you need different user roles? (admin, client, vendor, member)"
            : "¿Necesitas diferentes roles de usuario? (admin, cliente, vendedor, miembro)"}
        </label>
        <input
          type="text"
          name="user_roles"
          placeholder={
            lang === 'en' ? "e.g., admin + basic users" : "ej., admin + usuarios básicos"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Integrations */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Do you need integrations? (Stripe, calendars, maps, APIs)"
            : "¿Necesitas integraciones? (Stripe, calendarios, mapas, APIs)"}
        </label>
        <input
          type="text"
          name="integrations"
          placeholder={
            lang === 'en'
              ? "e.g., Stripe + Google Calendar"
              : "ej., Stripe + Google Calendar"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "What’s your ideal timeline?"
            : "¿Cuál es tu tiempo ideal de entrega?"}
        </label>
        <select
          name="timeline"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="1-month">{lang === 'en' ? "1 month" : "1 mes"}</option>
          <option value="2-3-months">{lang === 'en' ? "2–3 months" : "2–3 meses"}</option>
          <option value="4-6-months">{lang === 'en' ? "4–6 months" : "4–6 meses"}</option>
          <option value="flexible">{lang === 'en' ? "Flexible" : "Flexible"}</option>
        </select>
      </div>

      {/* Extra Info */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {lang === 'en'
            ? "Anything else I should know?"
            : "¿Hay algo más que deba saber?"}
        </label>
        <textarea
          name="webapp_extra"
          rows={3}
          placeholder={
            lang === 'en'
              ? "Add any extra details or ideas!"
              : "¡Agrega cualquier detalle o idea extra!"
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

    </div>
  )
}

export default WebAppForm
