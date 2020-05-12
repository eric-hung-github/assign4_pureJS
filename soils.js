// soil setting
const soilColorSpan = 4;
const allLevel = 6;
// chunk
const chunkSize = 80;
const chunkColumn = canvas.width / chunkSize;
const chunkRow = soilColorSpan * allLevel;


const soilType = {
    none: 0, onlySoil: 3, oneStone: 6, doubleStone: 9
}

function Soil(x, y, lv, type) {
    this.x = x;
    this.y = y;
    this.level = lv;
    this.type = type;
    this.lp = this.type * 5;
    this.dig=function(){
        this.lp--;
    }
}

var soils = [[]];

//-------------------------------------------------------
// is there have soils
//-------------------------------------------------------
function moveable(posx,posy,dir){
    //console.log(posx+dir[0],posy+dir[1])
    if(posy+dir[1]==-1&&posx+dir[0]>=0&&posx+dir[0]<chunkColumn){
        return true;
    }
    if(posx+dir[0]>0&&posx+dir[0]<chunkColumn&&posy+dir[1]>=0&&posy+dir[1]<=chunkRow){
        if(soils[posy+dir[1]][posx+dir[0]].lp<=0){
            return true;
        }
    }else{
        return false;
    }
}

function digable(posx,posy,dir){
    //console.log(posx+dir[0],posy+dir[1])
    if(posy+dir[1]==-1&&posx+dir[0]>=0&&posx+dir[0]<chunkColumn){
        return false;
    }
    if(posx+dir[0]>=0&&posx+dir[0]<chunkColumn&&posy+dir[1]>=0&&posy+dir[1]<chunkRow){
        return true;
        if(soils[posx+dir[0]][posy+dir[1]].lp=0){
            
        }
    }else{
        return false;
    }
}

//-------------------------------------------------------
// draw soils
//-------------------------------------------------------
function drawSoil(y) {
    if(y>=(soilColorSpan*allLevel-6)*chunkSize){
        y=(soilColorSpan*allLevel-6)*chunkSize;
    }
    ctx.save();
    ctx.translate(0,-y);

    
    ctx.fillStyle ="rgba(124, 204, 25)";
    ctx.fillRect(0,  - GRASS_HEIGHT, chunkColumn*chunkSize, GRASS_HEIGHT);

    for (let i = 0; i < chunkRow; i++) {
        for (let j = 0; j < chunkColumn; j++) {
            let lv=soils[i][j].level;
            let  lp=Math.floor((soils[i][j].lp-1) / soils[i][j].type);
            if(soils[i][j].lp<=0){
                ctx.drawImage(images["img/soils/soilEmpty.png"], j * chunkSize, i * chunkSize);
                continue;
            }

            ctx.drawImage(images["img/soils/soil" + lv + "/soil" + lv + "_" + lp + ".png"], j * chunkSize, i * chunkSize);
            if(soils[i][j].type>=soilType.oneStone){
                ctx.drawImage(images["img/stones/stone0/stone0_" + lp + ".png"], j * chunkSize, i * chunkSize);
            }
            if(soils[i][j].type>=soilType.doubleStone){
                ctx.drawImage(images["img/stones/stone1/stone1_" + lp + ".png"], j * chunkSize, i * chunkSize);
            }
        }
    }
    ctx.restore();
}

//-------------------------------------------------------
// intialize soils
//-------------------------------------------------------
function generateSoils() {
    for (let i = 0; i < chunkRow; i++) {
        soils[i] = [];

        for (let j = 0; j < chunkColumn; j++) {

            switch (Math.floor(i / soilColorSpan)) {
                case 0:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);
                    if (i == j) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    break;
                case 1:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);
                    if (i == j) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    break;
                case 2:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);

                    if ((i % 4 == 1 || i % 4 == 2) && (j % 4 == 1 || j % 4 == 2)) { break; }
                    if (i % 4 == 1 || i % 4 == 2) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    if (j % 4 == 1 || j % 4 == 2) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    break;
                case 3:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);
                    if ((i % 4 == 1 || i % 4 == 2) && (j % 4 == 1 || j % 4 == 2)) { break; }
                    if (i % 4 == 1 || i % 4 == 2) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    if (j % 4 == 1 || j % 4 == 2) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    break;
                case 4:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);
                    if (i % 8 + j % 8 == 1 || i % 8 + j % 8 == 4 || i % 8 + j % 8 == 7 || i % 8 + j % 8 == 10 || i % 8 + j % 8 == 13) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    if (i % 8 + j % 8 == 2 || i % 8 + j % 8 == 5 || i % 8 + j % 8 == 8 || i % 8 + j % 8 == 11 || i % 8 + j % 8 == 14) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.doubleStone);
                    }
                    break;
                case 5:
                    soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.onlySoil);
                    if (i % 8 + j % 8 == 1 || i % 8 + j % 8 == 4 || i % 8 + j % 8 == 7 || i % 8 + j % 8 == 10 || i % 8 + j % 8 == 13) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                    }
                    if (i % 8 + j % 8 == 2 || i % 8 + j % 8 == 5 || i % 8 + j % 8 == 8 || i % 8 + j % 8 == 11 || i % 8 + j % 8 == 14) {
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.oneStone);
                        soils[i][j] = new Soil(i, j, Math.floor(i / soilColorSpan), soilType.doubleStone);
                    }
                    break;

            }
        }
    }

    randomEmpty();
}

function randomEmpty(){
    for(let i=1;i<allLevel;i++){
        
        soils[Math.floor(Math.random()*soilColorSpan)+i*soilColorSpan][Math.floor(Math.random()*chunkColumn)].lp=0;
        soils[Math.floor(Math.random()*soilColorSpan)+i*soilColorSpan][Math.floor(Math.random()*chunkColumn)].lp=0;
    }
}