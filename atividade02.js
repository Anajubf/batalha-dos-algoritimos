//1. Criação das Variáveis Principais
let nome = "Atena";
let classe = "Arqueira";
let nivel = 18;
let vida = 100;
let moedas = 70;
let xp = 65;

console.log(`Olá eu sou ${nome}, da classe ${classe}. Nasci a 20 anos atrás em uma pequena aldeia, pouco conhecida chamada olimpo.`);
console.log(`Até agora consegui alcançar o nível ${nivel}, tenho ${vida} vidas, ${moedas} moedas de ouro e ${xp} xp. `);

//2. Definição de Constantes Mágicas
const NOME_ARMA = "Espada da Sabedoria";
let danoBase = 90;
const NOME_ARMADURA = "Armadura da justiça";
const DEFESA_BASE = 60;

console.log(`Como deusa da inteligência, minha arma é uma espada que tem o nome de ${NOME_ARMA}, e tem um dano de ${danoBase}.`)
console.log(`Minha armadura é chamada de ${NOME_ARMADURA} e sua defesa tem o valor de ${DEFESA_BASE}.`);
console.log(`Sabendo disso, fui até o castelo do malvado rei para enfrentar seu dragão e recuperar um artefato perdido.`);

//3.Aplicação de Operadores de Atribuição
pontosExperiencia = xp += 150;
moedasOuro = moedas -= 30;
pontosVida = vida += 40;
danoDobrado = danoBase *= 2;

console.log(`Quando cheguei, tive um demorada luta com o dragão do rei Estevão e ganhei 150 pontos de experiência , resultando em ${pontosExperiencia}.`);
console.log(`Depois da luta comprei um poção por 30 moedas e ficando com ${moedasOuro} moedas.`);
console.log(`Usei essa poção para recuperar 40 pontos de vida, tendo no total ${pontosVida} vidas.`);
console.log(`Durante a batalha minha arma foi encantada depois que venci o dragão, tendo meu dano dobrado totalizando ${danoDobrado}.`);

//4. Cálculo de Atributos Finais
let ataqueTotal 
let defesaTotal

ataqueTotal = nivel + danoBase;
defesaTotal = DEFESA_BASE + (nivel / 2);


// 5.Avaliação de Prontidão com Operadores Lógicos
let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)

console.log(`Conseguindo recuperar o artefato, sai daquele território, mas logo fui chamada para outra missão.`);

//Nível 2 

// 1. Resgate do Nível 1
nomePersonagem = "Atena";
classe = "Arqueira"; 
let vidaAtual = 140;
let vidaMaxima = 250;
let manaAtual = 50;
let manaMaxima = 50;
nivel = 18;
xp = 215;
ouro = 40;

// Novos atributos para batalha
let forca = 60;
let defesa = 62;
let agilidade = 70;
let combatesVencidos = 5;
let inteligencia = 1000;
let poderGuardiao = 70;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Troia";
let missaoAtual = "enfrentar o Guardião";

//Prólogo
console.log(`Prólogo: A heroina ${nome}, depois de enfrentar um poderoso dragão no castelo do rei malvado, conseguiu recuperar um artefato sagrado. Vitoriosa, deixou o castelo, mas sua joranda estava longe de terminar. Ao retornar é informada de que o Guardião está preparando uma poção para conseguir enganar o reino e assumir o trono de ${localAtual}, e com isso precisaria ${missaoAtual} e salvar o reino.`);

