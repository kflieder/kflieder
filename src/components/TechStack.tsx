import React from 'react'

function TechStack() {
  return (
    <div id='techstack' className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_8px] shadow-emerald-400/60" aria-hidden="true" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400/10 px-3 py-1.5 text-sm text-sky-200 ring-1 ring-inset ring-sky-400/30">
                    <span className="text-base">⚛️</span>
                    React
                  </span>
                   <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-400/10 px-3 py-1.5 text-sm text-gray-200 ring-1 ring-inset ring-gray-400/30">
                    <span className="font-semibold">N</span>
                    Next.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-400/10 px-3 py-1.5 text-sm text-purple-200 ring-1 ring-inset ring-purple-400/30">
                    <span className="text-base">💳</span>
                    Stripe
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-400/10 px-3 py-1.5 text-sm text-neutral-200 ring-1 ring-inset ring-neutral-400/30">
                    <span className="text-base">▲</span>
                    Vercel
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-400/10 px-3 py-1.5 text-sm text-teal-200 ring-1 ring-inset ring-teal-400/30">
                    <span className="font-semibold">TW</span>
                    Tailwind CSS
                  </span>
                 
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400/10 px-3 py-1.5 text-sm text-amber-200 ring-1 ring-inset ring-amber-400/30">
                    <span className="text-base">🔥</span>
                    Firebase
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-400/10 px-3 py-1.5 text-sm text-blue-200 ring-1 ring-inset ring-blue-400/30">
                    <span className="font-semibold">TS</span>
                    TypeScript
                  </span>
                  
                </div>
              </div>
  )
}

export default TechStack
