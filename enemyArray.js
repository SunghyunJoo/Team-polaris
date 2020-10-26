class enemyArray {
  constructor() {
    this.arr = [];
    this.presetPos = [
      createVector(310, 100),
      createVector(360, 100),
      createVector(310, 150),
      createVector(360, 150),

      createVector(310, 200),
      createVector(360, 200),
      createVector(310, 250),
      createVector(360, 250),

      createVector(260, 50),
      createVector(260, 100),
      createVector(310, 50),
      createVector(410, 100),
      createVector(360, 50),
      createVector(260, 150),
      createVector(410, 50),
      createVector(410, 150),

      createVector(460, 100),
      createVector(160, 100),
      createVector(510, 100),
      createVector(210, 100),
      createVector(460, 150),
      createVector(160, 150),
      createVector(510, 150),
      createVector(210, 150),

      createVector(410, 200),
      createVector(210, 200),
      createVector(460, 200),
      createVector(260, 200),
      createVector(410, 250),
      createVector(210, 250),
      createVector(460, 250),
      createVector(260, 250),

      createVector(510, 200),
      createVector(110, 200),
      createVector(560, 200),
      createVector(160, 200),
      createVector(510, 250),
      createVector(110, 250),
      createVector(560, 250),
      createVector(160, 250)
    ];
    this.iterator = 0;
    this.spacingInFormation =150;

    this.createFormation(width/2-50,0,1000);
    this.createFormation(height/2+50,0,1000);
    this.createFormation(0,height-100,3000);
    this.createFormation(0,height-100,3000+this.spacingInFormation*4);
    this.createFormation(width,height-100,6600);
    this.createFormation(width,height-100,6600+this.spacingInFormation*4);
    this.createFormation(width/2,0,10200);
    this.createFormation(width/2,0,10200+this.spacingInFormation*4);
    this.createFormation(width/2,0,13800);
    this.createFormation(width/2,0,13800+this.spacingInFormation*4);
    
  }
  update() {
    for (let a of this.arr)
      a.update();
  }
  display() {
    for (let a of this.arr)
      a.display();
    // for (let a of this.presetPos)
    // ellipse(a.x, a.y, 20, 20);
  }
  createEnemy(x, y, tx, ty) {
    this.arr.push(new enemy(x, y, tx, ty));
  }
  createFormation(sx,sy,delay) {
    for (let i = 0; i < 4; i++) {
      let x = this.presetPos[this.iterator].x;
      let y = this.presetPos[this.iterator].y;
      setTimeout(() => {
        this.createEnemy(sx, sy, x,y);
      }, i*this.spacingInFormation+delay);
      this.iterator++;
    }
  }
  collisionCheck(x,y) {
    let bool = false;
    for(let i=0;i<this.arr.length;i++)
      if(arr[i].pos.x-5<x&&arr[i].pos.x+5>x)
        if(arr[i].pos.y-5<y&&arr[i].pos.y+5>y) {
            bool = true;
            this.destroyEnemy(i);
            break;
        }
    return bool;
  }
  destroyEnemy(index) {
    this.arr.splice(index, 1);
  }
}