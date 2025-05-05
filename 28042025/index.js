//importar un modulo
const serverHHTP =require('http');

//definir un puerto
const port= 3029;


//crear el servidor
const server = serverHHTP.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola desde un server en node con el modulo de node\n');
});

server.listen(port, () => {
    console.log(`Servidor funcional por la URL: http://localhost:${port}/`);
}
);  
