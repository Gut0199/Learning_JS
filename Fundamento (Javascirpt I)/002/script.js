let numberOne = prompt("Informe o primeiro número: ")
let numberTow = prompt("Informe o segundo número: ")

const a = parseFloat(numberOne)
const b = parseFloat(numberTow)

const sum = a + b;
const sub = a - b;
const mul = a * b;
const div = a / b;

window.alert(
    "O resultado será:\n" +
    "\nSoma: " + sum + 
    "\nSubtração: " + sub + 
    "\nMultiplicação: " + mul + 
    "\nDivisão: " + div
)

// Resolução:
// const entrada1 = prompt("Informe o primeiro número:")
// const entrada2 = prompt("Informe o segundo número:")

// const x = parseFloat(entrada1)
// const y = parseFloat(entrada2)

// const soma = x + y
// const subtracao = x - y
// const multiplicacao = x * y
// const divisao = x / y

// alert(
//     "Resultados:\n" +
//     "\nSoma: " + soma +
//     "\nSubtração: " + subtracao +
//     "\nMultiplicação: " + multiplicacao +
//     "\nDivisão: " + divisao
//   )