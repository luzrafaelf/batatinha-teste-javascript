let listaA = [1,2,3]
let listaB = [9,8,7]

let resultado = []

for (let i = 0; i < 3; i++) {
    resultado.push(listaA[i])
    resultado.push(listaB[i])
}

alert(`Listas ${listaA} e ${listaB} intercalado é: ${resultado}`)