var fairyImg,fairy;
var starImg,star;



function preload()
{
   //preload the images here
   fairyImg=loadAnimation("fairy.png","fairy1.png","fairy2.png")
}

function setup() {
	createCanvas(800, 750);
  fairy=createSprite(80,315,20,20);
  fairy.addAnimation("moving",fairyImg);
  fairy.scale=0.1;
}


function draw() {
  
  background("black");


   drawSprites();
}
