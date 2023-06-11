// Controle Financeiro

let money = parseFloat(prompt("Informe a quantia que você deseja adicionar na sua carteira: "))
let option = ""

do {
    option = prompt(
        "Saldo da Carteira: R$ "+ money + 
    "\nN1 - Adicionar Dinheiro" + 
    "\nN2 - Retirar Dinheiro" + 
    "\nN3 - Encerrar"
    )

    switch (option) {
        case "1":
            money += parseFloat(prompt("Informe o valor a ser adicionado: "))
            break
        case "2":
            money -= parseFloat(prompt("Informe o valor que deseja retirar: "))
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!!!")
            break
    }
} while (option !== 3);