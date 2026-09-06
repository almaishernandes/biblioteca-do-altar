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
      </section>
    </div>
  )
}
