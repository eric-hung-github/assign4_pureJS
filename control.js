//-------------------------------------------------------
// canvas setting
//-------------------------------------------------------
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');

//-------------------------------------------------------
//  mouse position
//-------------------------------------------------------
// var mouse position and intialize
var mousePos = { x: 0, y: 0 }
mousePos.x = window.clientX;
mousePos.y = window.clientY;

// set event listener to update mouse position
window.onmousemove = function (e) {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}

//-------------------------------------------------------
//  mouse click
//-------------------------------------------------------
var mouseClick = false;

canvas.addEventListener("mousedown",function (){mouseClick = true;});
canvas.addEventListener("mouseup",function (){mouseClick = false;});

//-------------------------------------------------------
//  keyboard click
//-------------------------------------------------------
var keyPress=false;
var keyCode;

canvas.addEventListener("keydown",function (e){keyPress=true;keyCode=e.keyCode});
canvas.addEventListener("keyup",function (e){keyPress=false;});