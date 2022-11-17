var painter1 = document.getElementById("c1").getContext("2d");
var painter2 = document.getElementById("c1").getContext("2d");
var painter3 = document.getElementById("c1").getContext("2d");

function drawBackground (painter) {
    painter.fillStyle = "#979797";
    painter.fillRect(0, 0, 400, 400);
}
drawBackground(painter1);

painter1.fillStyle = "#606060";

// background checkerboard
for (var j = 0; j < 20; ++j){
    for (var i = 0; i < 20; ++i) {
    painter1.fillRect(i*20, j*20, 10, 10);

    }
}
for (var j = 0; j < 20; ++j){
    for (var i = 0; i < 20; ++i) {
    painter1.fillRect(10 + i*20,10 + j*20, 10, 10);

    }
}
//mini white
painter2.fillStyle = "#ffffff";

for (var c = 0; c < 40; ++c){
    for (var r = 0; r < 40; ++r) {
    painter2.fillRect(8 + r*20,8 + c*20, 4, 4);

    }
}
for (var c = 0; c < 40; ++c){
    for (var r = 0; r < 40; ++r) {
    painter2.fillRect(-2 +r*20,-2 + c*20, 4, 4);

    }
}

// mini black squares
painter3.fillStyle = "#000000";

for (var c = 0; c < 40; ++c){
    for (var r = 0; r < 40; ++r) {
    painter3.fillRect(8 + r*20,-2+ c*20, 4, 4);

    }
}
for (var c = 0; c < 40; ++c){
    for (var r = 0; r < 40; ++r) {
    painter3.fillRect(-2+r*20, 8 + c*20, 4, 4);

    }
}

// mini inverse
//mini white

for (var c = 5; c < 15; ++c){
    for (var r = 5; r < 15; ++r) {
    painter3.fillRect(8 + r*20,8 + c*20, 4, 4);

    }
}
for (var c = 5; c < 15; ++c){
    for (var r = 5; r < 15; ++r) {
    painter3.fillRect(-2 +r*20,-2 + c*20, 4, 4);

    }
}

// mini black squares
painter2.fillStyle = "#ffffff";

for (var c = 5; c < 15; ++c){
    for (var r = 5; r < 15; ++r) {
    painter2.fillRect(8 + r*20,-2+ c*20, 4, 4);

    }
}
for (var c = 5; c < 15; ++c){
    for (var r = 5; r < 15; ++r) {
    painter2.fillRect(-2+r*20, 8 + c*20, 4, 4);

    }
}
