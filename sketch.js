var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="green"
  fixedRect.debug=true
  movingRect =createSprite(400,200,50,50)
  movingRect.shapeColor="green"
  movingRect.debug=true
  fixedRect.velocityX=-5;
  movingRect.velocityX=5;
}

function draw() {
  background(255,255,255);  
 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    movingRect.velocityX=movingRect.velocityX*(-1);
  }

   
  drawSprites();
}