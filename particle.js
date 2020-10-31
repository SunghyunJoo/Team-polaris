class Particle {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.x1 = 0;
    this.y1 = 7;
    this.p = 255;
    this.c = color(random(255), random(255), random(255));
  }

  die() {
    return this.p < 0;
  }

  update() {
    this.x += this.x1;
    this.y += this.y1;
    this.p -= 10;
  }

  draw() {
    fill(this.c, this.p);
    stroke(this.c);
    ellipse(this.x, this.y, 7);
  }
}