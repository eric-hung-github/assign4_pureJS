//-------------------------------------------------------
//  const game setting
//-------------------------------------------------------
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');


var gameStatus = { start: 0, run: 1, win: 2, over: 3 };
var gameState;
// set a frame in ms
const frame = 1000 / 60;

const GRASS_HEIGHT = 15;
const START_BUTTON_X = 248;
const START_BUTTON_Y = 360;



// sun setting
const sunInnerSize = 120, sunOutterSize = 10;

// grass setiing
const grassHeight = 15;

// life setting
var lifePo;
const lifeSpace = 20, lifeSize = 50;

// groundhog setting
var groundhogPosX, groundhogPosY;
var groundhogMove;
var groundhogMoveX, groundhogMoveY;
const groundhogFrame = 16;
var groundhogFrameCount = 0;


// move canva
var nowLevel = 0;

//-------------------------------------------------------
// intialize
//-------------------------------------------------------
function intialize() {
    gameState = gameStatus.start;

    generateSoils();
}

//-------------------------------------------------------
// update a frame
//-------------------------------------------------------
function update() {
    //console.log(mouseClick);
}

function updateGroundhog(){

}

//-------------------------------------------------------
// moving
//-------------------------------------------------------
function isMove(){

}

//-------------------------------------------------------
// draw
//-------------------------------------------------------
function draw() {
    //clear before draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    switch (gameState) {
        case gameStatus.start:
            drawStaert();
            break;
        case gameStatus.run:
            drawRun();
            break;
        case gameStatus.win:

            break;
        case gameStatus.over:

            break;

        default:
            break;
    }

    // animateing
    window.requestAnimationFrame(draw);
}

// draw Start
function drawStaert(){
    ctx.drawImage(title, 0, 0);
    if (isHoverImg(startHovered, START_BUTTON_X,START_BUTTON_Y )) {
        ctx.drawImage(startHovered, START_BUTTON_X, START_BUTTON_Y);
        if(mouseClick){
            gameState=gameStatus.run;
        }
    }else{
        ctx.drawImage(startNormal, START_BUTTON_X, START_BUTTON_Y);
    }
}
var tt=0;
// draw Run
function drawRun(){
    ctx.drawImage(bg,0,0);

    drawSoil(tt+=2);
}

//-------------------------------------------------------
// start animation
//-------------------------------------------------------
var loader = loadImages(imagesSrcStr, function () {

    // new vars of images after loaded
    variblize();

    // intialize game
    intialize();

    // draw canvas
    draw();

    // set timer to update all
    setInterval(update, frame);
});

//draw();
// update a frame
//seterval(update,frame);