//importar express
const express = require('express');

//generar una instancia
const app = express();

//definir de puerto
const port  = 3020;

app.get('/', (req, res) => {
    res.send('Hola mundo desde tercer prueba!');
});

app.listen(port);

