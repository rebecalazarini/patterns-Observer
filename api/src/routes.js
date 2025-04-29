
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { notifyObservers } = require("./observer"); //é a função que avisa os "observadores" 
//depois que um usuário é criado.

const prisma = new PrismaClient();
const router = express.Router();


//Essa rota é chamada quando alguém faz um POST com nome e email.
router.post("/users", async (req, res) => {
  const { name, email } = req.body;

  //Novo usuario
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });

//Aqui toda função de antes é chamada recebendo newUser.
    notifyObservers(newUser);
    res.status(201).json(newUser); //Retorna 201
  } 
  //Erro 500 caso de errado
  catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

module.exports = router;
