/**
 * Arquivo: app.js
 * Descrição: arquivo principal e responsável pela execução da aplicação.
 * Data: 05/07/2019
 * Author: Glaucia Lemos
 */

const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja Bem-Vindo(a) ao mundo Docker!',
    version: '1.0.0',
  });
});

app.listen(port);
console.log(`Aplicação executando na porta..: ${port}`);
