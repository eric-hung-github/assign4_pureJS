//canvas setting
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');
//------------------------------------------------------

// img setting------------------------------------------
var soldier = new Image();
soldier.src = "img/soldier.png";
//------------------------------------------------------

var x=10;

// main draw

function drawSoil() {

}

function draw() {
    ctx.drawImage(soldier,x++,0);
    
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

    

}

setInterval(draw(), 100);