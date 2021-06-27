var path,pathImage;
var player,playerAnimation;
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,gameover,gameOverImage;
var lives = 3;
var gameState = "play";
var obstaclesGroup;
var player_stop;
var sound1,sound2;
function preload(){
pathImage = loadImage ("Images/images.png")
playerAnimation = loadAnimation("Images/runner-1.png"
,"Images/runner-2.png")
obstacle1= loadImage("Images/logobstacle.png")
obstacle2= loadImage("Images/leftfire.png")
obstacle3= loadImage("Images/obstacle.png")
obstacle4= loadImage("Images/rightfire.png")
obstacle5 = loadImage("Images/rightlog.png")
player_stop = loadAnimation("Images/runner-1.png")
gameOverImage = loadImage("Images/gameover.png")
sound1 = loadSound("Images/sound1.wav")
sound2 = loadSound("Images/sound2.wav")
}



function setup() {
  createCanvas(800,600);
  path = createSprite(400,250)
  path.addImage(pathImage)
  path.scale = 4;
  path.velocityY = 4;
  player = createSprite(400,500)
  player.addAnimation("running",playerAnimation);
  player.addAnimation("stopping",player_stop);
  player.scale =0.1;
 // player.velocityY = -2;
obstaclesGroup = new Group();

}

function draw() {
  background("white"); 
 
  textSize(30);
 fill ("red")
  text("lives:" + lives,680,50)

 

 if(gameState === "play"){
  if(path.y>600){
    path.y = path.height/2
  }
    if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 2.5;
   }
   if(keyDown(LEFT_ARROW)){
    player.x = player.x - 2.5;
   }
   spawnObstacles();
   if(player.isTouching(obstaclesGroup)){
    // playSound("")
   lives = lives-1;
   sound1.play();
  //obstaclesGroup.setVelocityYEach(0);
  // path.velocityY = 0;
  // player.changeAnimation("stopping",player_stop)
   obstaclesGroup.destroyEach();
   //obstaclesGroup.setLifetimeEach(-1);
   //gameState = "end";
   }
   
 }
 if(lives <1){
   gameState = "end";
 }
if(gameState === "end"){
 lives = 0;
 path.velocityY = 0;
 player.velocityY = 0;
 player.destroy();
 obstaclesGroup.destroyEach();
gameover = createSprite(400,300);
gameover.addImage(gameOverImage);
sound2.play(false);

}

  



  drawSprites();
}
function spawnObstacles(){
    if (frameCount % 150 === 0){
      var obstacle = createSprite(550,100,10,40);
      obstacle.x = Math.round(random(100,550))
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
        obstacle.scale = 0.5;
        obstacle.velocityY = 4;
        obstacle.x = 330;
                break;
        case 2: obstacle.addImage(obstacle2);
        obstacle.scale = 0.3;
        obstacle.velocityY = 4;
        obstacle.x = 330;
                break;
         case 3: obstacle.addImage(obstacle3);
         obstacle.x = 380;
         obstacle.scale = 1;
         obstacle.velocityY = 4;
         break;
         case 4: obstacle.addImage(obstacle4);
         obstacle.x = 330;
         obstacle.velocityY = 4;
         obstacle.scale = 0.3;
         break;
         case 5: obstacle.addImage(obstacle5);
         obstacle.x = 100;
         obstacle.velocityY = 4;
         obstacle.scale = 0.3;
         break;
 
                
                
}
obstacle.lifetime = 300;
player.depth = obstacle.depth + 2;
obstaclesGroup.add(obstacle);
}




}