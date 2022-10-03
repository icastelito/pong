// Características da bola
let xPosiBola = 300, yPosiBola = 200, diaBola = 20;
let raioBola = diaBola / 2;
// Características da movimentação da bola
let xVeloBola = 3, yVeloBola = 3;
// Características da Quadra
let widthCanva = 600, heightCanva = 400;
//características da Raquete 1
let xPosiRacketOne = 0, yPosiRacketOne = 175, widthRacketOne = 10, heightRacketOne = 50;
// caracteristicas da Raquete 2
let xPosiRacketTwo = 590, yPosiRacketTwo = 175, widthRacketTwo = 10, heightRacketTwo = 50;

function setup() {
    createCanvas(widthCanva, heightCanva);
}

function draw() {
    background(160);
    showBall();
    moviBall();
    coliBall();
    player1();
    player2();
    moviPlayer1();
    moviPlayer2();
    coliPlayer1();
    coliPlayer2();
}

function player1() {
    rect(xPosiRacketOne, yPosiRacketOne, widthRacketOne, heightRacketOne);
}

function player2() {
    rect(xPosiRacketTwo, yPosiRacketTwo, widthRacketTwo, heightRacketTwo);
}

function moviPlayer1() {
    if (keyIsDown(UP_ARROW)) {
        yPosiRacketOne -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPosiRacketOne += 10;
    }
}

function moviPlayer2() {
    if (keyIsDown(LEFT_ARROW)) {
        yPosiRacketTwo -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        yPosiRacketTwo += 10;
    }
} 
function showBall() {
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
        xVeloBola = xVeloBola * -1;
        yVeloBola = yVeloBola * -1;
    }


    if (yPosiBola + raioBola > height || yPosiBola - raioBola < 0) {
        yVeloBola = yVeloBola * -1;
    }
}


function coliPlayer1() {
    if (xPosiBola - raioBola < xPosiRacketOne + widthRacketOne &&
        yPosiBola + raioBola > yPosiRacketOne &&
        yPosiBola - raioBola < yPosiRacketOne + heightRacketOne) {
        xVeloBola = xVeloBola * -1;
    }
}

function coliPlayer2() {
    if (xPosiBola + raioBola > xPosiRacketTwo &&
        yPosiBola + raioBola > yPosiRacketTwo &&
        yPosiBola - raioBola < yPosiRacketTwo + heightRacketTwo) {
        xVeloBola = xVeloBola * -1;
    }
}