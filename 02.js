let numeros = []

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o número #${i}: `))
    numeros.push(numero)
}

let resultado = 0
for (let i = 0; i< 10; i++) {
    if (i < 5) {
        resultado += numeros[i]
    } else {
        resultado -= numeros[i]
    }
}
alert(resultado)

