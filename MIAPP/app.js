const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const port = 3156;

//mildleware para el csss y img, archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//usar las rutas desde archivo rutas
app.use('/', routes);

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

