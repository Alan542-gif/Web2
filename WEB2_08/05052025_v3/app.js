const express = require('express');
const routes = require('./routes/index');


const app = express();
app.use("/", routes);

const port = 3089;

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);

});
