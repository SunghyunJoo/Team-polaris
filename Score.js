class Score {
  constructor() {
    this.p = 0;
  }

  draw() {
    noStroke();
    fill(255);
    textSize(20);
    text("score : " + this.p, 20, 40);
  }

  update() {

    this.p += 1;

  }

}