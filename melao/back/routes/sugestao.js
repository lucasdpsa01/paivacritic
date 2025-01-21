const express = require('express');
const router = express.Router();
const sugestao = require('../models/sugestao');

//rota q cria a sugestao da piazada
router.post('/sugestao', async (req, res) => {

    const sugestoes = await sugestao.create({
        nome: req.body.nome,
        sugestao: req.body.descricao
    });

    res.status(201).json(sugestoes);
})

//deleta uma sugestao
router.delete('/sugestao/:nome', async(req, res) =>{
    const id_sugestao = req.params.id_sugestao;

    const sugestoes = await sugestao.findByPk(id_sugestao);

    if(!sugestoes) {
        return res.send("Erro ao deletar");
    }

    await sugestoes.destroy();
    res.send("Deletado com sucesso!");
});

module.exports = router;