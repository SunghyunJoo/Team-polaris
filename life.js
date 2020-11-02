// life.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Life {
  constructor() {
    this.p = 3;
  }

  draw() {
    fill(255);
    noStroke();
    textSize(20);
    text("life : " + this.p, 20, 20);
  }

  update() {
    this.p -= 1;
  }
}