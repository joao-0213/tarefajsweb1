// Selecionando pelo ID do título
const title = document.getElementById("titulo");

const msgs = [document.getElementById("msg1"), document.getElementById("msg2"), document.getElementById("msg3")];
const newtext = ["A frase 1 foi alterada", "Essa é a nova frase 2", "A frase 3 também foi alterada"]

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeText = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeText.addEventListener("click", function () {
    for (let i = 0; 2; i++) {
        msgs[i].textContent = newtext[i];
      }
    
  });