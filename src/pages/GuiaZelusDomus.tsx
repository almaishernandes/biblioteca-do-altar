import { Link } from 'react-router-dom'

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border border-[#b8860b]/30 bg-[#f3e9db] px-4 py-3 text-sm text-[#5c1220]">
      {children}
    </div>
  )
}

function TierBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide bg-[#5c1220] text-white px-2 py-1 rounded-full">
      {children}
    </span>
  )
}

export function GuiaZelusDomus() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Link to="/" className="text-sm text-gray-500 hover:text-[#5c1220]">
        ← Todos os livros
      </Link>

      <header className="mt-6 mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#b8860b] mb-2">
          Guia de uso
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#5c1220] mb-3">
          O passo a passo do ZelusDomus
        </h1>
        <p className="text-gray-600">
          Como entrar no aplicativo e o que cada função enxerga — de Coroinha a Coordenador —
          para consultar sempre que precisar.
        </p>
      </header>

      <article className="prose-content text-gray-800 leading-relaxed space-y-4">
        <p>
          O ZelusDomus é o aplicativo que organiza a escala, a formação e os cadastros dos
          Servidores do Altar. Todo mundo entra pela mesma tela, com e-mail e senha; o que muda é
          o que cada função consegue ver e fazer depois de entrar. Este guia explica isso, função
          por função.
        </p>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">Como entrar</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Abra <code className="bg-[#f3e9db] px-1 rounded">zelusdomus.servidoresdoaltar.site</code>{' '}
            no navegador do celular ou do computador.
          </li>
          <li>
            Digite o <strong>e-mail de acesso</strong> cadastrado e a <strong>senha</strong>.
          </li>
          <li>
            Toque em <strong>Entrar</strong>.
          </li>
        </ol>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Senha na primeira vez</h3>
        <p>
          Se você ainda não trocou sua senha, ela segue uma destas duas fórmulas, de acordo com a
          sua função:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-[#e6d9c3]">
                <th className="py-2 pr-4">Função</th>
                <th className="py-2 pr-4">Fórmula da senha</th>
                <th className="py-2">Exemplo (cadastro nº 045)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e6d9c3]">
                <td className="py-2 pr-4">Coroinha / Acólito</td>
                <td className="py-2 pr-4 font-mono">Altar@{'{'}número de cadastro{'}'}</td>
                <td className="py-2 font-mono">Altar@045</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Monitor / Cerimoniário / Coordenador</td>
                <td className="py-2 pr-4 font-mono">
                  {'{'}Primeiro nome{'}'}@{'{'}número de cadastro{'}'}
                </td>
                <td className="py-2 font-mono">Joao@045</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout>
          <strong>Recomendado:</strong> depois do primeiro acesso, troque a senha em "Esqueci
          minha senha" na tela de login — digite seu e-mail, confira a caixa de entrada (e o
          spam) e siga o link para criar uma senha só sua.
        </Callout>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">O que todo mundo vê</h2>
        <p>
          Estas duas telas aparecem para <strong>qualquer pessoa</strong> logada, em qualquer
          função — inclusive pelo celular, onde o app sempre mostra só estas duas, para manter a
          navegação simples na tela pequena.
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Agenda e Calendário</h3>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Agenda do Servidor</dt>
            <dd className="text-gray-600">
              Suas próximas participações nos próximos 6 meses. Coroinha e Acólito já veem a
              própria agenda direto, sem precisar escolher nada. Dá para gerar PDF ou enviar por
              WhatsApp.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Agenda da Comunidade</dt>
            <dd className="text-gray-600">
              Quem está escalado em cada horário de missa da semana, por comunidade.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Calendário Anual</dt>
            <dd className="text-gray-600">
              Visão mês a mês de uma comunidade inteira, com todas as participações do ano.
            </dd>
          </div>
        </dl>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Formação e Estudos</h3>
        <p>
          Escolha um <strong>Tema</strong>, depois um <strong>Assunto</strong> dentro dele, e o
          conteúdo de formação aparece na tela — o mesmo material usado nas reuniões, disponível
          para consulta a qualquer momento.
        </p>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">
          Coroinha e Acólito
          <TierBadge>acesso básico</TierBadge>
        </h2>
        <p>
          Essas duas funções têm acesso <strong>só</strong> às telas acima. Não é necessário
          fazer mais nada — ao entrar, o app já abre direto na Agenda, com a própria participação
          em destaque.
        </p>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">
          Monitor e Cerimoniário
          <TierBadge>acesso ampliado</TierBadge>
        </h2>
        <p>
          Além de Agenda e Calendário e Formação e Estudos, também acessam as telas de Coroinhas,
          Acólitos, Monitores, Cerimoniários, Coordenadores, Comunidades, Ata de Reunião e
          Relatórios — com a lista completa de cadastrados em cada uma. Na Agenda do Servidor, dá
          pra escolher qualquer pessoa no seletor, não só a própria.
        </p>
        <Callout>
          <strong>Não têm acesso a:</strong> Formação Cadastro e Livro Caixa — exclusivos do
          Coordenador.
        </Callout>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">
          Coordenador
          <TierBadge>acesso total</TierBadge>
        </h2>
        <p>
          Vê tudo o que Monitor/Cerimoniário vê, mais dois módulos exclusivos:{' '}
          <strong>Formação Cadastro</strong> (gerenciar os temas usados em Formação e Estudos) e{' '}
          <strong>Livro Caixa</strong>. É o único perfil que cadastra servidores, comunidades e
          cria login para novas pessoas.
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Cadastrar um novo servidor</h3>
        <p>
          Em Coroinhas / Acólitos / Monitores / Cerimoniários / Coordenadores, toque em{' '}
          <strong>Cadastrar Novo</strong>. Preencha ao menos Cadastro, Nome, Nascimento e WhatsApp
          — e, se preencher o campo <strong>E-mail de acesso</strong>, o app já cria o login
          sozinho, mostrando a senha temporária na hora para você repassar ao servidor.
        </p>
        <p>
          Mais abaixo no formulário: Residência, Responsáveis (para Coroinha/Acólito/
          Cerimoniário), Sacramentos, Investidura, e em quais comunidades a pessoa atua, com a
          grade de dias e horários de missa.
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Cadastrar uma comunidade</h3>
        <p>
          Em Comunidades → Cadastrar Nova Comunidade: nome, endereço e os horários de missa de
          cada dia da semana — esses horários alimentam automaticamente a Agenda e o Calendário
          Anual.
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Ata de Reunião</h3>
        <p>
          Em <strong>Inserir Reunião</strong>, crie um tema com local, data e horário — o convite
          para os servidores é gerado automaticamente a partir desses dados. Depois,{' '}
          <strong>Imprimir Ata</strong> monta a ata completa (presença, avaliações, plano de ação
          e assinaturas), pronta para imprimir ou enviar por WhatsApp.
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Livro Caixa</h3>
        <p>
          Em <strong>Incluir</strong>, lance um débito ou crédito com Emissão, Vencimento,
          Descrição e Centro de Custo — o saldo acumulado é calculado sozinho. No cabeçalho:{' '}
          <strong>Gerenciar Centro de Custos</strong> e <strong>Relatório Anual</strong> (receitas
          e despesas por centro de custo, mês a mês).
        </p>

        <h3 className="text-lg font-semibold text-[#5c1220] pt-2">Relatórios</h3>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Aniversariantes</dt>
            <dd className="text-gray-600">Mês atual e o seguinte, com data e idade.</dd>
          </div>
          <div>
            <dt className="font-semibold">Relação Servidores</dt>
            <dd className="text-gray-600">
              Todos juntos, com função — ordenável por cadastro ou por nome.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Relação por Função</dt>
            <dd className="text-gray-600">Uma tabela por função, colunas padronizadas.</dd>
          </div>
          <div>
            <dt className="font-semibold">Comunidades</dt>
            <dd className="text-gray-600">Nome e horário de missa de cada uma.</dd>
          </div>
        </dl>

        <h2 className="text-xl font-bold text-[#5c1220] pt-2">Dicas finais</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Cada módulo do menu lateral tem uma cor própria — ajuda a reconhecer a tela pela cor,
            não só pelo nome.
          </li>
          <li>
            No celular, o menu sempre mostra só Agenda e Calendário + Formação e Estudos, mesmo
            para Monitor, Cerimoniário e Coordenador — o acesso completo é pelo computador.
          </li>
          <li>
            Alguns botões só aparecem dentro da tela certa — "Gerenciar Centro de Custos" e
            "Relatório Anual", por exemplo, só existem dentro do Livro Caixa.
          </li>
          <li>Esqueceu a senha? Use "Esqueci minha senha" na tela de login a qualquer momento.</li>
        </ul>
      </article>

      <div className="mt-10 rounded-2xl border border-[#b8860b]/30 bg-[#f3e9db] p-6 text-center">
        <a
          href="https://zelusdomus.servidoresdoaltar.site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold px-5 py-3 rounded-xl text-white bg-[#5c1220] hover:bg-[#4a0f1a] transition-colors"
        >
          Acessar o ZelusDomus →
        </a>
      </div>
    </div>
  )
}
