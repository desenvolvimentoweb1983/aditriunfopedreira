import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import musica from "../assets/Alvo Mais Que a Neve.mp3";
import "../styles/ministerioLouvor.css";

// Importa o componente de slideshow
import Slideshow from "../components/slideshow";
import { slideshowImages } from "../assets/slideshowImages";

// Imagens específicas do Ministério de Louvor
import slideshow6 from "../assets/slideshow6.jpg";
import slideshow22 from "../assets/slideshow22.jpg";
import slideshow5 from "../assets/slideshow5.jpg";

export default function MinisterioLouvor() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("A reprodução automática foi bloqueada pelo navegador.");
      });
    }
  }, []);

  // Array local para o slideshow desta página
  const imagensLouvor = [slideshow6, slideshow22, slideshow5];

  return (
    <main className="louvor-container">
      <Helmet>
        <title>Ministério de Louvor - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Louvor e adoração na Assembleia de Deus JD Triunfo Pedreira. Cante e adore com o hino 'Alvo Mais Que a Neve'."
        />
      </Helmet>

      {/* Cabeçalho */}
      <header className="louvor-header">
        <h1>Louvemos ao nosso Senhor Jesus</h1>
        <p>“Tudo o que tem fôlego louve ao Senhor.” – Salmos 150:6</p>
      </header>

      {/* Slideshow do Ministério de Louvor */}
      <div className="louvor-slideshow">
        <Slideshow images={imagensLouvor} />
      </div>

      {/* Seção do hino */}
      <section className="louvor-section">
        <h2>🎵 Alvo Mais Que a Neve</h2>

        <div className="letra-louvor">
          <p>
            Bendito seja o Cordeiro<br />
            Que na cruz por nós padeceu<br />
            Bendito seja o Seu sangue<br />
            Que por nós ali Ele verteu<br />
            Eis nesse sangue, lavados<br />
            Com roupas que tão alvas são<br />
            Os pecadores remidos<br />
            Que perante seu Deus já estão
          </p>

          <p className="refrão">
            <strong>
              Alvo mais que a neve<br />
              Alvo mais que a neve<br />
              Sim, neste sangue lavado<br />
              Mais alvo que a neve serei
            </strong>
          </p>

          <p>
            Quão espinhosa a coroa<br />
            Que Jesus por nós suportou<br />
            Ó, quão profundas as chagas<br />
            Que nos provam o quanto Ele amou<br />
            Eis, nessas chagas, pureza<br />
            Para o maior pecador<br />
            Pois que mais alvo que a neve<br />
            O Teu sangue nos torna, Senhor
          </p>

          <p className="refrão">
            <strong>
              Alvo mais que a neve<br />
              Alvo mais que a neve<br />
              Sim, neste sangue lavado<br />
              Mais alvo que a neve serei
            </strong>
          </p>

          <p>
            Se nós a Ti confessarmos<br />
            E seguirmos na Tua luz<br />
            Tu não somente perdoas<br />
            Purificas também, ó Jesus<br />
            Sim, e de todo pecado<br />
            Que maravilha de amor<br />
            Pois, que mais alvo que a neve<br />
            O Teu sangue nos torna, Senhor
          </p>

          <p className="refrão">
            <strong>
              Alvo mais que a neve<br />
              Alvo mais que a neve<br />
              Sim, neste sangue lavado<br />
              Mais alvo que a neve serei
            </strong>
          </p>

          <p className="final">
            <strong>Sim, neste sangue lavado<br />Mais alvo que a neve serei</strong>
          </p>
        </div>

        {/* Player de áudio */}
        <audio
          ref={audioRef}
          src={musica}
          controls
          loop
          className="audio-player"
        />
      </section>
    </main>
  );
}