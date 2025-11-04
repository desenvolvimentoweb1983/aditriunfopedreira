import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import '../styles/sobre.css'

// Imagens do slideshow da página "Sobre"
import slideshow4 from '../assets/slideshow4.jpg'
import slideshow8 from '../assets/slideshow8.jpg'
import slideshow9 from '../assets/slideshow9.jpg'

export default function Sobre() {
  return (
    <main className="sobre-container">
      <Helmet>
        <title>Sobre - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Conheça a história, missão e trajetória da Assembleia de Deus JD Triunfo Pedreira - SP."
        />
      </Helmet>

      {/* Título principal */}
      <h1 className="sobre-title">Sobre: Assembleia de Deus Ipiranga</h1>

      {/* Slideshow no topo, igual ao da Home */}
      <div className="sobre-slideshow-wrapper">
        <Slideshow images={[slideshow4, slideshow8, slideshow9]} />
      </div>

      {/* Conteúdo principal */}
      <section className="sobre-conteudo">
        <h2>Assembleia de Deus Ipiranga</h2>
        <p>
          A Igreja Evangélica Assembleia de Deus do Ministério no Ipiranga faz parte das Assembleias de Deus no Brasil e está localizada na cidade de São Paulo, no tradicional bairro do Ipiranga.
        </p>

        <h3>História</h3>
        <p>
          A expansão das Assembleias de Deus em São Paulo começou com o missionário Daniel Berg, fundador do movimento pentecostal no Brasil. Para atender à necessidade de implantação da igreja na capital paulista, ele enviou o missionário Samuel Nystrom, que mais tarde indicou o evangelista Vitalino Piro como responsável pelo trabalho no bairro do Ipiranga.
        </p>
        <p>
          A igreja teve seu início formal com batismos realizados em 29 de junho de 1931. Inicialmente, os missionários frequentavam a Igreja Batista, trazendo de suas experiências nos Estados Unidos práticas como a glossolalia, ou falar em línguas, um fenômeno que já ocorria em encontros de oração norte-americanos e se popularizou no movimento pentecostal, em especial por meio do pastor afro-americano William Joseph Seymour na Rua Azusa, Los Angeles, em 1906.
        </p>
        <p>
          A introdução desta nova prática gerou divergências entre os membros da Igreja Batista. Enquanto alguns aceitaram o pentecostalismo, outros permaneceram na congregação batista. Com o tempo, essas diferenças culminaram na fundação da Assembleia de Deus no Brasil, em 18 de junho de 1911.
        </p>

        <h3>Ministério independente</h3>
        <p>
          Em 26 de julho de 1943, o pastor Alfredo Reikdal, enviado pelo missionário Bruno Skolimowski, assumiu a liderança da igreja no Ipiranga. Naquele período, durante a Segunda Guerra Mundial, o Brasil enfrentava dificuldades econômicas, mas o pastor Reikdal dedicou-se intensamente ao crescimento da congregação, treinando e enviando novos pregadores, o que contribuiu para a formação de diversas congregações e o aumento do número de fiéis.
        </p>
        <p>
          Em 29 de julho de 1956, a sede da igreja foi transferida para sua localização atual, na Av. Dr. Ricardo Jafet, 214, no bairro do Ipiranga. O templo, em estilo gótico, com um relógio no topo, é um marco histórico e cultural da região, sendo conhecido como a “Catedral Nacional da Independência”.
        </p>

        <h3>Homenagens</h3>
        <p>
          Em 2021, a Assembleia Legislativa do Estado de São Paulo aprovou a Lei Estadual nº 17.314, sancionada pelo então governador João Dória, que instituiu o dia 29 de junho como o “Dia da Assembleia de Deus Ministério no Ipiranga”.
        </p>
      </section>
    </main>
  )
}