const express = require('express');
const path = require('path');
const routes= require('./routes/routes');


const app = express();
const port= 3024;

//mildaware sirve para archivos estaticos css, img y etc.
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", routes);

app.listen(port, () => {
    console.log('http://localhost: ${port}');

});