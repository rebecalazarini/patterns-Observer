const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { notifyObservers } = require("./observer");

const prisma = new PrismaClient();
const router = express.Router();

router.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });

    notifyObservers(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

module.exports = router;
