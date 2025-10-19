import React from 'react'

function AILandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Web Developer</p>
              <h1 className="text-lg font-semibold">Kacey Flieder</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#work" className="hover:text-indigo-600">Work</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a
              href="https://github.com/kflieder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white bg-gray-900 hover:bg-gray-800 px-3 py-2 rounded-md"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 opacity-10" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-medium tracking-wide text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                Available for freelance work
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                Modern, fast, and maintainable websites for your business
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                I build responsive landing pages, multi‑page sites, and e‑commerce experiences with clean code and best practices.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/19784760831"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                  aria-label="Chat on WhatsApp (US)"
                >
                  WhatsApp (US)
                </a>
                <a
                  href="https://wa.me/529991744413"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
                  aria-label="Chat on WhatsApp (MX)"
                >
                  WhatsApp (MX)
                </a>
                <a
                  href="tel:+19784760831"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                  aria-label="Call US number"
                >
                  Call: +1 (978) 476‑0831
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                MX: +52 (999) 174‑4413
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl ring-1 ring-black/10 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-gray-300">Clean TypeScript + React</p>
                  <p className="mt-1 text-2xl font-semibold text-white">Tailwind CSS • Accessibility • Performance</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <div className="px-4 py-3 rounded-lg bg-white shadow border text-sm">
                  <span className="font-medium">Stack:</span> React, TypeScript, Tailwind, Next.js, Node, Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Pricing */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-bold">Services & Pricing</h3>
        <p className="mt-2 text-gray-600">Straightforward packages with clear deliverables.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Landing Page */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Basic Landing Page</h4>
            <p className="mt-1 text-sm text-gray-500">Perfect for announcements or single offers.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">$25</span>
              <span className="ml-2 text-gray-500 text-sm">USD</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-2xl font-bold">500</span>
              <span className="ml-2 text-gray-500 text-sm">MXN</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Responsive single page</li>
              <li>• Contact/CTA integration</li>
              <li>• Basic SEO and analytics ready</li>
            </ul>
          </div>

          {/* Multi-page */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold">Multi‑Page Website</h4>
            <p className="mt-1 text-sm text-gray-500">3–6 pages for businesses and portfolios.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold">$50</span>
              <span className="ml-2 text-gray-500 text-sm">USD</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-2xl font-bold">1000</span>
              <span className="ml-2 text-gray-500 text-sm">MXN</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Home + inner pages</li>
              <li>• Tailored components and forms</li>
              <li>• Performance and accessibility pass</li>
            </ul>
          </div>

          {/* E‑commerce */}
          <div className="rounded-xl border border-indigo-200 bg-white p-6 shadow-[0_6px_30px_-12px_rgba(99,102,241,0.25)]">
            <div className="inline-block px-2 py-1 mb-2 text-xs font-medium text-indigo-700 bg-indigo-50 rounded">
              Most requested
            </div>
            <h4 className="text-lg font-semibold">E‑commerce (Stripe)</h4>
            <p className="mt-1 text-sm text-gray-500">
              1 home page + 1 catalog page, up to 40 products, payment integration.
            </p>
            <div className="mt-4 text-gray-700">
              Custom quote
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Product listing + detail modal</li>
              <li>• Checkout with Stripe or similar</li>
              <li>• Basic inventory and order email</li>
            </ul>
          </div>
        </div>

        {/* Add‑ons */}
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-6 bg-gray-50">
          <h5 className="font-semibold">Add‑ons (extra cost)</h5>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-700">
            <li>• User authentication and account creation</li>
            <li>• Blog/CMS integration</li>
            <li>• Translations (EN/ES)</li>
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold">Sample Work</h3>
            <p className="mt-2 text-gray-600">Placeholders for recent projects.</p>
          </div>
          <a
            href="https://github.com/kflieder"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-700"
          >
            View GitHub →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['Sample Project 1', 'Sample Project 2', 'Sample Project 3', 'Sample Project 4', 'Sample Project 5'].map(
            (title, i) => (
              <a
                key={title}
                href="#"
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition"
                aria-label={`${title} (placeholder)`}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-300 group-hover:text-white transition">{title}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500">Coming soon</p>
                </div>
              </a>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 md:p-12 text-white">
          <h3 className="text-2xl font-bold">Let’s build something great</h3>
          <p className="mt-2 text-indigo-100">
            Share your idea and get a free estimate within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/19784760831"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-indigo-700 hover:bg-indigo-50"
            >
              WhatsApp US
            </a>
            <a
              href="https://wa.me/529991744413"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20"
            >
              WhatsApp MX
            </a>
            <a
              href="tel:+19784760831"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20"
            >
              Call: +1 (978) 476‑0831
            </a>
            <a
              href="https://github.com/kflieder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Kacey Flieder. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kflieder" target="_blank" rel="noreferrer" className="hover:text-gray-900">
              github.com/kflieder
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="tel:+19784760831" className="hover:text-gray-900">
              +1 978‑476‑0831
            </a>
            <a href="tel:+529991744413" className="hover:text-gray-900">
              +52 999‑174‑4413
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AILandingPage
