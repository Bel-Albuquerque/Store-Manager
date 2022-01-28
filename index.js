require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const routerProducts = require('./routers/routerProducts');
const routerSales = require('./routers/routerSales');

const app = express();

app.use(bodyparser.json());
app.use('/products', routerProducts);
app.use('/sales', routerSales);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
