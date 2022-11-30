var painter = document.getElementById("c").getContext("2d");
var pipes = [[140, 100, 50, 120],[280, 200, 50, 120],[430, 150, 50, 120]]; //a[1] = 3, number are assigned 0-3 - his comment [x, y, w, h] of the passage
var pipe_dx = -2;
var birdX = 50;
var birdY = 100;
var birdSize = 20;
var g = 0.15;
var birdDY = 0;// delta y, the increasement in an interval
var jump = -5;
var timer = setInterval(drawFrame, 20);
var score = 0;

drawFrame();

document.addEventListener('keydown', onkeydown);

function init () {
    pipes = [[140, 100, 50, 120],[280, 200, 50, 120],[430, 150, 50, 120]];
    birdY = 100;
    birdDY = 0;// delta y, the increasement in an interval
    score = 0;
    timer = setInterval(drawFrame, 20);

}

function onkeydown (e) {
    if (e.key === 'Enter'){
        init ();
    } else if (e.key === ' ') {
        birdDY += jump;
    }
}

function updatePipes(){
    for (var i = 0; i < pipes.length; ++i){
        pipes[i][0] += pipe_dx;
        // if any pipe is outside the left, then place it to the right
        if (pipes[i][0] < 0- pipes[i][2]){
            pipes[i][0]=400;
            score ++;
        }
    }
}

function updateBird (){
    birdDY += g;
    birdY += birdDY;
}

function isOver() {
    for (var i = 0; i < pipes.length; ++i){
        // bird is in the upper rect
        if (isXyInRect(birdX, birdY, pipes[i][0], 0, pipes[i][2], pipes[i][1]) ||
        isXyInRect(birdX+birdSize, birdY, pipes[i][0], 0, pipes[i][2], pipes[i][1])){
            return true;
        }
        // bird is in the lower rect
        if (isXyInRect(birdX, birdY+birdSize, pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2] , 400-pipes[i][1]-pipes[i][3]) ||
        isXyInRect(birdX+birdSize, birdY+birdSize, pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2] , 400-pipes[i][1]-pipes[i][3])){
            return true;
        }
    }
    // top edge or bottom edge
    if (birdY <= 0 || birdY >= 400-birdSize){
        return true;
    }
    return false;
}

function drawFrame () {
    //detect collision
    if (isOver()){
        // show game over, clear the timer
        drawGameOver();
        clearInterval(timer);
        return;
    }
    //update data
    updatePipes();
    updateBird();
    //draw
    drawBackground();
    drawCloud();
    drawPipes ();
    drawBird(); 
    drawScore();
}

function drawBird (){
    painter.fillStyle = "#ff0000";
    painter.fillRect(birdX, birdY, birdSize, birdSize);
    painter.fillStyle = "#ffff00";
    painter.fillRect(birdX+18, birdY+8, 6, 4);
    painter.fillStyle = "#000000";
    painter.fillRect(birdX+14, birdY+4, 3, 3);
    painter.fillStyle = "#ff0000";
    painter.fillRect(birdX-8, birdY+11, 8, 6);
}

function drawBackground (){
    //sky
    painter.fillStyle = "#0090ff";
    painter.fillRect(0,0,400,400);
    //separater
    painter.fillStyle = "#30ff60";
    painter.fillRect(0,350,400,10);
    //ground
    painter.fillStyle = "#808080";
    painter.fillRect(0,360,400,40);
}

function drawPipes () {
    painter.fillStyle= "#30ff30";
    for (var i = 0; i < pipes.length; ++i){
        // upper rect
        painter.fillRect(pipes[i][0], 0, pipes[i][2], pipes[i][1]);
        // lower rect
        painter.fillRect(pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2] , 400-pipes[i][1]-pipes[i][3]);
    }
}

function isXyInRect (x, y, rx, ry, rw, rh) {
    if (x >= rx && x <= rx+rw && y >= ry && y<= ry+rh){
        return true;
    } else {
        return false;
    }
}

function drawGameOver(){
    painter.font = "50px Arial";
    painter.fillStyle = "#ffff00";
    painter.textBaseline = "top";
    painter.textAlign = "center";
    painter.fillText('Game Over!', 200, 200);
}

function drawScore () {
    painter.font = "15px Arial";
    painter.fillStyle = "#ffff00";
    painter.textBaseline = "top";
    painter.textAlign = "center";
    painter.fillText('Score:'+score, 40, 20);
}

var e = 1;
function drawCloud () {
    painter.fillStyle= "#ffffff";
    for (var k = 0; k < 400; k++){
         // Cloud
         var m = (-1)**e;
         var j= 50*m;
    painter.fillRect(k-5, j+165, 20, 20);
    painter.fillRect(k, j+155, 20, 20);
    painter.fillRect(k+10, j+160, 20, 20);
    k = k + 100;
    e++;
    }
}
