const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');


//rota q mostra a porra toda - CERTO!!!
router.get('/', async (req, res) => {
    const sugestoes = await Sugestao.findAll();

    res.json(sugestoes);
});

//rota q cria a sugestao da piazada - CERTO!!!
router.post('/sugestao', async (req, res) => {

    const sugestoes = await Sugestao.create({
        nome: req.body.nome,
        recomendacao: req.body.recomendacao
    });

    res.status(201).json(sugestoes);
});

//deleta uma sugestao
router.delete('/sugestao/:nome', async(req, res) =>{
    const nome = req.params.nome;

    const sugestoes = await Sugestao.findOne({ where: { nome } });

    if(!sugestoes) {
        return res.send("Sugestão não encontrada");
    }

    await sugestoes.destroy();
    res.send("Deletado com sucesso!");
});

module.exports = router;