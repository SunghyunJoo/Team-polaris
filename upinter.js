class upinter
  {
    constructor(allscore,highscore){
      this.allscore = allscore;
      this.highscore = highscore;
    }
    
    draw(){
      textSize(16);
      textAlign(CENTER);
      textStyle(ITALIC);
      fill(255,0,0);
      text("1UP", 30, 10);
      text("HIGH SCORE", 100, 10);
      fill(255,255,255);
      text(this.highscore, 100, 20);
      text("대충 크레딧 변수 들어갈 자리", 10, 560);
      
    }
    
  }