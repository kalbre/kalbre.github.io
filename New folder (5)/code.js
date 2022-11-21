var painter1 = document.getElementById("c1").getContext("2d");

function drawBackground (painter1) {
    painter1.fillStyle = "#000000";
    painter1.fillRect(0, 0, 400, 400);
}
drawBackground(painter1);

painter1.fillStyle = "#ff0000";
for (var j = 0; j < 13; ++j){
    for (var i = 0; i < 13; ++i) {
    painter1.fillRect(10 + (2*i-j)*30, 370 - j*30, 20, 20);
    }
  
}

var painter2 = document.getElementById("c2").getContext("2d");

function drawBackground(painter2) {
    painter2.fillStyle = "#000000";
    painter2.fillRect(0, 0, 400, 400);
}

drawBackground(painter2);

painter2.fillStyle = "#ff0000";
var i=0;

while (i < 13) {
    var j = 0;
    while (j < 13){
    painter2.fillRect(10 + (i)*30, 370 - (j-i)*30, 20, 20);
    j++;
    }
    i++;
}
var i = 0;
painter2.fillStyle = "#000000";
while (i < 13) {
    var j = 0;
    while (j < 13){
    painter2.fillRect(10 + (j-i)*30, 370 - (j+1)*30, 20, 20);
    j++;
    }
    i++;
}