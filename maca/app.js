let express = require('express');
let app = express();

const port = 3000;

const sequelize = require('./config/database');
const Sugestao = require('./models/Sugestao');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const comment = []

//add uma sugestao
app.post('/sugestao', async (req, res) => {

    const sugestion = await Sugestao.create({
        nome: req.body.nome,
        sugestao: req.body.sugestao
    });

    res.json(sugestion);
});

app.get('/sugestao', async (req, res) => {
    const sugestion = await Sugestao.findMany()

    res.status(200).json(comment)
})

sequelize.sync({ alter: true })
    .then(() => {
        console.log("SUCESSO!");
    })
    .catch(error => {
        console.log(`Erro ao sincronizar as tabelas - ${error}`);
    });


app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${port}`);
});
