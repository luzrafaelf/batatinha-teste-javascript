let alistamentos = []
let anoUltimoAlistamento

//leitura
for (let i = 0; i < 10; i++) {
    let houveAlistamento = prompt(`Houve alistamento no ano de ${2000+i}? (S/N): `).toUpperCase() //para facilitar somou 2000 com um array de 10 elementos, resultando na década de 2000
    alistamentos[i] = houveAlistamento
}

//encontrar o ultimo ano
for (let i = 9; i >= 0; i--) {          //verifica o vetor ao contrário
    if (alistamentos[i] == "S") {
        anoUltimoAlistamento = 2000+i
        break;                          //para de iterar no vetor logo no primeiro elemento encontrado ( como estava de trás para frente pegou o ano mais recente )
    }
}

if (anoUltimoAlistamento) {
    alert(`O ultimo alistamento foi no ano de ${anoUltimoAlistamento}`)
} else {
    alert("Não houve alistamento nos ultimos 10 anos!")
}

