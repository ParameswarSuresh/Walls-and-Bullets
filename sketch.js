var wall, thickness;
var  bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55, 90);
  weight=random(400, 1500);
  thickness=random(22, 83);
  
  bullet=createSprite(50, 200, 70, 5);
  bullet.velocityX = speed;
 
  wall=createSprite(1500, 200, thickness, height/2); 

 
  
}

function draw() {
  background("black"); 
  bullet.shapeColor="white";
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    wall.shapeColor=color(80, 80, 80);
var damage=0.5* weight * speed* speed/(thickness *thickness *thickness)
    if(damage > 10){
      wall.shapeColor="red";
    }
    if(damage < 10){
      wall.shapeColor="green";
    }
  }
  
  
  drawSprites();
}
function collide(bullet, wall){
if(bullet.x-wall.x<wall.width/2+bullet.width/2
  &&wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=bullet.velocityX=0
    wall.velocityX=wall.velocityX=0
      }
  if(bullet.y-wall.y<wall.width/2+bullet.width/2
  &&wall.y-bullet.y<bullet.width/2+wall.width/2){
    bullet.velocityY=bullet.velocityY=0
    wall.velocityY=wall.velocityY=0
      }
}