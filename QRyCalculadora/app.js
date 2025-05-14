const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculadora.html'));
});


app.get('/generadorQr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'generadorQr.html'));
});


const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});