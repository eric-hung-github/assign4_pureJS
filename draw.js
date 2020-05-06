//canvas setting
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext('2d');
//------------------------------------------------------

// img setting------------------------------------------
var soldier = new Image();
soldier.src = "img/soldier.png";
//------------------------------------------------------

// 
var x = 10;


// main draw


function draw() {
    
    ctx.drawImage(soldier,0,0);
}

setInterval(draw(), 100);