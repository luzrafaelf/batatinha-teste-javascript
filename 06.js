let coresPrimarias = []
let coresSecundarias = []
let cores = []

//leitura
for (let i = 0; i < 3; i++) {
    let cor = prompt(`Digite a cor primária #${i}: `)
    coresPrimarias.push(cor)
}

for (let i = 0; i < 3; i++) {
    let cor = prompt(`Digite a cor secundária #${i}: `)
    coresSecundarias.push(cor)
}

//alimentando

// cores.push("preto") -- usei o unshift no lugar disso aqui

for (let i = 0; i < 3; i++) {
    cores.push(coresPrimarias[i])
}
for (let i = 0; i < 3; i++) {
    cores.push(coresSecundarias[i])
}

cores.unshift("preto") //unshift adiciona ao inicio do array
cores.push("branco") //push adiciona ao final do array

alert(cores)