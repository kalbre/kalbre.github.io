document.getElementById("id1").innerHTML="Wage Calculation!";

var btn = document.getElementById('btn');
btn.addEventListener('click', Wage);


function Wage(a, b, c, d, e) {
   
    var a = Number(document.getElementById('input1').value);
    var b = Number(document.getElementById('input2').value);
    var c = Number(document.getElementById('input3').value);
    var d = Number(document.getElementById('input4').value);
    var e = Number.value;
   
        if (d > c) {
            e = (d - c) * b + (c * a)
        } else {
            e = d * a
        }
       
     
    document.getElementById("output").innerHTML = "$" + e;
}