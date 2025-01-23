const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const sequelize = require('./config/db');
const rotasugestao = require('./routes/sugestao');

sequelize.sync({ alter: true })
.then(() => {
    console.log("BD sincronizado");
})
.catch(error => {
    console.log("Erro!");
});

app.use(cors());
app.use(express.json());
app.use('/', rotasugestao);


app.listen(PORT, () => {
    console.log("Servidor aguardando requisições");
});