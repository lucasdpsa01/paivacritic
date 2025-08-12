const express = require('express');
const router = express.Router();
const  User  = require('../models/user');

router.post('/', async (req, res) => {
    const user = await User.create({
        nome_user: req.body.nome_user,
        email: req.body.email,
        password: req.body.password
    });

    res.send(201).json(user)
})

module.exports = router;