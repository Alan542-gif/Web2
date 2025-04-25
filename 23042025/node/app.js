//importamos el modulo HTTP que viene inclServidorNodeImportado en Node.js
const PaquetesServidorNodeImportado = require('http');

//definimos el puerto de salida del servidor
const port = 3005;

//crear ServidorNodeImportadoServidor
const server = PaquetesServidorNodeImportado.createServer((req, res) => {
    //establecer el encabezado de la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //enviamos la respuesta 
    res.end('Hola mundo con Node.js\n');
});

//escuchar el puerto

server.listen(port,()=>{
    console.log(`Servidor ejecutandose por medio del puerto de http://localhost:${port}`);
});
