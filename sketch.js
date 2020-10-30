let particles = [];
var ebullets = [];
var players;
var p
var b
var bullets = [];
let enemies;
let lifes;
function setup() {
  createCanvas(670, 570);
  p = new Player(width / 2 - 30, height * 9 / 10, 50, 50);
  enemies = new enemyArray();
  lifes = new Life();
}

function draw() {
  background(0);

  let p1 = new Particle();
  particles.push(p1);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].die()) {
      particles.splice(i, 2);
    }
  }
  
  p.draw();
  p.update();
  enemies.update();
  enemies.display();
  
  lifes.draw();
  
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
    bullets[i].move();
    for (let v = 0; v < enemies.arr.length; v++)
    {
      if (bullets[i].hits(enemies.arr[v])) {
 
        console.log("bbbb");
        bullets[i].evaporate();
      }
    }
    
    
  }

  for (let i = 0; i < enemies.arr.length; i++)
    if (random(5) < 0.005) {
      ebullets.push(new Ebullet(enemies.arr[i].pos.x, enemies.arr[i].pos.y));
    }
  
  //print(ebullets);

  for (var g = 0; g < ebullets.length; g++) {
    ebullets[g].show();
    ebullets[g].update();
    
//for (var j = 0; j < p.length; j++) {
      if (ebullets[g].hits(p)) {
        //players[j].grow();
        console.log("aaaa");
        
        lifes.update();
      }
    //}
  
}

  for (var x = bullets.length - 1; x >= 0; x--) {
    if (bullets[x].toDelete) {
      bullets.splice(x, 1);
    }
  }
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    var bullet1 = new Bullet(p.x + 25, height - 60);
    bullets.push(bullet1);
  }

}