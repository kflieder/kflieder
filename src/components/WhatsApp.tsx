import React from "react";

function WhatsApp() {
  return (
    <div id='whatsapp'>
      <a
        href="https://wa.me/+529991744413"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="inline-flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 hover:bg-green-100 hover:border-green-300 transition"
      >
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-green-600/10 text-green-700"
        >
          {/* Replace with WhatsApp icon */}
          <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
        </span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsApp;
