// Criando um Menu Interativo.]

let option = ""

do {
    option = prompt("Menu de Cadastro!\n" + 
    "\nCadastro" + 
    "\nRevisão" + 
    "\nVisualização" + 
    "\nRemoção" + 
    "\nEncerrar...")

    switch (option) {
        case "Cadastro":
            window.prompt("Digite o nome do usuário: ")
            break
        case "Revisão":
            window.alert("Digite o qual usuário deseja revisar: ")
            break
        case "Visualização":
            window.alert("Digite o usuário que você deseja visualizar: ")
            break
        case "Remoção":
            window.alert("Digite o usuário que você deseja remover: ")
            break
        case "Encerrar":
            alert("Encerrando.....")
            break
        default:
            window.alert("Entrada inválida!!!")
    }

} while (option !== "5");