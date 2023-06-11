window.alert("Bem vindo a calculadora de velocidade.")

let nameOne = prompt("Digite a marca do primeiro veiculo: ");
let carOne = parseFloat(prompt("Digite a velocidade em que o primeiro carro se encontra: "));
let nameTwo = prompt("Digite a marca do segundo veiculo: ");
let carTwo = parseFloat(prompt("Digite a velocidade em que o segundo carro se encontra: "));

if (carOne >= carTwo) {
    window.alert("O carro Um está mais rápido que o carro Dois!")
} else if (carTwo >= carOne) {
    window.alert("O carro dois está mais rápido que o carro Um!")
} else {
    window.alert("Ambos os carros estão em uma velocidade equivalente!")
}

// Correção: 
// const veiculo1 = prompt("Informe o nome do primeiro veículo:")
// const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

// const veiculo2 = prompt("Informe o nome do segundo veículo:")
// const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))
// if (velocidade1 > velocidade2) {
//     alert(veiculo1 + " é mais rápido do que " + veiculo2)
//   } else if (velocidade2 > velocidade1) {
//     alert(veiculo2 + " é mais rápido do que " + veiculo1)
//   } else {
//     alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
//   }