let express = require('express');
let app = express();

const port = 3000;

const sequelize = require('./config/database');
const Sugestao = require('./models/index');

const cors = require('cors');

app.use(express.json());
app.use(cors());

//add uma sugestao
app.post('/sugestao', async (req, res) => {

    const sugestion = await Sugestao.create({
        nome: req.body.nome,
        sugestao: req.body.sugestao
    });

    res.json(sugestion);
});

