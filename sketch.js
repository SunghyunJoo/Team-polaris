let pimg;
let bimg;
let ebimg;
let particles = [];
var ebullets = [];
var players;
var p
var b
var bullets = [];
let enemies;
let lifes;
let scores;
var reset;
var levels;
function preload() {

  pimg = loadImage('image/A.png');
  bimg = loadImage('image/missile1.png');
  ebimg = loadImage('image/missile2.png');

     
}

function setup() {
  createCanvas(670, 570);
   
  p = new Player(width / 2 - 30, height * 9 / 10, 50, 50);
  //fill(random(255),random(255),random(255),random(255))
  enemies = new enemyArray();
  lifes = new Life();
  scores = new Score();
  levels = new Level();
}

function gameover() {
background(0)  
push()
textSize(30);
  textAlign(CENTER, CENTER)  
text("Game Over",335,285);
  pop()
  ebullets.length = 1;
//lifes.p = 'you die';
  
}

function draw() {
  
  background(0);
  if (lifes.p == 0) {


        gameover();
        console.log("You die !");

      }
  p.draw();
  p.update();
  enemies.update();
  enemies.display();
  scores.draw();
  lifes.draw();
  levels.draw();
  
  
  let p1 = new Particle();
  particles.push(p1);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].die()) {
      particles.splice(i, 1);
    }
  }
  
  
  
  if(enemies.allDead==true){
    
    levels.update();

    console.log("next level!");
    
    //enemies = new enemyArray();
    
    
    }
  

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
    bullets[i].move();
    if (enemies.collisionCheck(bullets[i].x, bullets[i].y)) {
      console.log("You destroyed the enemy ship !");
      bullets[i].evaporate();
      scores.update();
    }
    
    if(enemies.arr.length==0){
    
    levels.update();

    console.log("next level!");
    
    bullets.length =0;
    enemies = new enemyArray();
    
    
    }


  }

  for (let i = 0; i < enemies.arr.length; i++){
    if (random(0,1) == random(0.00000001)) {
      ebullets.push(new Ebullet(enemies.arr[i].pos.x, enemies.arr[i].pos.y));
    }
  
  
    
  
  }
  
  for (var g = 0; g < ebullets.length; g++) {
    ebullets[g].show();
    ebullets[g].update();


    if (ebullets[g].hits(p)) {
      console.log("You have been attacked by an enemy !");
      ebullets[g].evaporate();
      lifes.update();

      

    }


  }

  for (var x1 = ebullets.length - 1; x1 >= 0; x1--) {
    if (ebullets[x1].toDelete) {
      ebullets.splice(x1, 1);
    }
  }

  for (var x = bullets.length - 1; x >= 0; x--) {
    if (bullets[x].toDelete) {
      bullets.splice(x, 1);
    }
  }

}

function keyPressed() {
  if (key == 'Z'||key=='z') {
    var bullet1 = new Bullet(p.x + 25, height - 60);
    bullets.push(bullet1);
  }

}