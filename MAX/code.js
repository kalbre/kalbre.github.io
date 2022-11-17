document.getElementById("id1").innerHTML="Maximum";

var btn = document.getElementById('btn');
btn.addEventListener('click', max);


function max(a, b, c) {
    var m;
    var a = Number(document.getElementById('input1').value);
    var b = Number(document.getElementById('input2').value);
    var c = Number(document.getElementById('input3').value);
   
    if(a>b){
        m = a;
    }else {
        m = b;
    }
    if(c > m) {
        m = c;
    }
     
    document.getElementById("output").innerHTML = m;
}