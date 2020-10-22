var r1,r2,r3,r4,r5,r6;


function setup() {

  createCanvas(800,400);
  r1=createSprite(200,150,30,40);
  r2=createSprite(300,100,30,40);
  r3=createSprite(300,350,30,40);
  r4=createSprite(200,200,30,40);
  r5=createSprite(200,390,30,40);
  r6=createSprite(200,350,30,40);
  r1.shapeColor="blue";
  r2.shapeColor="purple";
  r2.velocityY=3;
  r3.velocityY=-3;

}

function draw() {
  background(255,255,255);  
  r1.x=mouseX;
  r1.y=mouseY;
bounce(r2,r3);
isTouching(r4,r5);
    
  drawSprites();
}








































