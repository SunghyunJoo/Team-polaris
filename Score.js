// score.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// sunghyun.joo jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class Score {
  constructor() {
    this.p = 0;
  }

  draw() {
    fill(255);
    text("score : " + this.p, 20, 40);

  }

  update() {

    this.p += 1;

  }

}