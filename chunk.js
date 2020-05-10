// soil setting
const soilColorSpan = 4;
const allLevel = 6;
// chunk
const chunkSize = 80;
const chunkColumn = soilColorSpan * allLevel;
const chunkRow = canvas.width / chunkSize;


const soilType = {
    none: 0, onlySoil: 3, oneStone: 6, doubleStone: 9
}

function Soil(x, y, lv, type) {
    this.x = x;
    this.y = y;
    this.level = lv;
    this.type = type;
    this.lp = this.type * 5;
}

var soils = [[]];

//-------------------------------------------------------
// draw soils
//-------------------------------------------------------
function drawSoil(y) {

    ctx.save();
    ctx.translate(0,-y);
    for (let i = 0; i < chunkColumn; i++) {
        for (let j = 0; j < chunkRow; j++) {
            let lv=soils[i][j].level;
            let lp=soils[i][j].lp / soils[i][j].type-1;
            //console.log("img/soils/soil" + lv + "/soil" + lv + "_" + lp + ".png");
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
    for (let i = 0; i < chunkColumn; i++) {
        soils[i] = [];

        for (let j = 0; j < chunkRow; j++) {
            //soils[i][j]=new Soil(i,j,Math.floor(i/soilColorSpan));

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
}