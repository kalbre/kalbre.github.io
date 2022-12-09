var painter = document.getElementById("c").getContext("2d");
var path = [[250, 365, 50, 200],[425, 340, 50, 200],[610, 350, 50, 200]];
var boxx = 70;
var boxy = 360;
var jump = -10;
var boxdy = 0;
var g = .3; 
var allowJump = false;
var pathdx = -2.25;
var timer = setInterval(drawFrame, 20);
var score = 0;
var box = 30;
var isUp = false;
var clouds = [[110, 230, 30, 30],[240, 90, 35, 40],[370, 150, 60, 50]];
var clouddx = -.1;
var tree = [[50, 300, 50, 200],[425, 270, 50, 200],[570, 285, 50, 200]];
var treedx = -.2;
var bird = [[1400, 150, 2, 2],[1405, 152, 2, 2],[1407, 147, 2, 2],[1409, 155, 2, 2]];
var balloon = [[460, 70, 10, 12],[460, 70, 10, 12]];

drawFrame();

document.addEventListener('keydown', onkeydown);

function init () {
    path = [[250, 365, 50, 200],[425, 340, 50, 200],[610, 350, 50, 200]];
    clouds = [[110, 230, 30, 30],[240, 90, 35, 40],[370, 150, 60, 50]];
    tree = [[50, 300, 50, 200],[425, 270, 50, 200],[570, 285, 50, 200]];
    balloon = [[460, 70, 10, 12],[460, 70, 10, 12]];
    boxy = 360;
    boxdy = 0;// delta y, the increasement in an interval
    score = 0;
    timer = setInterval(drawFrame, 20);
}

function updateClouds(){
    for (var i = 0; i < 3; ++i){
        clouds[i][0] += clouddx;
        // if any obsticle is outside the left, then place it to the right
        if (clouds[i][0] < 0 - clouds[i][2]*2){
            clouds[i][0] = 400;
        } 
    }
}

function updateTree(){
    for (var i = 0; i < 3; ++i){
        tree[i][0] += treedx;
        // if any obsticle is outside the left, then place it to the right
        if (tree[i][0] < 0 - tree[i][2]-40){
            tree[i][0] = 700;
        } 
    }
}

function updateBirds(){
    for (var i = 0; i < 4; ++i){
        bird[i][0] += pathdx*1.5;
        // if any obsticle is outside the left, then place it to the right
        if (bird[i][0] < 0 - bird[i][2]*10){
            bird[i][0] = 2000;
        } 
    }
}

function updateBalloon(){
    for (var i = 0; i < 2; ++i){
        balloon[i][0] += clouddx*1.5;
        // if any obsticle is outside the left, then place it to the right
        if (balloon[i][0] < 0 - balloon[i][2]*2){
            balloon[i][0] = 400;
        } 
    }
}

function updatePath(){
    for (var i = 0; i < 3; ++i){
        path[i][0] += pathdx;
        // if any obsticle is outside the left, then place it to the right
        if (path[i][0] < 0- path[i][2]){
            path[i][0] = 550;
            path[i][2] += Math.random()*6;
            path[i][0] -= Math.random()*5;
            score ++;
        } 
    }
}

function updateBox () {
    if (boxy < 360){
    boxdy += g;
    boxy += boxdy;
    }
}

function onkeydown (e) {
    if (e.key === 'Enter'){
        init ();
    } 
    if (boxy > 359){
        boxy = 360;
        boxdy = 0
    if (e.key === ' ') {
        boxdy += jump;
        boxy += boxdy;
     }}
}

