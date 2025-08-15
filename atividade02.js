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

//Condicionais Simples - A Primeira Decisão
console.log(`Capítulo 1: Estava eu andando, quando de repente apareceu uma figura brilhante diante de mim e me ofereceu 3 objetos que me ajudariam durante a missão. Adiente, encontrei um túnel com uma porta trancada, e percebi que um dos objetos era um pergaminho poderia me ajudar a abrir.`);

let temPergaminho = true;
if(temPergaminho) {
    console.log(`Pode passar pelo túnel: ${temPergaminho}`);
}

//Condicionais Compostas - Escolhas Estratégicas
console.log(`Capítulo 2: Depois de passar pelo túnel, me vi obrigada a seguir por um caminho de pedras. E durante a trilha começei a ser atacada por pássaros carnívoros, desesperada começei a lutar contra eles para que eu tentasse sobreviver e continuar a missão.`);

if(defesa >= 50) {
console.log("Você venceu a luta");
} else {
    console.log("Voce não venceu a luta");
} combatesVencidos++

console.log(`Após essa luta, os combates vencindos serão:${combatesVencidos}`);

pontosAgilidade = agilidade -= 15;
console.log(`Ao longo do caminho, fui atingida por uma pedra e cai em um buraco, e só notei depois que havia perdido um dos objetos que eu tinha recebido da figura, que era um olho grego, e por isso acabei perdendo 15 pontos de agilidade, ficando com ${agilidade} pontos.`);

console.log(`Caminhando mais a frente cheguei a uma floresta escura e constatei que estava com 80% do caminho feito e percebi que precisava descansar porque minha energia estava baixa.`);

let precisaDormir = true;
if(precisaDormir){
    console.log(`Você precisa descansar: ${precisaDormir}`);
}

console.log(`Capítulo 3: Quando acordei, a floresta tinha ficado um pouco mais clara, e pude ver uma enorme pedra que bloqueava uma passagem.`);

if(forca >= 60) {
    console.log("Você conseguirá mover a pedra");
} else {
    console.log("Você não consiguirá mover a pedra");
}

console.log(`Conseguindo mover a pedra, tive a possibilidade de ver com mais atenção a porta que impedia a entrada secreta para a caverna do Guardião. Olhando com mais atenção a fechadura, vi que se parecia com uma pena, uma pena de coruja que ganhei antes de começar minha jornada. Então peguei-a e coloquei para descobrir se a porta iria ser destrancada.`);

let temPenaCoruja = true;
if(temPenaCoruja) {
    console.log(`A porta foi destrancada: ${temPenaCoruja}`);
}

console.log(`Com a passagem aberta, entrei no corredor estreito e começei andar e de longe consigo avistar a porta da caverna do Guardiâo que só pode ser aberta com a senha que está dentro do artefato que recuperei em minha última missão.`);

if(inteligencia >= 900) {
    console.log(`Terá inteligência suficiente para abrir o artefato e entender a senha e mapa presentes no artefato.`);
    inteligenciaTotal = inteligencia *2;
    quedaInimigo = poderGuardiao -= 50;
    console.log(`A inteligência total de ${nome} será ${inteligenciaTotal}, e o poder do guardião irá cair para ${quedaInimigo}.`);
} else if (inteligencia >= 600) {
    console.log(`Terá inteligência para abrir o artefato, mas terá dificuldades para interpretar a senha e o mapa presentes no artefato. `);
    inteligenciaIgual = inteligencia;
    console.log(`A inteligência de ${nome} continuará a mesma: ${inteligenciaIgual}`);
} else if (inteligencia >= 300) {
    console.log(`Terá dificuldades para abrir e interpretar a senha e o mapa presentes no artefato`);
    InteligenciaPerdida = inteligencia -= 560;
    console.log(`Com uma parte da inteligência perdida ${nome} ficará com ${InteligenciaPerdida}.`)
} else {
    console.log (`Não consiguirá enterder a finalidade do obejto, e consequentemente não completará a missão`);
    vantagemInimigo = poderGuardiao *3;
    console.log(`Não tinha inteligência suficiente para completar a missão e com isso o Guardião conseguiu execultar seu plano triplicou seus poderes, ficando com ${vantagemInimigo}.`);
}
console.log(`Atingindo a inteligência necessária entrei na caverna e peguei a poção do Guadião, conseguindo assim salvar o reino das sombras.`);

