const jsonServer = require('json-server');
const server = jsonServer.create();
const route = jsonServer.router("src/routes/stu_data.json");
const middleware = jsonServer.defaults();

const {config} = require('dotenv')
config();

server.use(middleware);
server.use(route);

const PORT = process.env.PORT || 3006;

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})