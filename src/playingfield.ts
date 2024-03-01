import * as PIXI from 'pixi.js'

export class Road extends PIXI.Graphics {

     constructor() {
  
        super();
        // Rectangle
        this.beginFill(14271916);
        this.drawRect(290, 0, 220, 700);
        this.endFill();

        this.beginFill(9070146);
        this.drawRect(500, 0, 220, 700);
        this.endFill();

        this.beginFill(9070146);
        this.drawRect(75, 0, 220, 700);
        this.endFill();


    
    }

}
