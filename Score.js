
class Score 
{
  constructor()
  {
    var highscore = 0;
    var score = 0;
    var fired = 0;
    var allscore = 0;
    var crash = 0;
    
  }
  
  update(){
    
  }
  
  draw(){
    if(highscore < allscore)
      {
        highscore = allscore;
      }
  }
    
 addScore(score){
      allscore += score;
    }
  
  addFired(){
      fired += 1;
    }
  addCrash(){
    crash += 1;
  }
 
  

}