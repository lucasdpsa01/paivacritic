const express = require('express');
const router = express.Router();
const Jogo = require('../models/jogos');

// Retorna todos os jogos
router.get('/', async (req, res) => {
    const jogos = await Jogo.findAll();

    res.json(jogos);
});

// Cria um jogo
router.post('/', async (req, res) => {
    const jogos = await Jogo.create({
        image: req.body.image,
        nome_jogo: req.body.nome_jogo,
        rating: req.body.rating,
        message: req.body.message,
        like: req.body.like
    });

    res.status(201).json(jogos);
});

// Edita um jogo
router.put('/:id_jogo', async (req, res) => {
    const id_jogo = req.params.id_jogo;
    const { image, nome_jogo, rating, message, like } = req.body;

    const jogo = await Jogo.findByPk(id_jogo);

    if (!jogo) {
        return res.send("Erro ao editar jogo");
    }

    jogo.uptade({ image, nome_jogo, rating, message, like });
    res.send("Jogo editado com sucesso");
});

module.exports = router;