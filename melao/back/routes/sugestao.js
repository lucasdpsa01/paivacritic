const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');

<<<<<<< HEAD

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
=======
//rota q cria a sugestao da piazada
router.post('/sugestao', async (req, res) => {
    const sugestoes = await Sugestao.create({
        nome: req.body.nome,
        sugestao: req.body.sugestao
    });
    res.status(201).json(sugestoes);
})

//deleta uma sugestao
router.delete('/sugestao', async(req, res) =>{
    const id_sugestao = req.params.id_sugestao;

    const sugestao = await Sugestao.findByPk(id_sugestao);

    if(!sugestao) {
        return res.send("Erro ao deletar");
    }

    await sugestao.destroy();
    res.send("Deletado com sucesso!")
>>>>>>> main
});

module.exports = router;