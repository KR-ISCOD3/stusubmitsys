const jsonServer = require('json-server');
const server = jsonServer.create();
const route = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const cors = require('cors');

const {config} = require('dotenv')
config();

server.use(cors())
server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(route);

const PORT = process.env.PORT || 3006;

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})