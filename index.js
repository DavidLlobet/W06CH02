require("dotenv").config();

const http = require("http");

const { sum, subtraction, multi, divi } = require("./operators");

const server = http.createServer();

const port = process.env.SERVER_PORT_CALCULATOR || 5000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

const htmlCalculator = (num1, num2) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <h1>Resultados:</h1>
  <ul>
    <li>${num1} + ${num2} = ${sum(num1, num2)}</li>
    <li>${num1} - ${num2} = ${subtraction(num1, num2)}</li>
    <li>${num1} * ${num2} = ${multi(num1, num2)}</li>
    <li>${num1} / ${num2} = ${divi(num1, num2)}</li>
  </ul>
  </body>
</html>`;

const errorMessage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
     <p>ERROR</p>
  </body>
</html>`;

server.on("request", (request, response) => {
  const myUrl = new URL(request.url, `http://${request.headers.host}`);
  const myUrlValues = myUrl.searchParams.values();
  const numberValues = [];
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  for (const value of myUrlValues) {
    numberValues.push(+value);
  }
  console.log(numberValues);
  if (Number.isNaN(numberValues[0]) || Number.isNaN(numberValues[1])) {
    response.write(errorMessage);
    response.end();
  } else {
    response.write(htmlCalculator(numberValues[0], numberValues[1]));
    process.exit(9);
  }
});
