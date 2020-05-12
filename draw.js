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
var lifePoint;
const lifeSpace = 20, lifeSize = 50;

//-------------------------------------------------------
// intialize
//-------------------------------------------------------
function intialize() {
    lifePoint = 3;
    gameState = gameStatus.start;
    generateSoils();
    generateSoilder();
    generateCabbage();

    groundhogPosX = 4;
    groundhogPosY = 1;
}

//-------------------------------------------------------
// update a frame
//-------------------------------------------------------
function update() {
    switch (gameState) {
        case gameStatus.start:

            break;
        case gameStatus.run:
            updateSoldier();
            updateGroundhog();
            break;
        case gameStatus.win:

            break;
        case gameStatus.over:

            break;

        default:
            break;
    }
    //console.log(mouseClick);

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
            drawGameover();
            break;

        default:
            break;
    }

    // animateing
    window.requestAnimationFrame(draw);
}

// draw Start
function drawStaert() {
    ctx.drawImage(title, 0, 0);
    if (isHoverImg(startHovered, START_BUTTON_X, START_BUTTON_Y)) {
        ctx.drawImage(startHovered, START_BUTTON_X, START_BUTTON_Y);
        if (mouseClick) {
            // intialize game
            intialize();
            gameState = gameStatus.run;
        }
    } else {
        ctx.drawImage(startNormal, START_BUTTON_X, START_BUTTON_Y);
    }
}

function drawGameover() {
    ctx.drawImage(gameover, 0, 0);
    if (isHoverImg(restartHovered, START_BUTTON_X, START_BUTTON_Y)) {
        ctx.drawImage(restartHovered, START_BUTTON_X, START_BUTTON_Y);
        if (mouseClick) {
            // intialize game
            intialize();
            gameState = gameStatus.run;
        }
    } else {
        ctx.drawImage(restartNormal, START_BUTTON_X, START_BUTTON_Y);
    }
}

// draw Run
function drawRun() {
    ctx.drawImage(bg, 0, 0);

    let tran = groundhog.y - 3 * chunkSize;
    //console.log(tran)

    drawSun();
    drawSoil(tran);
    drawCabbage(tran);
    drawSolider(tran);
    drawLife();
    drawGroundhog();

}

//-------------------------------------------------------
// start animation
//-------------------------------------------------------
loadImages(imagesSrcStr, function () {

    // new vars of images after loaded
    variblize();

    // intialize game
    intialize();

    // draw canvas
    draw();

    // set timer to update all
    setInterval(update, frame);
});