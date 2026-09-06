export interface Livro {
  slug: string
  titulo: string
  subtitulo: string
  categoria: string
  descricaoCurta: string
  icone: string
  disponivel: boolean
  externalUrl?: string
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
  {
    slug: 'biblia-sagrada',
    titulo: 'Bíblia Sagrada',
    subtitulo: 'Sagrada Escritura — texto oficial em português',
    categoria: 'Textos Sagrados',
    descricaoCurta:
      'A Bíblia Sagrada na íntegra, em português, publicada oficialmente pelo site do Vaticano.',
    icone: '📕',
    disponivel: true,
    externalUrl: 'https://www.vatican.va/archive/bible/index_po.htm',
  },
  {
    slug: 'catecismo-igreja-catolica',
    titulo: 'Catecismo da Igreja Católica',
    subtitulo: 'Texto oficial completo, em português',
    categoria: 'Textos Sagrados',
    descricaoCurta:
      'O Catecismo da Igreja Católica na íntegra, publicado oficialmente pelo site do Vaticano — doutrina, moral e oração.',
    icone: '📘',
    disponivel: true,
    externalUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/prima-pagina-cic_po.html',
  },
  {
    slug: 'mes-de-maria',
    titulo: 'Mês de Maria',
    subtitulo: 'Devocionário mariano clássico (FTD)',
    categoria: 'Devocionários',
    descricaoCurta:
      'Devocionário mariano de domínio público, disponível gratuitamente para download no Internet Archive.',
    icone: '🌹',
    disponivel: true,
    externalUrl: 'https://archive.org/details/mes-de-maria-ftd',
  },
]
