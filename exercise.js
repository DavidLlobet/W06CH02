const prompt = require("prompt-sync")();

const sum = require("./operators");
const subtraction = require("./operators");
const multi = require("./operators");
const divi = require("./operators");

const numbers = process.argv.slice(2);

const calculator = (num1, num2) => {
  if (typeof num1 === "undefined") {
    num1 = prompt("Enter first number: ");
  }
  if (typeof num2 === "undefined") {
    num2 = prompt("Enter second number: ");
  }
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("One of the parameters is not a number");
    process.exit(1);
  }

  console.log("Resultados: ");
  console.log(`${num1} + ${num2} = ${sum(num1, num2)}`);
  console.log(`${num1} - ${num2} = ${subtraction(num1, num2)}`);
  console.log(`${num1} * ${num2} = ${multi(num1, num2)}`);
  console.log(`${num1} / ${num2} = ${divi(num1, num2)}`);
};

calculator(numbers[0], numbers[1]);
