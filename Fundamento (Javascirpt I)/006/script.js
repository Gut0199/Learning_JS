const nameTur = prompt("Digite o seu nome: ");

let cityes = "";
let contagem = 0;

let continum = prompt("Você deseja escrever aluga cidade? [Sim / Não]");

while (continum === "Sim") {
    let cityes = prompt("Qual é o nome da cidade: ")
    cityes += " - " + cityes + "\n"
    contagem++
    continum = prompt("Você deseja escrever outra cidade [Sim / Não]")
}

window.alert(
    "Turista: " + nameTur + 
    "\nQuantidades de cidades visitadas: " + contagem + 
    "\nCidades Visitadas:\n" + cityes
)