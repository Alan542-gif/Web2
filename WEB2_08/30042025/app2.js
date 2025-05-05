//importar express
const express = require('express');

//genrar una instancia 
const app = express();
 
//defincicion de puerto
const port = 3009;

app.get('/',(req, res)=>{
    res.send('Como andas padrino!');
});

app.listen(port);



