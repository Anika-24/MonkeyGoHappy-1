
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup,obstacleGroup;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
    obstacleGroup = createGroup();
    foodGroup = createGroup();

 
}



function setup() {
  createCanvas(800,400);
  text("Survival Time: "+ survivalTime, 300,20);
  
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
     
  ground=createSprite(400,350,900,10);
  ground.velocityX=-5
  ground.x=ground.width/2;
  console.log(ground.x);


  
}


function draw() {
  background(255);
   
  spawnBananas();
  spawnObstacles();
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  if(ground.x<0){
    
    ground.x=ground.width/2 
  }
  score = score + Math.round(getFrameRate()/30);
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);

  drawSprites();
  text("Score:"+score,300,50);

}

function spawnBananas() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}

function spawnBananas() {
  //write code here to spawn the bananas
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}
function spawnObstacles() {
  //write code here to spawn the bananas
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(800,300,10,40);
   // obstacle.x = Math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime =300;
    
    ////adjust the depth
   // obstacle.depth = obstacle.depth;
   // monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    obstacleGroup.add(obstacle);
  }
}







