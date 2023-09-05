let numeros = []
let maiorNumero = 0
let numerosMultiplicados = []

//leitura
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt(`Digite o número #${i}: `))
    numeros.push(numero)
}

//ver o maior
for (let i = 0; i < 5; i++) {
    let numero = numeros[i]
    if (numero > maiorNumero) {
        maiorNumero = numero
    }
}

//multiplicar os que não são o maior numero
for (let i = 0; i < 5; i++) {
    let numero = numeros[i]
    if (numero != maiorNumero) {
        numerosMultiplicados.push(numero * maiorNumero)
    }
}

alert(`O resultado das multiplicações por ${maiorNumero} é: ${numerosMultiplicados}`)