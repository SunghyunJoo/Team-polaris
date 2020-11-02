// enemyArray.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// sunwoo.won
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class enemyArray {
  constructor() {
    this.arr = [];
    this.deathCount = 0;
    ST.play();


    this.ellapsed = deltaTime;
    this.animationFrameTime = 750;
    this.formStep = 0;
    this.xOffSet = -30;
    this.stepSize = 10;
    this.stepAmount = 12;
    this.hoverScalar = 0;

    this.updateXOffSet = this.updateSpawnOffSet;

    this.blinkTime = deltaTime;
    this.blinkState = false;

    this.rotationSpeed = 5;
    this.presetPos = [{
        tx: 310,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 360,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 310,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 360,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'goei',
      },

      {
        tx: 310,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(270),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 360,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(270),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 310,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(270),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 360,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(270),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },

      {
        tx: 260,
        ty: 50,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'boss',
      },
      {
        tx: 260,
        ty: 100,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 310,
        ty: 50,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'boss',
      },
      {
        tx: 410,
        ty: 100,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 360,
        ty: 50,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'boss',
      },
      {
        tx: 260,
        ty: 150,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 410,
        ty: 50,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'boss',
      },
      {
        tx: 410,
        ty: 150,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(360),
        exit: radians(0),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },

      {
        tx: 460,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 160,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 510,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 210,
        ty: 100,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 460,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 160,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 510,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },
      {
        tx: 210,
        ty: 150,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(180),
        exit: radians(540),
        rotate: radians(this.rotationSpeed),
        invertedEntry: true,
        hoverStateXOffSet: 0,
        type: 'goei',
      },

      {
        tx: 410,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 210,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 460,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 260,
        ty: 200,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 410,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 210,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 460,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 260,
        ty: 250,
        cx: width / 2 - 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(-360),
        rotate: radians(-this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },

      {
        tx: 510,
        ty: 200,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 110,
        ty: 200,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 560,
        ty: 200,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 160,
        ty: 200,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 510,
        ty: 250,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 110,
        ty: 250,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 560,
        ty: 250,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
      {
        tx: 160,
        ty: 250,
        cx: width / 2 + 220,
        cy: 300,
        entry: radians(-90),
        exit: radians(180),
        rotate: radians(this.rotationSpeed),
        invertedEntry: false,
        hoverStateXOffSet: 0,
        type: 'jako',
      },
    ];
    for (let a of this.presetPos) {
      a.hoverStateXOffSet = (a.tx - width / 2) / 30;
    }

    this.iterator = 0;
    this.spacingInFormation = 150;

    this.createFormation(width / 2 - 50, 0, 1000);
    this.createFormation(height / 2 + 50, 0, 1000);
    this.createFormation(0, height - 100, 3000);
    this.createFormation(0, height - 100, 3000 + this.spacingInFormation * 4);
    this.createFormation(width, height - 100, 6600);
    this.createFormation(width, height - 100, 6600 + this.spacingInFormation * 4);
    this.createFormation(width / 2, 0, 10200);
    this.createFormation(width / 2, 0, 10200 + this.spacingInFormation * 4);
    this.createFormation(width / 2, 0, 13800);
    this.createFormation(width / 2, 0, 13800 + this.spacingInFormation * 4);

  }
  update() {
    if (this.presetPos.length == this.arr.length) {
      if (this.arr[this.presetPos.length - 1].state == 'hovering' && this.arr[this.presetPos.length - 1].xOffSet == 0) {
        this.updateXOffSet = this.updateHoverOffSet;
        this.formStep = 0;
      }
    }

    this.updateXOffSet();
    this.updateBlinkAni();

    for (let a of this.arr)
      a.update();

    for (let a of this.arr)
      if (a.state == 'spawning' || a.state == 'attacking') {
        if (random(1) < 0.005) {
          a.shoot();
        }
      }

    if (random(1) < 0.0005) {
      let j = floor(random(40));
      this.arr[j].state = 'attacking';
    }
  }
  display() {
    for (let a of this.arr)
      a.display();
  }
  createEnemy(x, y, tx, ty, cx, cy, entry, exit, rotate, invert, itr, type) {
    this.arr[itr] = new enemy(x, y, tx, ty, cx, cy, entry, exit, rotate, invert, false, type);
  }
  createFormation(sx, sy, delay) {
    for (let i = 0; i < 4; i++) {
      let tx = this.presetPos[this.iterator].tx;
      let ty = this.presetPos[this.iterator].ty;
      let cx = this.presetPos[this.iterator].cx;
      let cy = this.presetPos[this.iterator].cy;
      let entry = this.presetPos[this.iterator].entry;
      let exit = this.presetPos[this.iterator].exit;
      let rotate = this.presetPos[this.iterator].rotate;
      let invert = this.presetPos[this.iterator].invertedEntry;
      let xOffSet = this.xOffSet;
      let itr = this.iterator;
      let type = this.presetPos[this.iterator].type;

      this.arr[this.iterator] = new enemy(-100, -100, -100, -100, -100, -100, 0, 0, 0, 0, true, type);
      setTimeout(() => {
        this.createEnemy(sx, sy, tx + xOffSet, ty, cx, cy, entry, exit, rotate, invert, itr, type);
      }, i * this.spacingInFormation + delay);
      this.iterator++;
    }
  }
  collisionCheck(x, y) {
    let bool = false;
    let bulletHitRange = 20;
    for (let i = 0; i < this.arr.length; i++) {
      if (!this.arr[i].isDead) {
        let v = dist(x, y, this.arr[i].finalPos.x, this.arr[i].finalPos.y);
        if (v < bulletHitRange) {
          bool = true;
          this.destroyEnemy(i);
          break;
        }
      }
    }
    return bool;
  }
  destroyEnemy(index) {
    this.arr[index].isDead = true;
    this.arr[index].changePos(-100, -100);
    this.deathCount++;
  }
  updateSpawnOffSet() {
    this.ellapsed += deltaTime;
    if (this.ellapsed > this.animationFrameTime) {
      if (this.formStep < this.stepAmount / 2) {
        this.xOffSet += this.stepSize;
      } else {
        this.xOffSet -= this.stepSize;
      }
      this.formStep = (this.formStep + 1) % this.stepAmount;
      this.ellapsed = 0;
      for (let a of this.arr)
        a.xOffSet = this.xOffSet;
    }
  }
  updateHoverOffSet() {
    this.ellapsed += deltaTime;
    if (this.ellapsed > this.animationFrameTime) {
      for (let a = 0; a < this.arr.length; a++) {
        let hoverOffSet = this.presetPos[a].hoverStateXOffSet * this.hoverScalar;
        // print(this.hoverScalar);
        this.arr[a].xOffSet = hoverOffSet;
      }
      if (this.formStep < this.stepAmount / 2) {
        this.hoverScalar++;
      } else {
        this.hoverScalar--;
      }
      this.formStep = (this.formStep + 1) % this.stepAmount;
      this.ellapsed = 0;
    }
  }
  updateBlinkAni() {
    this.blinkTime += deltaTime;
    if (this.blinkTime > this.animationFrameTime) {
      this.blinkState = !this.blinkState;
      this.blinkTime = 0;
    }
    for (let a of this.arr) {
      a.blink = this.blinkState;
    }
  }
  attackOrder(i) {
    this.arr[i].state = 'attacking';
  }
}