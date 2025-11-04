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

//Cria as variáveis de estado

let candidatosRestantes = [...candidatos];
let perguntasFeitas = [];

