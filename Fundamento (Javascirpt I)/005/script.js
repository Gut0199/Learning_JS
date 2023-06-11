const measure = parseFloat(prompt("Digite a medida que deseja converter: "))
const option = prompt("Digite para qual tipo de Unidade desejas fazer a conversão: ")

switch (option) {
    case "milímetros":
        medida = measure * 1000
        alert("O Resultado será: " + medida)
        break;
    case "Centímetros":
        medida = measure * 100
        alert("O Resultado será: " + medida)
        break;
    case "Decímetros":
        medida = measure * 10
        alert("O Resultado será: " + medida)
        break
    case "Decâmetro":
        medida = measure / 10
        alert("O Resultado será: " + medida)
        break
    case "Hectômetro":
        medida = measure / 100
        alert("O Resultado será: " + medida)
        break
    case "Quilômetro":
        medida = measure / 1000
        alert("O Resultado será: " + medida)
        break
    default:
        alert("Comando Inválido!")
        break
}


// Correção:
// const medida = parseFloat(prompt("Insira uma medida em metros:"))

// const unidade = prompt(
//     "Para qual unidade de medida deseja converter?" +
//     "\n1 - milímetros (mm)" +
//     "\n2 - centímetros (cm)" +
//     "\n3 - decímetros (dm)" +
//     "\n4 - decâmetros (dam)" +
//     "\n5 - hectômetro (hm)" +
//     "\n6 - quilômetro (km)"
//   )

//   switch (unidade) {
//     case "1":
//       alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
//       break
//     case "2":
//       alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
//       break
//     case "3":
//       alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
//       break
//     case "4":
//       alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
//       break
//     case "5":
//       alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
//       break
//     case "6":
//       alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
//       break
//     default:
//       alert("Opção inválida!")
//       break
//   }