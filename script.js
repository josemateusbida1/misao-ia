const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultados");

const perguntas =[
{
    enunciado: "pergunta 1",
    alternativas:["alternativas 1", "alternativa 2 "],   
  },
  { 
    enunciado:
    alternatiavas:["alternativa 1", "alternativa 2 "]
  },    
  {
    enunciado: "pergunta 3" ,
    alternativas:["alternativa 1", " alternativa 2"],
  };
];

let atual = 0 ;
let perguntaAtual ;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
    
}
function mostraAlternativa(){
  for (const alternativa of perguntaAtual.alternativas){
      const botaoAlternatiavas = document . createElement("button")
      botaoAlternativas . textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas)
  }
}

mostraPerguntas();


