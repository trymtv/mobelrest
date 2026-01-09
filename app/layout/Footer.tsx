import React from 'react'

export default function Footer() {
  return (
      <footer className="w-full bg-brand-900 text-brand-100 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tight">
            MOBELREST
          </div>
          <p className="text-brand-400 text-sm">
            © {new Date().getFullYear()} Mobelrest. All rights reserved.
          </p>
        </div>
      </footer>
  );
}