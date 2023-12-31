const jsonServer = require("json-server");

const server = jsonServer.create(); 
const router = jsonServer.router("ka.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3005; 

server.use(middlewares);
server.use(router); 
server.listen(port);