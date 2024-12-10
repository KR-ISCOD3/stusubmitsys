const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const {config} = require('dotenv')
config();

server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3006;

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})