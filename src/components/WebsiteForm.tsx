import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

function WebsiteForm() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-4 mt-4">

      {/* Business Name */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Business Name' : 'Nombre del negocio'}
        </label>
        <input
          type="text"
          name="businessName"
          placeholder={lang === 'en' ? 'e.g. Luna Café' : 'ej. Luna Café'}
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Page Count */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'How many pages?' : '¿Cuántas páginas?'}
        </label>
        <input
          type="number"
          name="pageCount"
          placeholder={lang === 'en' ? 'e.g. 3' : 'ej. 3'}
          min="1"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Domain */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en'
            ? 'Do you already have a domain?'
            : '¿Ya tienes un dominio?'}
        </label>
        <select
          name="domain"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">{lang === 'en' ? 'Select an option' : 'Selecciona una opción'}</option>
          <option value="yes">{lang === 'en' ? 'Yes' : 'Sí'}</option>
          <option value="no">{lang === 'en' ? 'No' : 'No'}</option>
          <option value="help">{lang === 'en' ? 'I need help choosing one' : 'Necesito ayuda eligiendo uno'}</option>
        </select>
      </div>

      {/* Branding */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Logo + Branding' : 'Logo + Identidad visual'}
        </label>
        <select
          name="branding"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">{lang === 'en' ? 'Select an option' : 'Selecciona una opción'}</option>
          <option value="yes">
            {lang === 'en'
              ? 'I already have a logo + branding'
              : 'Ya tengo logo + branding'}
          </option>
          <option value="partial">
            {lang === 'en'
              ? 'I have some assets but need help'
              : 'Tengo algunos elementos pero necesito ayuda'}
          </option>
          <option value="no">
            {lang === 'en'
              ? 'I need full branding done'
              : 'Necesito un branding completo'}
          </option>
        </select>
      </div>

      {/* Copywriting */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Do you need copywriting?' : '¿Necesitas redacción?'}
        </label>
        <select
          name="copywriting"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">{lang === 'en' ? 'Select an option' : 'Selecciona una opción'}</option>
          <option value="no">
            {lang === 'en'
              ? 'No, I will provide all text'
              : 'No, yo proporcionaré todo el texto'}
          </option>
          <option value="yes">
            {lang === 'en'
              ? 'Yes, please write the copy'
              : 'Sí, por favor escribe el texto'}
          </option>
          <option value="mixed">
            {lang === 'en'
              ? 'I will provide some, need help with some'
              : 'Proveeré parte, necesito ayuda con otra parte'}
          </option>
        </select>
      </div>

      {/* Website Type */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'What type of website?' : '¿Qué tipo de sitio web?'}
        </label>
        <select
          name="siteType"
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white"
        >
          <option value="">{lang === 'en' ? 'Select a type' : 'Selecciona un tipo'}</option>
          <option value="personal">{lang === 'en' ? 'Personal' : 'Personal'}</option>
          <option value="portfolio">{lang === 'en' ? 'Portfolio' : 'Portafolio'}</option>
          <option value="business">{lang === 'en' ? 'Business' : 'Negocio'}</option>
          <option value="restaurant">{lang === 'en' ? 'Restaurant / Menu' : 'Restaurante / Menú'}</option>
          <option value="real-estate">{lang === 'en' ? 'Real estate' : 'Bienes raíces'}</option>
          <option value="booking">{lang === 'en' ? 'Booking / Appointments' : 'Reservas / Citas'}</option>
          <option value="other">{lang === 'en' ? 'Other' : 'Otro'}</option>
        </select>
      </div>

      {/* Inspiration Websites */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en'
            ? 'Any example websites you like?'
            : '¿Algún sitio de ejemplo que te guste?'}
        </label>
        <input
          type="text"
          name="inspirationSites"
          placeholder={lang === 'en' ? 'Paste URLs (optional)' : 'Pega URLs (opcional)'}
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Deadline */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Timeline / Deadline' : 'Plazo / Fecha límite'}
        </label>
        <input
          type="text"
          name="deadline"
          placeholder={
            lang === 'en'
              ? 'e.g. 2 weeks, end of month'
              : 'ej. 2 semanas, fin de mes'
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div>

      {/* Budget */}
      {/* <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Budget range (optional)' : 'Rango de presupuesto (opcional)'}
        </label>
        <input
          type="text"
          name="budget"
          placeholder={lang === 'en' ? 'e.g. $200–$500' : 'ej. $200–$500'}
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
        />
      </div> */}

      {/* Extra Notes */}
      <div>
        <label className="block text-sm mb-1">
          {lang === 'en' ? 'Additional details (optional)' : 'Detalles adicionales (opcional)'}
        </label>
        <textarea
          name="notes"
          placeholder={
            lang === 'en'
              ? 'Anything else you want me to know?'
              : '¿Algo más que deba saber?'
          }
          className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40 h-24 resize-none"
        />
      </div>

    </div>
  );
}

export default WebsiteForm
