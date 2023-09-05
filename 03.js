let numeros = []

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt(`Digite o número #${i}: `))
    numeros.push(numero)
}

let resultados = []
for (let i = 0; i< 5; i++) {
    if (numeros[i] % 2 == 0) {
        resultados.push(numeros[i])
    }
}
alert(resultados)

