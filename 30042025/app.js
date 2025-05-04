//importar express
const express = require('express');

//generar una instancia
const app = express();

//definir de puerto
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.listen(port);

