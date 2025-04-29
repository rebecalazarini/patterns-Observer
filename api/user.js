// importando a função addObserver do arquivo observer.js.
const { addObserver } = require("./src/observer");

// Essa linha registra uma nova função "observadora". Ou quando um nome for criado
addObserver((user) => {
  console.log("Usuário criado:", user.name);
});

// Essa linha registra uma nova função "observadora". Ou quando um email for criado
addObserver((user) => {
  console.log("Email enviado para:", user.email);
});