//Epílogo
if(poderGuardiao <= 50) {
    console.log(`A ${nome}, conquistou uma grande vitória.`);
    xp += 100;
    combatesVencidos++
    console.log(`Com esses bônus ela alcançou ${xp} de xp e ${combatesVencidos} combates vencidos`);
} else {
    console.log(`A ${nome} trabalhou e se dedicou bastante até aqui mas não conseguiu vencer e salvar o reino`);
}

console.log(`Fim da história - Aguarde o próximo nível e a próxima missão em que a heroína ${nome} da classe ${classe} será chamada.`);

// Nível 3 

// Resgate da Saga Anterior
console.log(`Logo após terminar a missão, a guerreira ${nome}, já foi convocada para a próxima missão, onde precisaria libertar o conde, o braço direito do rei, em Troia, já que o Guardião conseguiu enganar a nobreza, convencendo a todos de que o conde Aidan tinha armado para o rei, e por isso tinha sido preso.`);

let inventario = [
    "Poção de sangue de Elfo", "Boné da invisibilidade", "Lança da Habilidade", "Escudo de Égide", "Colar da Inteligência"];
let aliados = ["Mago Trevor","Coruja Elora", "Cavaleiro Frederico"];
let inimigos = ["Duende Amis", "Duque Olavo", "Bruxo Bartolomeu"];
let salasCastelos = ["Sala do trono", "O Grande salão", "Biblioteca das Artes", "Sala de estar"];
let tesouroColetado = [];

//Capítulo 4
console.log(`Capítulo 4: Durante a minha viagem encontrei algumas poções que me ajudariam na missão.`)
// Declaração e Inicialização
let pocoesEncontradas = ["Poção de invisibilidade", "Poção da Sorte", "Poção de adaptação de Dano"];
let armadilhasAtiradas = [];

// Acesso e modificação de elementos
console.log(`Poção encontrada:` + pocoesEncontradas[0]);
console.log(`Total de poções mágicas:` + pocoesEncontradas.length);

// Modificando elemento específico
inventario[2] = "Lança de Habilidade máxima"; //Upgrade na arma
console.log(`${nome} aprimorou uma arma ${inventario[2]}`);

// Métodos de array fundamentais
inventario.push(`Bússola do conhecimento.`);
console.log(`Novo item adicionado no inventário: ` + inventario);

let itemInventadoRemovido = inventario.pop();
console.log(`Item removido do inventário: ` + itemInventadoRemovido);
console.log(`Inventário atualizado: ` + inventario);

//Capítulo 5
//Explorando cada sala do castelo usando for tradicional
console.log(`Capítulo 5: Explorando as salas do castelo`);
console.log(`Inicio a minha exploração das ` + salasCastelos.length +  ` salas místicas.`);

for (let i = 0; i < salasCastelos.length; i++) {
    console.log(`Sala ` + (i + 1) + `: ` + salasCastelos[i]);

//Lógica diferente para cada sala baseado no índice
if (i === 0) {
    console.log(`Quando eu estava entrando na Sala do trono encontrei uma relíquia esquecida.`);
tesouroColetado.push (`Relíquia dos Três solos`);
console.log(`Meu primeiro tesouro coletado: ${tesouroColetado}.`);
} else if (i === 2) {
    console.log(`Depois adentrei o cômodo 3 que era a Biblioteca das Artes e procurando entre as pratileiras me deparei com um livro de feitiços e então o peguei, pensando que futuramente poderia usá-lo para me defender de um dos meus inimigos o Duende Amis. `);
defesa += 15;
    console.log(`Pegando o livro de feitiços sua defesa aumentou para: ${defesa}`);
} else {
    console.log(`Encontei na parede para ver os feitiços e as poções, e a parede se abriu para um passagem secreta, onde a sala que ela levava estava toda escura, de repente senti uma picada no meu tornozelo, percebendo que era uma cobra a afastei.`);
    vidaAtual -= 30;
    console.log(`Com essa picada minha vida atual diminui para: ${vidaAtual}`);
}
}