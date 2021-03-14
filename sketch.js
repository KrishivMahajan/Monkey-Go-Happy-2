var score,monkey,obstacleGroup,bananaGroup,banana,obstacle,monkey_running,stone,banana1,jungle,bg;

function preload(){

    monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  stone=loadImage("stone.png");
  
  banana1 =loadImage("banana.png");
  
  jungle=loadImage("jungle.jpg")
}


function setup() {
  createCanvas(400, 400);
 
  bg=createSprite(200,200);
  bg.addImage(jungle);
  bg.velocityX=-3;
  
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,370,1600,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  ground.visible=false;
    
  score=0;
  
  obstacleGroup=new Group(); 
  bananaGroup=new Group();
}

function draw() {
  background(255);
  
  monkey.collide(ground);
  
  ground.x=ground.width/2;
  
  if(bg.x<100){
  bg.x=bg.width/2;
  }
  
   if(keyDown("space") && monkey.y >= 300){
      monkey.velocityY=-10;
    }
    monkey.velocityY=monkey.velocityY+0.3;
  
  if(monkey.isTouching(bananaGroup)){
   bananaGroup.destroyEach();
   score=score+2;
   
   switch(score){
     case 10: monkey.scale=0.12;
     break;
     case 20:monkey.scale=0.14;
     break;
     case 30:monkey.scale=0.16;
     break;
     case 40:monkey.scale=0.18;
     break;
     default:break;
   }
 }
 
 if(monkey.isTouching(obstacleGroup)){
   monkey.scale=0.1;
   score=0;
   obstacleGroup.destroyEach();
   bananaGroup.destroyEach();
 }
  
  drawSprites();
  
   fill("white");
   textSize(25);
   text("Score:"+score,250,100);
  
  spawnbananas();
  spawnobstacles();
}

function spawnobstacles(){
if(World.frameCount%200===0){
 obstacles= createSprite(400,360,10,10);
  obstacles.scale=0.1;
  obstacles.addImage(stone);
  obstacles.velocityX=-4;
  obstacles.Lifetime=100;
  obstacleGroup.add(obstacles);
}
  }

function spawnbananas(){
  if(World.frameCount%80===0){
   banana=createSprite(340,400,10,10);
   banana.addImage(banana1);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.y=random(120,200);
    banana.lifetime=100;
 bananaGroup.add(banana);
  }
}
