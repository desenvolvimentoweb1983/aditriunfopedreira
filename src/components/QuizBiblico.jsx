import React, { useState } from "react";
import "../styles/quiz.css"; // você pode criar estilos baseados no seu site

const quizData = [
  // --- Gálatas 5:16-26 ---
  {
    pergunta: "Qual é a forma de viver que nos impede de satisfazer os desejos da carne?",
    opcoes: ["Andar pelo Espírito", "Seguir a lei", "Trabalhar muito", "Ser religioso"],
    respostaCorreta: "Andar pelo Espírito",
    referencia: "Gálatas 5:16"
  },
  {
    pergunta: "Qual fruto do Espírito nos ajuda a ter paz e amor ao próximo?",
    opcoes: ["Amor, gozo, paz", "Ciúmes e contendas", "Orgias e bebedeiras", "Idolatria"],
    respostaCorreta: "Amor, gozo, paz",
    referencia: "Gálatas 5:22"
  },
  {
    pergunta: "O que significa crucificar a carne, segundo Gálatas?",
    opcoes: ["Renunciar paixões e concupiscências", "Viver isolado", "Não trabalhar", "Viajar sempre"],
    respostaCorreta: "Renunciar paixões e concupiscências",
    referencia: "Gálatas 5:24"
  },

  // --- Conhecimento bíblico geral ---
  {
    pergunta: "Quem conduziu o povo de Israel pelo deserto?",
    opcoes: ["Moisés", "Abraão", "Davi", "Paulo"],
    respostaCorreta: "Moisés",
    referencia: "Êxodo 3:10"
  },
  {
    pergunta: "Qual discípulo negou Jesus três vezes?",
    opcoes: ["Pedro", "João", "Tiago", "André"],
    respostaCorreta: "Pedro",
    referencia: "Mateus 26:69-75"
  },

  // --- História bíblica ---
  {
    pergunta: "Qual rei construiu o templo em Jerusalém?",
    opcoes: ["Salomão", "Davi", "Saul", "Josias"],
    respostaCorreta: "Salomão",
    referencia: "1 Reis 6:1-38"
  },
  {
    pergunta: "Quem foi o profeta que confrontou os reis de Israel e Judá?",
    opcoes: ["Elias", "Isaías", "Jeremias", "Daniel"],
    respostaCorreta: "Elias",
    referencia: "1 Reis 17-19"
  },

  // --- Frases ou versículos ---
  {
    pergunta: "Complete: 'O Senhor é meu pastor, nada me _______.'",
    opcoes: ["faltará", "assustará", "perderá", "esquecerá"],
    respostaCorreta: "faltará",
    referencia: "Salmo 23:1"
  },
  {
    pergunta: "Complete: 'Posso todas as coisas naquele que me ______.'",
    opcoes: ["fortalece", "ajuda", "guia", "cura"],
    respostaCorreta: "fortalece",
    referencia: "Filipenses 4:13"
  },

  // --- Personagens e ministérios ---
  {
    pergunta: "Quem foi lançado na cova dos leões?",
    opcoes: ["Daniel", "Elias", "Noé", "José"],
    respostaCorreta: "Daniel",
    referencia: "Daniel 6"
  },
  {
    pergunta: "Quem foi vendido como escravo pelos irmãos e depois se tornou governador do Egito?",
    opcoes: ["José", "Moisés", "Davi", "Abraão"],
    respostaCorreta: "José",
    referencia: "Gênesis 37-41"
  },

  // --- Aplicação prática / reflexão ---
  {
    pergunta: "Qual fruto do Espírito nos ajuda a perdoar os inimigos?",
    opcoes: ["Amor", "Ira", "Ciúmes", "Contenda"],
    respostaCorreta: "Amor",
    referencia: "Gálatas 5:22-23"
  },
  {
    pergunta: "Se vivemos pelo Espírito, devemos também _______ pelo Espírito.",
    opcoes: ["andar", "trabalhar", "reclamar", "julgar"],
    respostaCorreta: "andar",
    referencia: "Gálatas 5:25"
  },
];

export default function QuizBiblico() {
  const [indice, setIndice] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleResposta = (opcao) => {
    if (opcao === quizData[indice].respostaCorreta) {
      setScore(score + 1);
      setFeedback("✅ Correto!");
    } else {
      setFeedback(`❌ Errado! Resposta certa: ${quizData[indice].respostaCorreta}`);
    }

    setTimeout(() => {
      const proximo = indice + 1;
      if (proximo < quizData.length) {
        setIndice(proximo);
        setFeedback("");
      } else {
        setShowScore(true);
      }
    }, 1500); // mostra feedback por 1,5s antes de ir para próxima
  };

  const handleReiniciar = () => {
    setIndice(0);
    setScore(0);
    setShowScore(false);
    setFeedback("");
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Bíblico</h2>
      {!showScore ? (
        <div className="quiz-pergunta">
          <p className="quiz-texto">{quizData[indice].pergunta}</p>
          <div className="quiz-opcoes">
            {quizData[indice].opcoes.map((opcao, idx) => (
              <button key={idx} onClick={() => handleResposta(opcao)}>
                {opcao}
              </button>
            ))}
          </div>
          <p className="quiz-feedback">{feedback}</p>
        </div>
      ) : (
        <div className="quiz-resultado">
          <h3>Você acertou {score} de {quizData.length} perguntas!</h3>
          <button onClick={handleReiniciar}>Reiniciar Quiz</button>
        </div>
      )}
    </div>
  );
}