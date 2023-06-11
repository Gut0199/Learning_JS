// Procurando Palíndromos

const phrase = prompt("Digite qual palavra deseja consultar: ")
let invertedPhrase = ""

for (let i = phrase.length - 1; i >= 0; i--) {
    invertedPhrase += phrase[i]
}

if(phrase === invertedPhrase) {
    alert(phrase + " é um Palíndromo!")
} else {
    alert(phrase + " não é um Palíndromo!")
}

