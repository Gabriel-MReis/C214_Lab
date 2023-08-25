const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }

    exibirDetalhes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao} minutos`);
        console.log(`Assistido: ${this.assistido ? 'Sim' : 'Não'}`);
        if (this.avaliacao !== null) {
            console.log(`Avaliação: ${this.avaliacao}/10`);
        }
    }

    marcarComoAssistido() {
        this.assistido = true;
    }

    avaliarFilme(avaliacao) {
        if (avaliacao >= 0 && avaliacao <= 10) {
            this.avaliacao = avaliacao;
            console.log("Avaliação registrada com sucesso.");
        } else {
            console.log("Avaliação inválida. A nota deve estar entre 0 e 10.");
        }
    }
}

const filmes = [];

function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Adicionar novo filme");
    console.log("2. Marcar filme como assistido");
    console.log("3. Avaliar um filme");
    console.log("4. Exibir lista de filmes");
    console.log("5. Sair do programa");
}

function adicionarFilme() {
    rl.question("Informe o título do filme: ", (titulo) => {
        rl.question("Informe o ano do filme: ", (ano) => {
            rl.question("Informe o gênero do filme: ", (genero) => {
                rl.question("Informe a duração do filme em minutos: ", (duracao) => {
                    const filme = new Filme(titulo, ano, genero, duracao);
                    filmes.push(filme);
                    console.log("Filme adicionado com sucesso.");
                    exibirMenu();
                });
            });
        });
    });
}

function marcarAssistido() {
    rl.question("Informe o índice do filme que deseja marcar como assistido: ", (indice) => {
        if (indice >= 0 && indice < filmes.length) {
            filmes[indice].marcarComoAssistido();
            console.log("Filme marcado como assistido.");
        } else {
            console.log("Índice inválido.");
        }
        exibirMenu();
    });
}

function avaliarFilme() {
    rl.question("Informe o índice do filme que deseja avaliar: ", (indice) => {
        if (indice >= 0 && indice < filmes.length) {
            rl.question("Informe a avaliação do filme (0 a 10): ", (avaliacao) => {
                filmes[indice].avaliarFilme(parseInt(avaliacao));
                exibirMenu();
            });
        } else {
            console.log("Índice inválido.");
            exibirMenu();
        }
    });
}

function exibirListaFilmes() {
    console.log("\nLista de Filmes:");
    for (let i = 0; i < filmes.length; i++) {
        console.log(`\nFilme ${i}:`);
        filmes[i].exibirDetalhes();
    }
    exibirMenu();
}

function sairDoPrograma() {
    console.log("Saindo do programa.");
    rl.close();
}

exibirMenu();

rl.on('line', (opcao) => {
    switch (opcao) {
        case "1":
            adicionarFilme();
            break;
        case "2":
            marcarAssistido();
            break;
        case "3":
            avaliarFilme();
            break;
        case "4":
            exibirListaFilmes();
            break;
        case "5":
            sairDoPrograma();
            break;
        default:
            console.log("Opção inválida.");
            exibirMenu();
    }
});