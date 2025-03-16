let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

//responsiveVoice deu erro
//rate = 1.2 MUITO LENTO

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.8; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
};
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Descubra o número');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
    exibirTextoNaTela ('h1', 'Parabéns, você acertou!');
    exibirTextoNaTela ('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela ('p', 'O número secreto é menor!');
    } else {
      exibirTextoNaTela ('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
    }
  };

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaNumerosSorteados.length;

  if (quantidadeElementosLista == numeroLimite );
    listaNumerosSorteados = [];
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    //console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
  
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}