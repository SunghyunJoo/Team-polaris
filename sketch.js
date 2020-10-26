let particles = [];
var ebullets = [];
var player;
var p
var b
var bullets = [];
let enemies;

function setup() {
  createCanvas(670, 570);
  p = new Player(width / 2 - 30, height * 9 / 10, 50, 50);
  enemies = new enemyArray();
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

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
    bullets[i].move();
  }

  for (let i = 0; i < enemies.arr.length; i++)
    if (random(1) < 0.005) {
      ebullets.push(new Ebullet(enemies.arr[i].pos.x, enemies.arr[i].pos.y));
    }
  print(ebullets);

  for (var g = 0; g < ebullets.length; g++) {
    ebullets[g].show();
    ebullets[g].update();

    //     if(ebullets[g].hits(player)){
    //       console.log("aaaaaa");

    //       }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    var bullet1 = new Bullet(p.x + 25, height - 60);
    bullets.push(bullet1);
  }

}

function mousePressed() {
  // enemies.destroyEnemy(0);
  ebullets.push(new Ebullet(enemies.arr[0].pos.x, enemies.arr[0].pos.y));
}