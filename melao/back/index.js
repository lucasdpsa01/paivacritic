const express = require('express');
const cors = require ('cors');
app.use(cors());

//beta
const app = express();
app.use(express.json());

const sequelize = require('./config/db');

sequelize.sync({ alter: true })
.then(() => {
    console.log("BD sincronizado");
})
.catch(error => {
    console.log("Erro!");
});

const rotasugestao = require('./routes/sugestao');
app.use('/', rotasugestao);

app.listen(prompt, () => {
    console.log("Servidor aguardando requisições");
});