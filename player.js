const groundhogFrame = 16;
const moveDis = chunkSize / groundhogFrame;
var groundhogFrameCount = 0;
var groundhogWay = { idle: [0, 0], down: [0, 1], right: [1, 0], left: [-1, 0] };


var groundhog = {
    x: 4 * chunkSize,
    y: 1 * chunkSize,
    way: groundhogWay.idle,
    movementCounter: 0,

    move: function () {

        this.x += this.way[0] * moveDis;
        this.y += this.way[1] * moveDis;

        this.movementCounter--;
        if (this.movementCounter == 0) {
            this.way = groundhogWay.idle;
            return;
        }
    }
}

function updateGroundhog() {
    if (collapseWith(groundhog.x, groundhog.y, chunkSize, chunkSize)) {
        if (!lifeChange(-1)) {
            gameState=gameStatus.over;
        }
        groundhog.movementCounter=0;
        groundhog.way=groundhogWay.idle;
        groundhog.x= 4 * chunkSize;
        groundhog.y= 1 * chunkSize;
        soils[0][4].lp=15;
    }

    if (eatWith(groundhog.x, groundhog.y, chunkSize, chunkSize)) {
        lifeChange(1);
    }

    // get position for compute with soils' pos
    let posX = Math.floor(groundhog.x / chunkSize);
    let posY = Math.floor(groundhog.y / chunkSize) - 2;

    // win 
    if (groundhog.y == (allLevel * soilColorSpan + 1) * chunkSize) {
        //gameState = gameStatus.win;
        return;
    }

    // if is moving keep moving
    if (groundhog.movementCounter != 0) {
        groundhog.move();
        return;
    }



    // if moving 
    if (soils[posY + 1][posX].lp == 0) {
        groundhog.way = groundhogWay.down;
        groundhog.movementCounter = 16;
        groundhog.move();
        return;
    }

    if (groundhog.way != groundhogWay.idle) {
        if (moveable(posX, posY, groundhog.way)) {

            groundhog.movementCounter = 16;
            groundhog.move();
        } else if (!keyPress) {
            groundhog.way = groundhogWay.idle;
        } else if (digable(posX, posY, groundhog.way)) {
            soils[posY + groundhog.way[1]][posX + groundhog.way[0]].dig();
            //console.log(soils[posY + groundhog.way[1]][posX + groundhog.way[0]]);
        }
    }

}

function drawGroundhog() {
    ctx.save();
    if (groundhog.y > chunkSize * (allLevel - 1) * 4 + chunkSize) {
        ctx.translate(0, -chunkSize * (allLevel - 1) * 4);
    } else {
        ctx.translate(0, -groundhog.y + chunkSize);
    }


    switch (groundhog.way) {
        case groundhogWay.idle:
            ctx.drawImage(groundhogIdle, groundhog.x, groundhog.y);
            break;
        case groundhogWay.down:
            ctx.drawImage(groundhogDown, groundhog.x, groundhog.y);
            break;
        case groundhogWay.right:
            ctx.drawImage(groundhogRight, groundhog.x, groundhog.y);
            break;
        case groundhogWay.left:
            ctx.drawImage(groundhogLeft, groundhog.x, groundhog.y);
            break;
    }

    ctx.restore();
}

