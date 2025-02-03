const express = require('express');
const app = express();
const cors = require ('cors');
const PORT = 3000;


const sequelize = require('./config/db');


sequelize.sync({ alter: true })
.then(() => {
    console.log("BD sincronizado");
})
.catch(error => {
    console.log("Erro!");
});

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log("Servidor aguardando requisições");
});