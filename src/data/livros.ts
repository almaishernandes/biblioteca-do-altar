export interface Livro {
  slug: string
  titulo: string
  subtitulo: string
  categoria: string
  descricaoCurta: string
  icone: string
  disponivel: boolean
}

export const livros: Livro[] = [
  {
    slug: 'guia-zelusdomus',
    titulo: 'Guia de Uso do ZelusDomus',
    subtitulo: 'O passo a passo do aplicativo, função por função',
    categoria: 'Formação e Gestão',
    descricaoCurta:
      'Como entrar no ZelusDomus e o que cada função enxerga — de Coroinha a Coordenador — com a fórmula da senha e um roteiro completo de cada tela.',
    icone: '📖',
    disponivel: true,
  },
]
