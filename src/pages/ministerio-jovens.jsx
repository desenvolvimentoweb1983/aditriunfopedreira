import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import '../styles/ministerioJovens.css'

// Importa as imagens do slideshow
import slideshow11 from '../assets/slideshow11.jpg'
import slideshow12 from '../assets/slideshow12.jpg'
import slideshow13 from '../assets/slideshow13.jpg'
import slideshow27 from '../assets/slideshow27.jpg'
import slideshow28 from '../assets/slideshow28.jpg'

export default function MinisterioJovens() {
  return (
    <main className="jovens-container">
      <Helmet>
        <title>Grupo de Jovens - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Participe do Grupo de Jovens da Assembleia de Deus JD Triunfo Pedreira - comunhão, louvor, estudo bíblico e aprendizado espiritual."
        />
      </Helmet>

      {/* 1. Título */}
      <section className="jovens-header">
        <h1>Grupo de Jovens</h1>
        <p>“Ninguém despreze a tua mocidade...” – 1 Timóteo 4:12</p>
      </section>

      {/* 2. Slideshow */}
      <div className="jovens-slideshow">
        <Slideshow images={[slideshow11, slideshow12, slideshow13, slideshow27]} />
      </div>

      {/* 3. Texto de boas-vindas */}
      <section className="texto-jovens">
        <h2>Bem-vindo(a) ao Grupo de Jovens – JD Triunfo!</h2>
        <p>
          Nosso espaço é dedicado à{' '}
          <strong>comunhão, aprendizado e desenvolvimento espiritual</strong>. Durante nossos
          encontros, realizamos diversas atividades que fortalecem os laços comunitários e
          promovem o crescimento pessoal e espiritual:
        </p>

        <ul>
          <li>
            <strong>Estudos Bíblicos:</strong> momentos de reflexão e aprendizado da Palavra de
            Deus, aplicando os ensinamentos à vida cotidiana.
          </li>
          <li>
            <strong>Louvor e Adoração:</strong> participação em cânticos e práticas musicais,
            incluindo aulas gratuitas de violão, canto e expressão artística.
          </li>
          <li>
            <strong>Atividades Sociais:</strong> ações de voluntariado, arrecadação de alimentos,
            roupas e apoio a pessoas em situação de vulnerabilidade.
          </li>
          <li>
            <strong>Dinâmicas e Integração:</strong> atividades, palestras e rodas de conversa que
            incentivam o trabalho em equipe e o fortalecimento das amizades.
          </li>
          <li>
            <strong>Eventos Comunitários:</strong> encontros especiais, retiros espirituais e
            eventos de confraternização que promovem a interação saudável e divertida entre os
            jovens.
          </li>
        </ul>

        <p>
          <strong>
            Venha participar conosco em nossos encontros, momentos de comunhão e aprendizado da
            Palavra de Deus!
          </strong>
        </p>
      </section>

      {/* 4. Seção especial: Aula de Violão */}
      <section className="violao-section">
        <div className="violao-text">
          <h2>🎸 Aulas de Violão</h2>
          <p>
            🎼Aulas aos sábados as <strong>14:00 horas</strong>🎼Louvem o Senhor, todas as nações,   exaltem-no, todos os povos! Porque imenso é o seu amor leal por nós, e a fidelidade do Senhor dura para sempre. 🙏🏻Aleluia!🙏🏻 <strong>Salmo 117</strong>
          </p>
          <p>
            Venha fazer parte do nosso grupo de Jovens e adorar a Deus e abençoar outras vidas.
          </p>
        </div>
        <div className="violao-img">
          <img src={slideshow28} alt="Aulas de violão no grupo de jovens" />
        </div>
      </section>
    </main>
  )
}