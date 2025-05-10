import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const auth = getAuth();

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login realizado com sucesso!");
      document.getElementById("login-container").style.display = "none";
    })
    .catch((error) => {
      document.getElementById("login-error").innerText = error.message;
    });
}

window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Conta criada com sucesso! Agora você pode entrar.");
    })
    .catch((error) => {
      document.getElementById("login-error").innerText = error.message;
    });
}