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

// Initialize game state
let candidatosRestantes = [...candidatos];
let perguntasFeitas = [];
let perguntaAtual = null;

const todasAsPerguntas = Object.keys(candidatos[0].atributos);

//processamento de linguagem
const linguagemNatural = {
    eHumano : 'é humano',
    usaOculos : "usa óculos",
    eAdulto : "é adulto",
    usaMagia : "usa magia",
    apareceEmFilme : "aparece em filme",
    usaArmaBranca : "usa arma branca",
    temCabeloLoiro : "tem cabelo loiro"
}

//cria um array de perguntas disponiveis

function escolherMelhorPergunta(perguntasFeitas, candidatosRestantes){

    //pega todas as perguntas que ainda nao foram feitas
    const perguntasDisponiveis = todasAsPerguntas.filter(   pergunta => !perguntasFeitas.includes(pergunta));

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

// Event listeners for buttons
btnSim.addEventListener("click", () => {
    if (!perguntaAtual) return;
    
    // Filter candidates that have this attribute as true
    candidatosRestantes = candidatosRestantes.filter(
        c => c.atributos[perguntaAtual] === true
    );
    
    contagemCandidatos.textContent = candidatosRestantes.length;
    playGame();
});

btnNao.addEventListener("click", () => {
    if (!perguntaAtual) return;
    
    // Filter candidates that have this attribute as false
    candidatosRestantes = candidatosRestantes.filter(
        c => c.atributos[perguntaAtual] === false
    );
    
    contagemCandidatos.textContent = candidatosRestantes.length;
    playGame();
});
    
//retorna a proxima pergunta
function proximaPergunta() {
    const pergunta = escolherMelhorPergunta(perguntasFeitas, candidatosRestantes);
    
    if (pergunta === null) {
        return null;
    }
    
    perguntasFeitas.push(pergunta);
    perguntaAtual = pergunta;
    
    // Convert to human-readable format
    const perguntaFormatada = linguagemNatural[pergunta] || pergunta;
    perguntaDisplay.textContent = perguntaFormatada + "?";
    
    return pergunta;
}

function playGame() {
    // Base case: only one candidate left
    if (candidatosRestantes.length === 1) {
        const personagem = candidatosRestantes[0].nome;
        resultadoFinal.textContent = `É ${personagem}?`;
        btnSim.disabled = true;
        btnNao.disabled = true;
        return;
    }
    
    // Base case: no candidates left
    if (candidatosRestantes.length === 0) {
        resultadoFinal.textContent = "Você me venceu! Gostaria de registrar o nome do personagem?";
        btnSim.disabled = true;
        btnNao.disabled = true;
        return;
    }
    
    // Continue game: ask next question
    proximaPergunta();
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', () => {
    contagemCandidatos.textContent = candidatosRestantes.length;
    playGame();
});