function isOver() {
    for (var i = 0; i < path.length; ++i){
        if (isXyInRect(boxx, boxy+box-4, path[i][0], path[i][1], path[i][2] , path[i][3]) ||
        isXyInRect(boxx+box, boxy+box-4, path[i][0], path[i][1], path[i][2] , path[i][3])){
            return true;
        }
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
    updateClouds();
    updateTree();
    updateBalloon();
    updateBirds();
    updatePath();
    updateBox();
    //draw
    drawBackground();
    drawClouds();
    drawTree();
    drawBalloon();
    drawBirds();
    drawPath();
    drawGround();
    drawBox(); 
    drawScore();
}

function drawBox () {
    painter.fillStyle = "#999999";
//light grey
    //large body parts
    painter.fillRect(boxx, boxy, box+4, box-12);
    //back light leg
    painter.fillRect(boxx+6, boxy+18, box-22, box-28);
    painter.fillRect(boxx+8, boxy+20, box-24, box-28);
    //front light leg
    painter.fillRect(boxx+18, boxy+18, box-24, box-26);
    //head 
    painter.fillRect(boxx+16, boxy-14, box-10, box-14);
    painter.fillRect(boxx+36, boxy-12, box-28, box-18);
    painter.fillStyle = "#666666";
//dark grey
    //back dark leg
    painter.fillRect(boxx-2, boxy+10, box-26, box-18);
    painter.fillRect(boxx-4, boxy+12, box-28, box-20);
    painter.fillRect(boxx+2, boxy+14, box-28, box-26);
    painter.fillRect(boxx+4, boxy+16, box-28, box-28);
    //front dark leg
    painter.fillRect(boxx+29, boxy+18, box-25, box-28);
    painter.fillRect(boxx+30, boxy+20, box-25, box-28);
    //tail
    painter.fillRect(boxx, boxy-6, box-26, box-24);
    painter.fillRect(boxx+2, boxy-8, box-24, box-26);
    painter.fillRect(boxx+6, boxy-14, box-26, box-22);
    painter.fillRect(boxx+4, boxy-16, box-26, box-26);
    //other details on head
    painter.fillRect(boxx+20, boxy-18, box-26, box-28);
    painter.fillRect(boxx+30, boxy-18, box-26, box-28);
    painter.fillRect(boxx+18, boxy-16, box-22, box-28);
    painter.fillRect(boxx+28, boxy-16, box-22, box-28);
    painter.fillRect(boxx+16, boxy-14, box-28, box-28);
    painter.fillRect(boxx+14, boxy-12, box-28, box-16);
    //back stripes
    painter.fillRect(boxx+5, boxy, box-27, box-24);
    painter.fillRect(boxx+10, boxy, box-27, box-24);
    painter.fillStyle = "#ffffff";
//white
     //toes
     painter.fillRect(boxx-2, boxy+22, box-26, box-28);
     painter.fillRect(boxx+10, boxy+22, box-26, box-28);
     painter.fillRect(boxx+20, boxy+22, box-26, box-28);
     painter.fillRect(boxx+31, boxy+22, box-26, box-28);
     //whiskers
     painter.fillRect(boxx+14, boxy-6, box-25, box-29);
     painter.fillRect(boxx+14, boxy-3, box-25, box-29);
     painter.fillRect(boxx+37, boxy-6, box-27, box-29);
     painter.fillRect(boxx+37, boxy-3, box-27, box-29);
     painter.fillStyle = "#50FA6A";
//eyes
     painter.fillRect(boxx+22, boxy-8, box-27, box-26);
     painter.fillRect(boxx+30, boxy-8, box-27, box-26);
     painter.fillStyle = "#000000";
     painter.fillRect(boxx+23, boxy-7, box-29, box-28);
     painter.fillRect(boxx+31, boxy-7, box-29, box-28);
     //nose
     painter.fillRect(boxx+26, boxy-3, box-27, box-29);
     painter.fillRect(boxx+27, boxy-2, box-29, box-29);
}

function drawBackground () {
    // sky
    painter.fillStyle = "#7099FF";
    painter.fillRect(0, 0, 400, 400);
}

function drawGround (){
    painter.fillStyle = "#505000";
    painter.fillRect(0, 390, 400, 10);
    painter.fillStyle = "#00b247";
    painter.fillRect(0, 383, 400, 7);
}

function drawPath () {
    painter.fillStyle = "#506050";
    for (var i = 0; i < 3; ++i){
        painter.fillRect(path[i][0], path[i][1], path[i][2] ,path[i][3]);
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
    painter.font = "15px Serif";
    painter.fillStyle = "#ffff00";
    painter.textBaseline = "top";
    painter.textAlign = "center";
    painter.fillText('Score:'+score, 40, 20);
}

function drawClouds () {
    painter.fillStyle = "#ffffff";
    for (var i = 0; i < 3; ++i){
        painter.fillRect(clouds[i][0], clouds[i][1], clouds[i][2]*2, clouds[i][3]);
        painter.fillRect(clouds[i][0]+10, clouds[i][1]-20, clouds[i][2], clouds[i][3]);
    }
}

function drawTree () {
    for (var i = 0; i < 3; ++i){
        painter.fillStyle = "#00b247";
        painter.fillRect(tree[i][0]-40, tree[i][1]-50, tree[i][2]*2, tree[i][3]-150);
        painter.fillRect(tree[i][0]-60, tree[i][1]-30, tree[i][2]*3, tree[i][3]-150);
        painter.fillStyle = "#707000";
        painter.fillRect(tree[i][0], tree[i][1], tree[i][2]-20, tree[i][3]);
    }
}

function drawBirds () {
    painter.fillStyle = "#000000";
    for (var i = 0; i < 4; ++i){
        painter.fillRect(bird[i][0], bird[i][1], bird[i][2], bird[i][3]);
    }
}

function drawBalloon () {
    for (var i = 0; i < 2; ++i){
        painter.fillStyle = "#ff2020";
        painter.fillRect(balloon[i][0]+2, balloon[i][1]-2, balloon[i][2]-4, balloon[i][3]);
        painter.fillRect(balloon[i][0], balloon[i][1], balloon[i][2], balloon[i][3]);
        painter.fillStyle = "#60ff99";        
        painter.fillRect(balloon[i][0]+3.5, balloon[i][1]-2, balloon[i][2]-7, balloon[i][3]);
        painter.fillRect(balloon[i][0]+3, balloon[i][1], balloon[i][2]-6, balloon[i][3]);
        painter.fillStyle = "#ffffff";
        painter.fillRect(balloon[i][0]+2, balloon[i][1]+12, balloon[i][2]-9.5, balloon[i][3]-8);
        painter.fillRect(balloon[i][0]+7, balloon[i][1]+12, balloon[i][2]-9.5, balloon[i][3]-8);
        painter.fillStyle = "#707040";
        painter.fillRect(balloon[i][0]+2, balloon[i][1]+16, balloon[i][2]-4, balloon[i][3]-6);
    }
}