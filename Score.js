class Score 
{
  constructor()
  {
    this.highscore = 0;
    this.score = 0;
    this.fired = 0;
    this.allscore = 0;
    this.crash = 0;
    
  }
  draw(){
    if(this.highscore < this.allscore)
      {
        this.highscore = this.allscore;
      }
  } 
    
 addScore(score){
      this.allscore += score;
    }
  
  addFired(){
      this.fired += 1;
    }
  addCrash(){
    this.crash += 1;
  } 
}