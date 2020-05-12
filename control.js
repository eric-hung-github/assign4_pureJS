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

canvas.addEventListener("mousedown", function () { mouseClick = true; });
canvas.addEventListener("mouseup", function () { mouseClick = false; });

//-------------------------------------------------------
//  keyboard click
//-------------------------------------------------------
var keyPress = false;
var keyCode;

canvas.addEventListener("keydown", function (e) {
    keyPress = true;
    keyCode = e.keyCode;
    if(groundhog.way != groundhogWay.idle){
        return;
    }
    switch (keyCode) {
        case 40:
            groundhog.way = groundhogWay.down;
            break;
        case 37:
            groundhog.way = groundhogWay.left;
            break;
        case 39:
            groundhog.way = groundhogWay.right;
            break;

        default:
            break;
    }

});
canvas.addEventListener("keyup", function (e) {
    keyPress = false;
});

canvas.addEventListener("keypress", function (e) { groundhogMove(e.key); });