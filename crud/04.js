let nomes = []
let opcao = -1

while(opcao !== 0) { //o programa irá rodar até que a opção escolhida seja a 0

    opcao = Number(prompt(`
        =======MENU=======
        1 - Cadastrar nome
        2 - Excluir um nome
        3 - Editar um nome
        4 - Pesquisar se um nome está cadastrado
        5 - Listar todos os nomes cadastrados
        0 - Sair
    `))

    switch(opcao) {
        case 1: 
            cadastrar()
            break
        case 2: 
            excluir()
            break
        case 3: 
            editar()
            break
        case 4: 
            pesquisar()
            break
        case 5: 
            listar()
            break
        case 0:
            break
        default:
            alert('opção inválida')
            break
    }

}

function cadastrar() {
    let nome = prompt("Cadastrar novo nome: ").toUpperCase()
    nomes.push(nome) //adiciona um elemento ao final do array
}

function excluir() {
    let nome = prompt("Digite o nome que quer excluir: ").toUpperCase()
    let indiceNome = nomes.indexOf(nome) //Encontra o índice
    if (indiceNome === -1) { //quando o indexOf retorna -1 quer dizer que não encontrou o elemento
        alert("Nome não cadastrado")
    } else {
        nomes.splice(indiceNome, 1); //Remover a partir do índice "indiceNome", 1 elemento
        alert("Excluído com sucesso")
    }
}

function editar() {
    let nome = prompt("Digite o nome que quer editar: ").toUpperCase()
    let indiceNome = nomes.indexOf(nome) //Encontra o índice
    if (indiceNome === -1) { //quando o indexOf retorna -1 quer dizer que não encontrou o elemento
        alert("Nome não cadastrado")
    } else {
        let novoNome = prompt(`Alterando, digite o novo nome: `, nome).toUpperCase() //o prompt vem com o nome antigo para o usuario alterar
        nomes[indiceNome] = novoNome;
        alert(`Nome alterado com sucesso ${nome} -> ${novoNome}`)
    }
}

function pesquisar() {
    let nome = prompt("Digite o nome que quer pesquisar: ").toUpperCase()
    let indiceNome = nomes.indexOf(nome) //Encontra o índice
    if (indiceNome === -1) { //quando o indexOf retorna -1 quer dizer que não encontrou o elemento
        alert("Nome não cadastrado")
    } else {
        alert(`Nome cadastrado no índice ${indiceNome}`)
    }
}

function listar() {
    let lista = ""
    alert(nomes.join('\n'))  //Une todos os nomes em uma única string, usando o elemento '\n' como separador, o elemento '\n' é o elemento que faz "pular 1 linha"
}
