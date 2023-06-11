// Tabuada

const numberOne = parseFloat(prompt("Digite o valor que deseja consultar: "))
let result = ""

for (let fator = 1; fator <= 10; fator++) {
    result += "" + numberOne + " x " + fator + " = " + (numberOne * fator) + "\n"
}

alert("Resultado da consulta com o número " + numberOne + ":\n\n" + result)