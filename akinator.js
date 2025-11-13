//referencias de elementos do DOM

const perguntaDisplay = document.getElementById('pergunta-display');
const contagemCandidatos = document.getElementById('contagem-candidatos');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const resultadoFinal = document.getElementById('resultado-final');

//Definição de estrutura de dados (Candidatos/Perguntas)
const candidatos = [
    // ----------------------------------------------------
    // Categoria: Humano/Físico
    // ----------------------------------------------------
    {
        nome: "Harry Potter",
        atributos: {
            eHumano: true,
            usaOculos: true,
            eAdulto: false, // Jovem/Adolescente
            usaMagia: true,
            apareceEmFilme: true,
            usaArmaBranca: false,
            temCabeloLoiro: false
        }
    },
    {
        nome: "Homem-Aranha (Peter Parker)",
        atributos: {
            eHumano: true,
            usaOculos: false,
            eAdulto: false,
            usaMagia: false,
            apareceEmFilme: true,
            usaArmaBranca: false,
            temCabeloLoiro: false
        }
    },
    {
        nome: "Homer Simpson",
        atributos: {
            eHumano: true,
            usaOculos: false,
            eAdulto: true,
            usaMagia: false,
            apareceEmFilme: false, // Focado em Série
            usaArmaBranca: false,
            temCabeloLoiro: false
        }
    },
    {
        nome: "Mario (Super Mario)",
        atributos: {
            eHumano: true,
            usaOculos: false,
            eAdulto: true,
            usaMagia: false,
            apareceEmFilme: true,
            usaArmaBranca: false,
            temCabeloLoiro: false
        }
    },
    // ----------------------------------------------------
    // Categoria: Não-Humano/Fantasia
    // ----------------------------------------------------
    {
        nome: "Yoda",
        atributos: {
            eHumano: false,
            usaOculos: false,
            eAdulto: true, // Velho
            usaMagia: true, // Força
            apareceEmFilme: true,
            usaArmaBranca: false, // Sabre de Luz não é arma branca no contexto de fantasia
            temCabeloLoiro: false
        }
    },
    {
        nome: "Pikachu",
        atributos: {
            eHumano: false,
            usaOculos: false,
            eAdulto: false,
            usaMagia: true, // Elétrico
            apareceEmFilme: true,
            usaArmaBranca: false,
            temCabeloLoiro: false
        }
    },
    // ----------------------------------------------------
    // Categoria: Loira/Loira - Feminino
    // ----------------------------------------------------
    {
        nome: "Elsa (Frozen)",
        atributos: {
            eHumano: true,
            usaOculos: false,
            eAdulto: true,
            usaMagia: true, // Gelo
            apareceEmFilme: true,
            usaArmaBranca: false,
            temCabeloLoiro: true
        }
    },
    {
        nome: "Link (Zelda)",
        atributos: {
            eHumano: true, // Hylian é próximo de humano para o jogo
            usaOculos: false,
            eAdulto: false,
            usaMagia: false,
            apareceEmFilme: false, // Focado em Jogo
            usaArmaBranca: true, // Espada
            temCabeloLoiro: true
        }
    }
];

const linguagemNatural = {
    eHumano : 'é humano',
    usaOculos : "usa óculos",
    eAdulto : "é adulto",
    usaMagia : "usa magia",
    apareceEmFilme : "aparece em filme",
    usaArmaBranca : "usa arma branca",
    temCabeloLoiro : "tem cabelo loiro"
}
//Cria as variáveis de estado

let candidatosRestantes = [...candidatos];
let perguntasFeitas = [];

const todasAsPerguntas = Object.keys(candidatos[0].atributos);

//cria um array de perguntas disponiveis

function escolherMelhorPergunta(perguntasFeitas, candidatosRestantes){
    //pega todas as perguntas que ainda nao foram feitas
    const perguntasDisponiveis = todasAsPerguntas.filter(pergunta => !perguntasFeitas.includes(pergunta));

    //verifica se o jogo pode continuar
    if(perguntasDisponiveis.length === 0){
        return null;
    }

    let melhorPergunta = null;
    let melhorScore = Infinity;

    //testa as perguntas
    perguntasDisponiveis.forEach(pergunta =>{
        const comAtributo = candidatosRestantes.filter(
            c => c.atributos[pergunta] === true
        ).length;

        const semAtributo = candidatosRestantes.length - comAtributo;
        
        const score = Math.abs(comAtributo - semAtributo);
        
        if(score < melhorScore){
            melhorScore = score;
            melhorPergunta = pergunta;
        }
    });

    return melhorPergunta;
    
}



function playGame(){

    //casos base
    if(candidatosRestantes.length === 1){
        console.log("é fulano?"); //como eu faço pra ele retornar o nome do personagem
    }
    if(candidatosRestantes === 0){
        console.log("Você me venceu, gostaria de registrar o nome do personagem?");
    }

    //como eu faço pra ele imprimir a melhor pergunta

    const pergunta = escolherMelhorPergunta();
    //tenho que fazer o akinator desclassificar os personagens dependendo da resposta pra arvore de decisao funcionar
    if(btnNao.addEventListener("click", () =>{
        //logica da percursao da arvore
    }));
    if(btnSim.addEventListener("click", () => {
        //faz outra pergunta
    }))  
}