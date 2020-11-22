var player, player_running, player_collided

var ground, invisGround

var bg, backgroundImage

var enemy, enemyGroup

var gameState = "play"

var laserImage

function preload(){
player_running = loadAnimation("player1.png", "player2.png")
player_collided = loadImage("deadChar.png")
backgroundImage = loadImage("background.jpg")
enemyAnimation = loadAnimation("enemy1.png", "enemy2.png", "enemy3.png", "enemy4.png", "enemy5.png", "enemy6.png")
laserImage = loadImage("laser.png");

}

function setup() {
createCanvas(400, 400);

bg = createSprite(0, 55, 400, 400);
bg.addImage(backgroundImage);
bg.scale = 1.4
  
player = createSprite(100, 391, 200, 200);
player.addAnimation("running", player_running);
player.scale = 0.7;
  
invisGround = createSprite(400, 392, 400, 10);
invisGround.x = bg.x
invisGround.visible = false
//player.debug = false

enemyGroup = createGroup();
bg.velocityX = -4;
laserGroup = createGroup();
}

function draw() {
    
    player.collide(invisGround)
    if (bg.x < 0){
        bg.x = bg.width/2;
      }
      if(keyDown("space")&& player.y >= 315) {
        player.velocityY = -12;
             
    }
    if(keyDown("left_arrow")) {
      createLaser();
           
  }
  if(keyDown("right_arrow")) {
    laserGroup.destroyEach();
         
}

    player.velocityY = player.velocityY + 0.8;

background(0)

 drawSprites();
}

function createLaser() {
  var Laser = createSprite(200, 200, 60, 10);
  Laser.addImage(laserImage);
  Laser.x = 140;
  Laser.y = player.y;
  Laser.velocityX = 12;
  Laser.lifetime = 100;
  Laser.scale = 0.1;
  laserGroup.add(Laser);


}