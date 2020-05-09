
var imagesSrcStr = [
    "img/bg.jpg",
    "img/cabbage.png",
    "img/title.jpg",
    "img/gameover.jpg",
    "img/startNormal.png",
    "img/startHovered.png",
    "img/restartNormal.png",
    "img/restartHovered.png",
    "img/groundhogDown.png",
    "img/groundhogIdle.png",
    "img/groundhogLeft.png",
    "img/groundhogRight.png",
    "img/soldier.png",
    "img/life.png",
    "img/soil0.png",
    "img/soil1.png",
    "img/soil2.png",
    "img/soil3.png",
    "img/soil4.png",
    "img/soil5.png",
    "img/stone1.png",
    "img/stone2.png",
    "img/soils/soilEmpty.png",
    "img/soils/soil0/soil0_0.png",
    "img/soils/soil0/soil0_1.png",
    "img/soils/soil0/soil0_2.png",
    "img/soils/soil0/soil0_3.png",
    "img/soils/soil0/soil0_4.png",
    "img/soils/soil1/soil1_0.png",
    "img/soils/soil1/soil1_1.png",
    "img/soils/soil1/soil1_2.png",
    "img/soils/soil1/soil1_3.png",
    "img/soils/soil1/soil1_4.png",
    "img/soils/soil2/soil2_0.png",
    "img/soils/soil2/soil2_1.png",
    "img/soils/soil2/soil2_2.png",
    "img/soils/soil2/soil2_3.png",
    "img/soils/soil2/soil2_4.png",
    "img/soils/soil3/soil3_0.png",
    "img/soils/soil3/soil3_1.png",
    "img/soils/soil3/soil3_2.png",
    "img/soils/soil3/soil3_3.png",
    "img/soils/soil3/soil3_4.png",
    "img/soils/soil4/soil4_0.png",
    "img/soils/soil4/soil4_1.png",
    "img/soils/soil4/soil4_2.png",
    "img/soils/soil4/soil4_3.png",
    "img/soils/soil4/soil4_4.png",
    "img/soils/soil5/soil5_0.png",
    "img/soils/soil5/soil5_1.png",
    "img/soils/soil5/soil5_2.png",
    "img/soils/soil5/soil5_3.png",
    "img/soils/soil5/soil5_4.png",
    "img/stones/stone0/stone0_0.png",
    "img/stones/stone0/stone0_1.png",
    "img/stones/stone0/stone0_2.png",
    "img/stones/stone0/stone0_3.png",
    "img/stones/stone0/stone0_4.png",
    "img/stones/stone1/stone1_0.png",
    "img/stones/stone1/stone1_1.png",
    "img/stones/stone1/stone1_2.png",
    "img/stones/stone1/stone1_3.png",
    "img/stones/stone1/stone1_4.png"
]


//-------------------------------------------------------
//  preloading images
//-------------------------------------------------------
function loadImages(arr, callback) {
    this.images = {};
    var loadedImageCount = 0;

    // Make sure arr is actually an array and any other error checking
    for (var i = 0; i < arr.length; i++) {
        var img = new Image();
        img.onload = imageLoaded;
        img.src = arr[i];
        this.images[arr[i]] = img;
    }

    function imageLoaded(e) {
        loadedImageCount++;
        //console.log("loaded"+this.src];
        if (loadedImageCount >= arr.length) {
            console.log("all loaded");
            callback();
        }
    }
}


//-------------------------------------------------------
//  variblize Images
//-------------------------------------------------------
function variblize() {
    // load Images
    bg = images["img/bg.jpg"];
    title = images["img/title.jpg"];
    gameover = images["img/gameover.jpg"];
    startNormal = images["img/startNormal.png"];
    startHovered = images["img/startHovered.png"];
    restartNormal = images["img/restartNormal.png"];
    restartHovered = images["img/restartHovered.png"];
    groundhogIdle = images["img/groundhogIdle.png"];
    groundhogLeft = images["img/groundhogLeft.png"];
    groundhogRight = images["img/groundhogRight.png"];
    groundhogDown = images["img/groundhogDown.png"];
    life = images["img/life.png"];
    soldier = images["img/soldier.png"];
    cabbage = images["img/cabbage.png"];

    soilEmpty = images["img/soils/soilEmpty.png"];

    // Load soil images used in assign3 if you don't plan to finish requirement #6
    soil0 = images["img/soil0.png"];
    soil1 = images["img/soil1.png"];
    soil2 = images["img/soil2.png"];
    soil3 = images["img/soil3.png"];
    soil4 = images["img/soil4.png"];
    soil5 = images["img/soil5.png"];
}

// var Images
var title, gameover, startNormal, startHovered, restartNormal, restartHovered;
var groundhogIdle, groundhogLeft, groundhogRight, groundhogDown;
var bg, life, cabbage, stone1, stone2, soilEmpty;
var soldier;
var soil0, soil1, soil2, soil3, soil4, soil5;

var soils, stones;





/*preLoading
img/bg.jpg",
"img/cabbage.png",
"img/title.jpg",
"img/gameover.jpg",
"img/startNormal.png",
"img/startHovered.png",
"img/restartNormal.png",
"img/restartHovered.png",
"img/groundhogDown.png",
"img/groundhogIdle.png",
"img/groundhogLeft.png",
"img/groundhogRight.png",
"img/soldier.png",
"img/life.png",
"img/soil0.png",
"img/soil1.png",
"img/soil2.png",
"img/soil3.png",
"img/soil4.png",
"img/soil5.png",
"img/stone1.png",
"img/stone2.png",
"img/soils/soilEmpty.png",
"img/soils/soil0/soil0_0.png",
"img/soils/soil0/soil0_1.png",
"img/soils/soil0/soil0_2.png",
"img/soils/soil0/soil0_3.png",
"img/soils/soil0/soil0_4.png",
"img/soils/soil1/soil1_0.png",
"img/soils/soil1/soil1_1.png",
"img/soils/soil1/soil1_2.png",
"img/soils/soil1/soil1_3.png",
"img/soils/soil1/soil1_4.png",
"img/soils/soil2/soil2_0.png",
"img/soils/soil2/soil2_1.png",
"img/soils/soil2/soil2_2.png",
"img/soils/soil2/soil2_3.png",
"img/soils/soil2/soil2_4.png",
"img/soils/soil3/soil3_0.png",
"img/soils/soil3/soil3_1.png",
"img/soils/soil3/soil3_2.png",
"img/soils/soil3/soil3_3.png",
"img/soils/soil3/soil3_4.png",
"img/soils/soil4/soil4_0.png",
"img/soils/soil4/soil4_1.png",
"img/soils/soil4/soil4_2.png",
"img/soils/soil4/soil4_3.png",
"img/soils/soil4/soil4_4.png",
"img/soils/soil5/soil5_0.png",
"img/soils/soil5/soil5_1.png",
"img/soils/soil5/soil5_2.png",
"img/soils/soil5/soil5_3.png",
"img/soils/soil5/soil5_4.png",
"img/stones/stone0/stone0_0.png",
"img/stones/stone0/stone0_1.png",
"img/stones/stone0/stone0_2.png",
"img/stones/stone0/stone0_3.png",
"img/stones/stone0/stone0_4.png",
"img/stones/stone1/stone1_0.png",
"img/stones/stone1/stone1_1.png",
"img/stones/stone1/stone1_2.png",
"img/stones/stone1/stone1_3.png",
"img/stones/stone1/stone1_4.png""
*/
