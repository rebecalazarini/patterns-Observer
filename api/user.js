// api/user.js

const { addObserver } = require("./src/observer");

// Adicionando observadores simples
addObserver((user) => {
  console.log("Usuário criado:", user.name);
});

addObserver((user) => {
  console.log("Email enviado para:", user.email);
});
