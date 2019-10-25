const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//============================================================

//Iniciar app
const app = express();
//Permitir que a api receba dados em formato json
app.use(express.json());
//Utiliza o CORS na aplicação (Responsável por permitir acesso externo à API)
app.use(cors());

//============================================================

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser: true});

//Expressão require comum =>       require('./src/models/Product');
requireDir('./src/models'); //Permite agora que seja executado o require em todos aplicativos automaticamente

//Ao definir "/api" todas requisições serão chamadas iniciando por /api/
//app é para receber qualquer tipo de requisição
app.use('/api', require('./src/routes'));

app.listen(3001);