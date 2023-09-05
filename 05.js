let lista = [1,2,1,2,1,3,1,3,1,3]
let numero = Number(prompt("Digite um número para verificar se existe no vetor"))

let indices = []
for (let i = 0; i < 10; i++) {
    if (lista[i] === numero) {
        indices.push(i)
    }
}

if (indices.length) {
    alert(`O número ${numero} se encontra nos índices ${indices}`)
} else {
    alert("Número não encontrado!")
}
