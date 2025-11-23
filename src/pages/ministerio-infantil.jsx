import React, { useState, useEffect } from "react";

// Slideshow
import slideshow30 from "../assets/slideshow30.jpg";
import slideshow31 from "../assets/slideshow31.jpg";
import slideshow32 from "../assets/slideshow32.jpg";
import slideshow33 from "../assets/slideshow33.jpg";
import slideshow34 from "../assets/slideshow34.jpg";

// Imagens das seções
import infantil1 from "../assets/slideshow14.jpg";
import infantil2 from "../assets/slideshow15.jpg";
import infantil3 from "../assets/slideshow16.jpg";
import infantil4 from "../assets/slideshow17.jpg";
import infantil5 from "../assets/slideshow18.jpg";
import infantil6 from "../assets/slideshow19.jpg";

//videos
import video3 from "../assets/videos/video3.mp4";

// css
import "../styles/ministerio-infantil.css";

export default function MinisterioInfantil() {
  const slides = [slideshow30, slideshow31, slideshow32, slideshow33, slideshow34];
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container ministerio-infantil-container">
      <h1>Ministério Infantil — Pequeninos</h1>
      <p className="subtitulo">
        “Ensina a criança no caminho em que deve andar, e, ainda quando for velho,
        não se desviará dele.” – Provérbios 22:6
      </p>
      
      {/* Vídeo  */}
      <div className="palavra-video">
      <video src={video3} controls />
      </div>
      
      {/* Slideshow */}
      <div className="louvor-slideshow">
        <img
          src={slides[indice]}
          alt={`Slideshow ${indice + 1}`}
          className="slideshow-img"
        />
      </div>
      
      {/* Conteúdo */}
      <section className="section">
        <h2>📖 História Bíblica: Davi</h2>
        <img src={infantil3} alt="História Bíblica de Davi" className="section-img" />
        <p>
          As crianças aprendem sobre coragem e fé com histórias da Bíblia,
          mostrando o amor de Deus de forma simples e divertida.
        </p>
        <a
          href="https://www.youtube.com/watch?v=hF4yIfc1_bc"
          target="_blank"
          rel="noopener noreferrer"
          className="link-youtube"
        >
          Recomendação de vídeo
        </a>
      </section>

      <section className="section">
        <h2>🎵 Louvores Infantis</h2>
        <img src={infantil2} alt="Louvores Infantis" className="section-img" />
        <p>
          Louvamos ao Senhor com músicas alegres e cheias de significado para os pequenos corações.
        </p>
        <a
          href="https://www.youtube.com/watch?v=P6fXi1RXUFU"
          target="_blank"
          rel="noopener noreferrer"
          className="link-youtube"
        >
          Recomendação de louvor
        </a>
      </section>

      <section className="section">
        <h2>✏️ Desenhos Bíblicos</h2>
        <img src={infantil1} alt="Desenhos Bíblicos" className="section-img" />
        <p>
          Atividades e desenhos que reforçam os ensinamentos bíblicos de forma criativa.
        </p>
        <a
          href="https://www.youtube.com/watch?v=Dcw_NT4Y_2k"
          target="_blank"
          rel="noopener noreferrer"
          className="link-youtube"
        >
          Recomendação de atividade
        </a>
      </section>
    </div>
  );
}