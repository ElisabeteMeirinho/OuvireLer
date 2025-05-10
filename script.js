let recognition;

// Transcrição da página principal
function startTranscription() {
  const box = document.getElementById("transcript");
  if (!('webkitSpeechRecognition' in window)) {
    alert('Seu navegador não suporta a API de Voz.');
    return;
  }
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = function(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        const texto = event.results[i][0].transcript;
        const linha = document.createElement('div');
        linha.style.background = '#f1f1f1';
        linha.style.padding = '8px';
        linha.style.margin = '4px 0';
        linha.style.borderRadius = '12px';
        linha.style.color = '#000';
        linha.textContent = texto;
        box.appendChild(linha);
        setTimeout(() => linha.remove(), 3600000);
      }
    }
  };
  recognition.start();
}

// Transcrição compartilhada
function startSharedTranscription() {
  const nome = document.getElementById('nomeUsuario').value || 'Participante';
  const box = document.getElementById('shared-transcript');
  if (!('webkitSpeechRecognition' in window)) {
    alert('Seu navegador não suporta a API de Voz.');
    return;
  }
  const cor = gerarCorAleatoria();
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = function(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        const texto = event.results[i][0].transcript;
        const linha = document.createElement('div');
        linha.style.background = cor;
        linha.style.padding = '8px';
        linha.style.margin = '4px 0';
        linha.style.borderRadius = '12px';
        linha.style.color = '#000';
        linha.textContent = `${nome}: ${texto}`;
        box.appendChild(linha);
        setTimeout(() => linha.remove(), 3600000);
      }
    }
  };
  recognition.start();
}

function gerarCorAleatoria() {
  const cores = ['#ffb3c6', '#d5aaff', '#a0e7e5', '#b5ead7', '#fcd5ce'];
  return cores[Math.floor(Math.random() * cores.length)];
}

function conectarBluetooth() {
  alert("Conexão Bluetooth ainda não implementada.");
}

function voltarInicio() {
  window.location.href = 'index.html';
}
