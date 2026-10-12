import { Link } from 'react-router-dom'
import { livros } from '../data/livros'
import { LivroCard } from '../components/LivroCard'

export function Home() {
  return (
    <div>
      <section className="bg-[#5c1220] text-white text-center px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Biblioteca de Livros</h1>
        <p className="max-w-xl mx-auto text-amber-100">
          Guias, manuais e materiais de consulta para os Servidores do Altar.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {livros.map((livro) => (
            <LivroCard key={livro.slug} livro={livro} />
          ))}
        </div>

        <Link
          to="/igreja-catolica"
          className="mt-6 flex items-center gap-3 rounded-xl border border-[#0f4c81]/20 p-4 hover:shadow-md transition-shadow"
        >
          <span className="text-2xl shrink-0">🌍</span>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">A Igreja Católica</h3>
            <p className="text-xs text-gray-500">
              Notícias, liturgia diária, rádios, TVs e cursos de formação católica.
            </p>
          </div>
        </Link>
      </section>
    </div>
  )
}
