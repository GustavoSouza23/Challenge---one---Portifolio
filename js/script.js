const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const messageTextarea = document.querySelector("#mensagem");
const mensagensDeErro = document.querySelectorAll(".error__message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

function resetErrors() {
  mensagensDeErro.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });
  nameInput.parentElement.classList.remove("error");
  emailInput.parentElement.classList.remove("error");
  assuntoInput.parentElement.classList.remove("error");
  messageTextarea.parentElement.classList.remove("error");
}

function validateInputs() {
  const nomeValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const assuntoValue = assuntoInput.value.trim();
  const mensagemValue = messageTextarea.value.trim();

  if (nomeValue === "") {
    setError(nameInput, "Digite seu nome completo");
  }

  if (emailValue === "") {
    setError(emailInput, "Digite seu e-mail - exemplo@email.com");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "E-mail inválido");
  }

  if (assuntoValue === "") {
    setError(
      assuntoInput,
      "Digite o titulo do assunto. O campo não pode ficar em  branco."
    );
  }

  if (mensagemValue === "") {
    setError(
      messageTextarea,
      "Escreva uma mensagem, O campo não pode ficar em branco"
    );
  }
}

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.innerText = errorMessage;
  input.parentElement.classList.add("error");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const input = document.querySelector(".formcontato__input");
const textarea = document.querySelector(".formcontato__textarea");
const botonEnviar = document.querySelector(".formcontato__botao");
botonEnviar.addEventListener("click", () => {
  if (input.value == "" && textarea.value == "") {
    alert(
      "Não é possivel enviar a mensagem. Todos os campos são obrigatorios."
    );
  } else {
    alert("A mensagem foi enviada.");
    input.innerHTML == "";
    textarea.innerHTML == "";
  }
});
