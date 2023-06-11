// Personagem User
let personagemName = prompt("Digite o nome do seu personagem: ");
let personagemPower = parseFloat(prompt("Digite o poder total do seu personagem: "));

// Personagem CPU
let personagemAdver = prompt("Digite o nome do personagem adversário: ");
let adverLife = parseFloat(prompt("Informe quantos pontos de vida tem seu adversário: "));
let adverDef = parseFloat(prompt("Informe o poder de defesa do seu adversário: "));
let protection = prompt("Informe se o seu adversário possui algum escudo: [Sim / Não] ");
let damage = 0

// Calculo de combate
if (personagemPower > adverDef && protection === "Não") {
    damage = personagemPower - adverDef
} else if (personagemPower > adverDef && protection === "Sim") {
    damage = (personagemPower - adverDef) / 2
}

adverLife -= damage

window.alert(personagemName + " causou " + damage + " pontos de dano em " + personagemAdver)


// Correção: 
// const atacante = prompt("Qual é o nome do personagem atacante?")
// const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))
// const defensor = prompt("Qual é nome do personagem defensor?")
// let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
// const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
// const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

// let danoCausado = 0

// if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
//     danoCausado = poderDeAtaque - poderDeDefesa
// } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
//     danoCausado = (poderDeAtaque - poderDeDefesa) / 2
// }
  
// pontosDeVida -= danoCausado

// alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
// alert(
//   atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
//   defensor + "\nPontos de vida: " + pontosDeVida +
//   "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
// )