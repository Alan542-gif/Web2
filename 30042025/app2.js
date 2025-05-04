//importar express
const express = require('express');

//generar una instancia
const app = express();

//defincion de puerto
const port = 3010;

app.get('/', (req, res) => {
    res.send('Hola mundo desde el puerto 3010!');
});

app.listen(port);

