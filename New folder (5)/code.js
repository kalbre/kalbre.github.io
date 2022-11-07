var painter1 = document.getElementById("c1").getContext("2d");

function drawBackground (painter) {
    painter.fillStye = "#000000";
    painter.fillRect(0, 0, 400, 400);
}
drawBackground(painter1);

painter1.fillStyle = "#ff0000";
for (var j = 0; j < 13; ++j){
    for (var i = 0; i<13; ++i) {
    painter1.fillRect(10 + i*30, 10 + j*30, 20, 20);
    }
}

var painter2 = document.getElementById("c2").getContext("2d");

function drawBackground(painter) {
    painter.fillStyle = "#000000";
    painter.fillRect(0, 0, 400, 400);
}

drawBackground(painter2);

var k = 0;
var x = 0;

while (x < 13) {
  
    painter2.fillStyle = "#ff0000";
    painter2.fillRect(10 + x*30, 370 - x*30, 20, 20);
    var x = x++;
    var k = k++;
}
