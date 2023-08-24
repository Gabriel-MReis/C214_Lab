class Filme {
    constructor(titulo,ano,genero,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = 'Nao';
        this.avaliacao = 0;
    }

    informacoesFilme(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Duracao: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliacao: ${this.avaliacao}`);
    }

    atualizarAssistido(){
        this.assistido = 'Assistido';
        console.log('Alteracao realizada com sucesso.')
    }

    avaliarFilme(avaliacao){
        this.avaliacao = avaliacao;
        console.log(`Avaliacao ${avaliacao} adicionada para o filme ${this.titulo}.`);
    }

}

const avatar2 = new Filme('Avatar: The Way of Water',2022,'Sci-fi/Action', '3h 12m');
const ohobbit1 = new Filme('The Hobbit: An Unexpected Journey',2012,'Adventure/Fantasy', '2h 49m');
const powerranges1 = new Filme('Mighty Morphin Power Rangers',1995,'Family/Sci-fi', '1h 35m');

avatar2.atualizarAssistido();
ohobbit1.atualizarAssistido();
powerranges1.atualizarAssistido();

avatar2.avaliarFilme(4);
ohobbit1.avaliarFilme(5);
powerranges1.avaliarFilme(5);

avatar2.informacoesFilme();
ohobbit1.informacoesFilme();
powerranges1.informacoesFilme();