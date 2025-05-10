const express = require('express');
const path = require('path');

const app = express();

const port = 3010;

//manejador de solicitudes
app.get('/', (req, res) => {
    
    //res.send('Hello World!');

    // res.sendFile("C:/Users/Alan Ayala/Desktop/WEB2/05052025/index.html");


    res.sendFile(path.join(__dirname + "/index.html"));
});


//salida del servidor
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});


