const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const logger = require('morgan');

require('./db');
const produtoCtrl = require('./controllers/produto_controller');

const app = express();

//Liberar acesso de apps externos
app.use (cors());//cors- controla quem acessa a app, sem parametro externo-qualquer app pode acessar

//Habilitaro POST de blocos JSON
app.use(bodyParser.json());//receber via post blocos json

//Sanitizar as queries do MongoDB-não deixar apagar/modificar dados do banco- cancela consultas maliciosas
app.use(mongoSanitize());

//Habilitar log detalhado
app.use(logger('dev'));//liberar log detalhado apenas em desenvolvimento

//registra o webservice
app.get('/produtos',produtoCtrl.recuperarTodos);

//Ouvir na porta 3000
app.listen(3000,()=>{
    console.log('App inicializado');
});
