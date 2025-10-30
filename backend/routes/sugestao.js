const express = require('express');
const router = express.Router();
const Sugestao = require('../models/sugestao');

// Rota para obter todas as sugestões
router.get('/', async (req, res) => {
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    
    try {
        const sugestoes = await Sugestao.findAll({
            limit,
            offset,
            order: [["createdAt", "DESC"]],
        });
        res.json(sugestoes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar sugestões." });
    }
});

// Rota para criar uma sugestão
router.post('/', async (req, res) => {
    
        const sugestao = await Sugestao.create({
            nome: req.body.nome,
            recomendacao: req.body.recomendacao
        });
        res.status(201).json(sugestao);
});

// Rota para deletar uma sugestão por nome
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const sugestao = await Sugestao.findByPk(id);

        if (!sugestao) {
            return res.status(404).json({ error: "Sugestão não encontrada." });
        }

        await sugestao.destroy();
        res.json({ message: "Sugestão deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar sugestão." });
    }
});

module.exports = router;