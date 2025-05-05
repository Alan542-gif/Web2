//importar express
const express = require('express');

//genrar una instancia 
const app = express();
 
//defincicion de puerto
const port = 5023;

app.get('/',(req, res)=>{
    res.send('Hola mundo!');
});

app.listen(port);



