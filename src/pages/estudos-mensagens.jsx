import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import '../styles/estudosMensagens.css'

// Imagens do slideshow
import slideshow21 from '../assets/slideshow21.jpg'
import slideshow26 from '../assets/slideshow26.jpg'

export default function EstudosMensagens() {
  return (
    <main className="palavra-container">
      <Helmet>
        <title>Estudos e Mensagens - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Estudos bíblicos e mensagens inspiradas pela Palavra de Deus – cresça espiritualmente e aprofunde seu relacionamento com o Senhor."
        />
      </Helmet>

      {/* 1. Cabeçalho */}
      <section className="palavra-header">
        <h1>Estudos e Mensagens</h1>
        <p>“A fé vem pelo ouvir, e o ouvir pela Palavra de Deus.” – Romanos 10:17</p>
      </section>

      {/* 2. Slideshow */}
      <div className="palavra-slideshow">
        <Slideshow images={[slideshow21, slideshow26]} />
      </div>

      {/* 3. Texto bíblico */}
      <section className="palavra-texto">
        <h2>Gálatas 5:16–26</h2>
        <h3>Vida pelo Espírito</h3>

        <p><span className="versiculo">16</span> – Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne.</p>
        <p><span className="versiculo">17</span> – Porque a carne cobiça contra o Espírito, e o Espírito contra a carne; e estes opõem-se entre si, para que não façais o que quereis.</p>
        <p><span className="versiculo">18</span> – Mas, se sois guiados pelo Espírito, não estais debaixo da lei.</p>
        <p><span className="versiculo">19</span> – Ora, as obras da carne são manifestas, as quais são: prostituição, impureza, lascívia,</p>
        <p><span className="versiculo">20</span> – idolatria, feitiçarias, ódio, contenda, ciúmes, iras, discórdias, dissensões, facções,</p>
        <p><span className="versiculo">21</span> – invejas, homicídios, bebedeiras, orgias e coisas semelhantes a estas, contra as quais vos prevenho, como já antes vos preveni, que os que cometem tais coisas não herdarão o reino de Deus.</p>
        <p><span className="versiculo">22</span> – Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé,</p>
        <p><span className="versiculo">23</span> – mansidão, temperança; contra estas coisas não há lei.</p>
        <p><span className="versiculo">24</span> – E os que são de Cristo Jesus crucificaram a carne, com as suas paixões e concupiscências.</p>
        <p><span className="versiculo">25</span> – Se vivemos pelo Espírito, andemos também pelo Espírito.</p>
        <p><span className="versiculo">26</span> – Não nos tornemos vangloriosos, irritando-nos uns aos outros, invejando-nos uns aos outros.</p>
      </section>
    </main>
  )
}