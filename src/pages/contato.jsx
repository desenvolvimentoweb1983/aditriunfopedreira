import React from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import devWebLuis from "../assets/slideshow2.jpg";   // ✅ precisa colocar a extensão .jpg
import contatoJoao from "../assets/slideshow3.jpg";   // ✅ idem
import "../styles/contato.css";

export default function Contato() {
  return (
    <main className="contato-container">
      <Helmet>
        <title>Contato - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Entre em contato com nossos pastores ou com o desenvolvedor do site. Fale conosco pelo WhatsApp."
        />
      </Helmet>

      <h1 className="contato-title">Entre em Contato</h1>

      <div className="contato-grid">
        {/* ===================== Contato Pastor Paulo Rosa ===================== */}
        <div className="contato-card">
          <h2>Pr. Paulo Rosa</h2>
          <p className="contato-funcao">Pastor</p>
          <p className="contato-numero">+55 (19) 99823-7694</p>
          <a
            href="https://wa.me/5519998237694"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>

        {/* ===================== Contato Pastor João Batista ===================== */}
        <div className="contato-card">
          <img
            src={contatoJoao}
            alt="Pastor João Batista"
            className="contato-img"
          />
          <h2>Pr. João Batista</h2>
          <p className="contato-funcao">Pastor</p>
          <p className="contato-numero">+55 (19) 99602-1411</p>
          <a
            href="https://wa.me/5519996021411"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>

        {/* ===================== Contato Desenvolvedor ===================== */}
        <div className="contato-card">
          <img
            src={devWebLuis}
            alt="Desenvolvedor Web Luís"
            className="contato-img"
          />
          <h2>Luís Oliveira</h2>
          <p className="contato-funcao">Desenvolvedor Web</p>
          <p className="contato-numero">+55 (19) 97408-2724</p>
          <a
            href="https://wa.me/5519974082724"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>
      </div>
    </main>
  );
}