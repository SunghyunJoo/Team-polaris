// skectch.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// sunghyun.joo
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class upinter
  {
    constructor(allscore){
      this.allscore = allscore;
      this.highscore = 0;
    }
    
    draw(){
      push();
      textSize(16);
      textAlign(CENTER,CENTER);
      textStyle(ITALIC);
      fill(255,0,0);
      text("1UP", width/4, 10);
      text("HIGH SCORE", width/2, 10);
      fill(255,255,255);
      text(this.highscore, width/2, 20);
      text("대충 크레딧 변수 들어갈 자리", width/2, 560);
      pop();
    }
  }