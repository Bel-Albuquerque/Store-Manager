require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routers/router');

const app = express();

app.use('/', router);
app.use(bodyparser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
