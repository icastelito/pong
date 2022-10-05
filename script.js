// Características da bola
var xPosiBola = 500, yPosiBola = 250, diaBola = 20;
var raioBola = diaBola / 2;
// Características da movimentação da bola
var xVeloBola = 0, yVeloBola = 0;
// Características da Quadra
const widthCanva = 1000, heightCanva = 500;
//características da Raquete 1
var xPosiRacketOne = 3, yPosiRacketOne = 220, widthRacketOne = 10, heightRacketOne = 60;
// caracteristicas da Raquete 2
var xPosiRacketTwo = 987, yPosiRacketTwo = 220, widthRacketTwo = 10, heightRacketTwo = 60;
// Placar
var poinPlay1 = 0, poinPlay2 = 0;

function setup() {
    createCanvas(widthCanva, heightCanva);
}

function draw() {
    background(150);
    showDetails();
    moviBall();
    showBall();
    marcPonto();
    coliBall();
    player1();
    player2();
    moviPlayer1();
    moviPlayer2();
    coliPlayer1();
    coliPlayer2();
    placar();
    start();
    coliSidePlayer1();
    coliSidePlayer2();
    
}

// Marcação de ponto
function marcPonto(){
    if(xPosiBola - 10 > widthCanva){
        poinPlay1 = poinPlay1 + 1;
    }
    if (xPosiBola + 10 < 0){
        poinPlay2 = poinPlay2 + 1;
    }
}
// Iniciar o jogo
function start() {
    if (xVeloBola ==0 && keyIsDown(32)) {
        xVeloBola = 5;
        yVeloBola = 3.5;
    }
    if (xVeloBola ==0 && keyIsDown(13)) {
        xVeloBola = -5;
        yVeloBola = -3.5;
    }
}

// Configurações físicas dos players
function player1() {
    rect(xPosiRacketOne, yPosiRacketOne, widthRacketOne, heightRacketOne);
}

function player2() {
    rect(xPosiRacketTwo, yPosiRacketTwo, widthRacketTwo, heightRacketTwo);
}

// Movimentação dos players

function moviPlayer1() {
    if (keyIsDown(87)) {
        yPosiRacketOne -= 10;
    }
    if (keyIsDown(83)) {
        yPosiRacketOne += 10;
    }
}

function moviPlayer2() {
    if (keyIsDown(UP_ARROW)) {
        yPosiRacketTwo -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPosiRacketTwo += 10;
    }
} 

//colisão da raquete com os lados	
function coliSidePlayer1() {
    if (yPosiRacketOne + heightRacketOne > heightCanva) {
        yPosiRacketOne = heightCanva - heightRacketOne - 3;
}
    if (yPosiRacketOne < 0) {
        yPosiRacketOne = 3;
    }
}

function coliSidePlayer2(){
    if (yPosiRacketTwo + heightRacketTwo > heightCanva) {
        yPosiRacketTwo = heightCanva - heightRacketTwo - 3;
    }
    if (yPosiRacketTwo < 0) {
        yPosiRacketTwo = 3;
    }
}

//Colisão com os players
function coliPlayer1() {
    if (xPosiBola - raioBola < xPosiRacketOne + widthRacketOne &&
        yPosiBola + raioBola > yPosiRacketOne &&
        yPosiBola - raioBola < yPosiRacketOne + heightRacketOne) {
        xVeloBola = xVeloBola * -1.0250;
    }
}

function coliPlayer2() {
    if (xPosiBola + raioBola > xPosiRacketTwo &&
        yPosiBola + raioBola > yPosiRacketTwo &&
        yPosiBola - raioBola < yPosiRacketTwo + heightRacketTwo) {
        xVeloBola = xVeloBola * -1.0250;
    }
}

// Detalhes do campo
function showDetails() {
    fill(150);
    rect(widthCanva / 2, 0, 0, heightCanva);
}

// Mostrar, movimentar e checar colisão da bola
function showBall() {
    fill(255);
    circle(xPosiBola, yPosiBola, diaBola);
}

function moviBall() {
    xPosiBola = xPosiBola + xVeloBola;
    yPosiBola = yPosiBola + yVeloBola;
}

function coliBall() {
    if (xPosiBola - raioBola > widthCanva || xPosiBola + raioBola < 0) {
        xPosiBola = widthCanva / 2;
        yPosiBola = heightCanva / 2;
        xVeloBola = 0;
        yVeloBola = 0;
    }

    if (yPosiBola + raioBola > height || yPosiBola - raioBola < 0) {
        yVeloBola = yVeloBola * -1;
    }
}

// Placar
function placar() {
    fill(255);
    textSize(32);
    text(poinPlay1 , widthCanva/4, 30);
    text(poinPlay2 , widthCanva*3/4, 30);
}


