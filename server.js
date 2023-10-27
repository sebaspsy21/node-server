const http = require('http');
const PORT = 3020;

const tasks = [
    { id: 1, description: 'Completar proyecto', iscompleted: false },
    { id: 2, description: 'Hacer ejercicio', iscompleted: true },
    { id: 3, description: 'Comprar víveres', iscompleted: false },
  ];

const server = http.createServer((req, res) => {
  
  if (req.method === 'GET' && req.url === '/tasks') {
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});



server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto 3020`);
});
