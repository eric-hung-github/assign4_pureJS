const soldierSpeed = 2;

function Solider(y) {
    this.x = 0;
    this.y = y;
    this.speed = soldierSpeed;
}

var soldiers = [];

function generateSoilder() {
    for (let i = 0; i < allLevel; i++) {
        soldiers[i] = new Solider((Math.floor(Math.random() * soilColorSpan) + i * soilColorSpan) * chunkSize);
        soldiers[i].x = Math.floor(Math.random() * chunkColumn * chunkSize);
    }
}

function updateSoldier(){
    soldiers.forEach(sol => {
        sol.x+=sol.speed;
        if(sol.x>chunkSize*chunkColumn){
            sol.x=0-chunkSize;
        }
    });
}

function drawSolider(y){
    if(y>=(soilColorSpan*allLevel-6)*chunkSize){
        y=(soilColorSpan*allLevel-6)*chunkSize;
    }
    ctx.save();
    ctx.translate(0,-y);

    soldiers.forEach(sol => {
        ctx.drawImage(soldier, sol.x, sol.y);
    });
    ctx.restore();
}

function collapseWith(x,y,w,h){
    for(let i=0;i<allLevel;i++){
        if((x<soldiers[i].x+soldier.naturalWidth&&x+w>soldiers[i].x)&&(y<soldiers[i].y+soldier.naturalHeight+2*chunkSize&&y+h>soldiers[i].y+2*chunkSize)){
            return true;
        }
        
    }
}

//-------------------------------------------------------
// Life
//-------------------------------------------------------
function lifeChange(n){
    if(lifePoint<5||n<0){
        lifePoint+=n;
    }
    
    if(lifePoint<=0){
        return false;
    }
    return true;
}

function drawLife(){
    for (let i = 0; i < lifePoint; i++) {
        ctx.drawImage(life,10+i*(lifeSpace+lifeSize),10);
    }	
}

//-------------------------------------------------------
// cabbage
//-------------------------------------------------------

function Cabbage(y){
    this.eaten=false;
    this.y=y;
    this.x=0;
}

var cabbages = [];

function generateCabbage() {
    for (let i = 0; i < allLevel; i++) {
        cabbages[i] = new Cabbage((Math.floor(Math.random() * soilColorSpan) + i * soilColorSpan) * chunkSize);
        cabbages[i].x = Math.floor(Math.random() * chunkColumn )* chunkSize;
    }
}



function drawCabbage(y){
    if(y>=(soilColorSpan*allLevel-6)*chunkSize){
        y=(soilColorSpan*allLevel-6)*chunkSize;
    }
    ctx.save();
    ctx.translate(0,-y);

    cabbages.forEach(cab => {
        if(!cab.eaten){
            ctx.drawImage(cabbage, cab.x, cab.y);
        }
        
    });
    ctx.restore();
}

function eatWith(x,y,w,h){
    //console.log("eat");
    for(let i=0;i<allLevel;i++){
        if(cabbages[i].eaten){
            continue;
        }
        if((x<cabbages[i].x+cabbage.naturalWidth&&x+w>cabbages[i].x)&&(y<cabbages[i].y+cabbage.naturalHeight+2*chunkSize&&y+h>cabbages[i].y+2*chunkSize)){
            console.log("eat");
            cabbages[i].eaten=true;
            return true;
        }
        
    }
}

//-------------------------------------------------------
// sun
//-------------------------------------------------------
function drawSun(){
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,0)';
    ctx.arc(590, 50, 65, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(253,184,19)';
    ctx.arc(590, 50, 60, 0, 2 * Math.PI, false);
    ctx.fill();

}

