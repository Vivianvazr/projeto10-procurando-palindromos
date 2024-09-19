/*Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.*/

let word = prompt(`Escreva uma palavra.`)
let W2 = ``

for (let i = word.length - 1; i >= 0; i--) {
    W2 += word[i]
}

if (word == W2) {
    alert(`A palavra ${word} é sim um palíndromo, porque pode ser escrita de trás para frente, pois possui as letras na mesma ordem.`)
} else {
    alert(`A palavra ${word} não é um palíndromo.
Pois ${word} ao contrário é: ${W2}, então não pode ser um palíndromo.`)
}
