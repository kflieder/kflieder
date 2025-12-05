import React from 'react'
import { useLanguage } from '@/context/LanguageContext';

function MaintenanceForm() {
 const { lang } = useLanguage();
 const maintenanceFeatures = {
  en: [
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
  ],
  es: [
    "Actualizaciones mensuales del sitio web",
    "Actualización de contenido (texto/imágenes)",
    "Agregar/eliminar páginas",
    "Monitoreo y mejoras de SEO",
    "Optimización del rendimiento",
    "Mejoras de velocidad",
    "Monitoreo de seguridad",
    "Copias de seguridad y restauración",
    "Actualización de plugins (WordPress)",
    "Corrección de errores",
    "Revisión de enlaces rotos",
    "Soporte de hosting",
    "Ayuda con dominio/DNS",
    "Monitoreo de tiempo en línea",
    "Configuración/soporte de correo electrónico",
  ],
};

  return (
   <div className="space-y-3">
  <label className="block text-sm font-medium mb-1">
    {lang === 'en' ? 'What maintenance services do you need?' : '¿Qué servicios de mantenimiento necesitas?'}
  </label>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">

    {/* Checkbox Items */}
    {lang === 'en' ? maintenanceFeatures.en.map((item) => (
      <label key={item} className="flex items-center gap-2">
        <input
          type="checkbox"
          name="maintenance_needs[]"
          value={item}
          className="h-4 w-4 rounded bg-blue-900 border-blue-300 text-blue-400"
        />
        <span className="text-sm">{item}</span>
      </label>
    )) : (
      maintenanceFeatures.es.map((item) => (
        <label key={item} className="flex items-center gap-2">
        <input
          type="checkbox"
          name="maintenance_needs[]"
          value={item}
          className="h-4 w-4 rounded bg-blue-900 border-blue-300 text-blue-400"
        />
        <span className="text-sm">{item}</span>
      </label>
      ))
    )}
  </div>

  {/* Frequency */}
  <div className="pt-3 space-y-1">
    <label className="block text-sm font-medium">
      {lang === 'en' ? 'How often do you need maintenance?' : '¿Con qué frecuencia necesitas mantenimiento?'}
    </label>
    <select
      name="maintenance_frequency"
      className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
    >
      <option value="">{lang === 'en' ? 'Select frequency…' : 'Selecciona la frecuencia…'}</option>
      <option value="one-time">{lang === 'en' ? 'One-time fix' : 'Una sola vez'}</option>
      <option value="monthly">{lang === 'en' ? 'Monthly' : 'Mensual'}</option>
      <option value="quarterly">{lang === 'en' ? 'Quarterly' : 'Trimestral'}</option>
      <option value="as-needed">{lang === 'en' ? 'As needed' : 'Según sea necesario'}</option>
    </select>
  </div>

  {/* Other Field */}
  <div className="pt-2">
    <label className="block text-sm mb-1">{lang === 'en' ? 'Other maintenance needs:' : 'Otros servicios de mantenimiento:'}</label>
    <input
      type="text"
      name="maintenance_other"
      placeholder={lang === 'en' ? 'Describe anything not listed' : 'Describe cualquier cosa que no esté en la lista'}
      className="w-full px-4 py-2 rounded-md bg-blue-950 border border-blue-200 text-white placeholder-blue-200/40"
    />
  </div>
</div>
  )
}

export default MaintenanceForm
