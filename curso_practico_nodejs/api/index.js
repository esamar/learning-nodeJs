const express = require('express');
// const bodyParser = require('body-parser');deprecate

const swaggerUi = require('swagger-ui-express');
//para instalar npm i swagger-ui-express
// para editar https://editor.swagger.io/

const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const errors = require('../network/errors');

const app = express();

// app.use(bodyParser.json());deprecate
app.use(express.json());

const swaggerDoc = require('./swagger.json');

//ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, ()=>{
    console.log('Api escuchando en el puerto ' , config.api.port , 'http://localhost:'+config.api.port );
} );