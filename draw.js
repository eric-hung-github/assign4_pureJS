//-------------------------------------------------------
//  const game setting
//-------------------------------------------------------

// set a frame in ms
const frame=1000/60;

//-------------------------------------------------------
// canvas setting
//-------------------------------------------------------
var canvas = document.getElementById("pde");
var ctx = canvas.getContext('2d');


//-------------------------------------------------------
// img loadding
//-------------------------------------------------------
//preLoadImages();
//checkPreloadImg();





//-------------------------------------------------------
// update a frame
//-------------------------------------------------------
function update(){
    
}

//-------------------------------------------------------
// draw
//-------------------------------------------------------
function draw() {
    // draw background
    ctx.drawImage(bg,0,0);


    window.requestAnimationFrame(draw);
}

//-------------------------------------------------------
// start animation
//-------------------------------------------------------
var loader=loadImages(imagesSrcStr,function(){
    variblize();
    draw();
    setInterval(update,frame);
});
// draw canvas
//draw();
// update a frame
//setInterval(update,frame);