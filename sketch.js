var bullet;
var wall;
var deformation;
var weight;
var speed;
var rand1;
var rand2;
var thickness;
var damage1;
var damage2;

function setup() {

  createCanvas(1600,400);

  bullet = createSprite(100, 200, 20, 10);

  wall = createSprite(750, 200, thickness, 400);
  
}

function draw() {
  background(255,255,255);  

  randomSystem();

  workSystem();

  drawSprites();
}

function randomSystem(){

    rand1 = Math.round(random(223, 321));
    rand2 = Math.round(random(30, 52));
    thickness = Math.round(random(22, 83));

}

function workSystem(){

      weight = rand1;

      speed = rand2;

      bullet.velocityX = speed;

      deformation = damage1/damage2;

      damage1 = 0.5 * weight * speed * speed;
      damage2 = thickness * thickness * thickness; 

      if(bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
        wall.x - bullet.x < wall.width/2 + bullet.width/2 &&
        bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
        wall.y - bullet.y < bullet.height/2 + wall.height/2){

      if(deformation >= 12.43){

          wall.shapeColor = "Red";

      }


       if(deformation < 12.43){

      wall.shapeColor = "Green";

       }
  
}


}