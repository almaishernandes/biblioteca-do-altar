import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="bg-[#5c1220] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-2xl">📚</span>
          <span>Biblioteca — Servidores do Altar</span>
        </Link>
        <a
          href="https://servidoresdoaltar.site"
          className="text-sm text-amber-100 hover:text-white transition-colors"
        >
          ← Voltar ao site
        </a>
      </div>
    </header>
  )
}
