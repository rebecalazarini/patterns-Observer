const express = require ('express');
const cors = require('cors');
const { addObserver } = require("./src/observer");
const app = express();
const port = 6000;
const userRoutes = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

// Adicionando observadores simples
addObserver((user) => {
    console.log("Usuário criado:", user.name);
  });

  addObserver((user) => {
    console.log("Email enviado para:", user.email);
  });

app.listen(port, () =>{
    console.log ('respondendo em http://localhost:6000');
})
