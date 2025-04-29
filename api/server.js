const express = require("express");
const userRoutes = require("./src/routes");

require("../api/user");  // Carrega os observadores

const app = express();
app.use(express.json());
app.use("/api", userRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
