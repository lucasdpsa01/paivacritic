const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');

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
});

module.exports = router;