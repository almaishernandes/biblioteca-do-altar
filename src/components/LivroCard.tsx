import { Link } from 'react-router-dom'
import type { Livro } from '../data/livros'

export function LivroCard({ livro }: { livro: Livro }) {
  const content = (
    <div className="group h-full rounded-2xl border border-[#e6d9c3] bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{livro.icone}</span>
          {!livro.disponivel && (
            <span className="text-xs font-medium bg-[#f3e9db] text-[#5c1220] px-2 py-1 rounded-full">
              Em breve
            </span>
          )}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#b8860b] mb-1">
          {livro.categoria}
        </p>
        <h3 className="text-lg font-bold text-[#5c1220] mb-2 leading-snug">{livro.titulo}</h3>
        <p className="text-sm text-gray-600 mb-4">{livro.descricaoCurta}</p>
      </div>
      <span className="text-sm font-semibold text-[#5c1220] group-hover:underline">
        {livro.disponivel ? 'Ler o guia →' : 'Em preparação'}
      </span>
    </div>
  )

  if (!livro.disponivel) return content

  return <Link to={`/livros/${livro.slug}`}>{content}</Link>
}
