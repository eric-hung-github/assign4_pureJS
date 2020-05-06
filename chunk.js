var soilLowImg=new Image;
soilLowImg.src="img/soils/soil0/soil0_0.png";


function Soil(posX,posY,life){
    function drawSoil(){
        ctx.drawImage(soilLowImg,posX,posY);
    }
}

var soils=[];

for (let i = 0; i < soils.length; i++) {
    for (let j = 0; j < soils[i].length; j++) {
        soils[i][j]=new Soil(i,j,50);
        
    }
}

