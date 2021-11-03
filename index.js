require("dotenv").config();
const http = require("http");

const server = http.createServer();

const port = process.env.SERVER_PORT_CALCULATOR || 5000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  console.log("request.url");
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.write("<h1>BULEANO</h1>");
  response.end();
});
