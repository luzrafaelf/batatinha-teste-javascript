let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let listaResultado = []

//por indice
for (let i = 0; i < 5; i++) {
    listaResultado.push(lista[i])
}
console.log(listaResultado)

//por elemento
let i = 0
listaResultado = []
while(lista[i] <= 5) {
    listaResultado.push(lista[i])
    i++
}

console.log(listaResultado)

