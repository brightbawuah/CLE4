import * as PIXI from 'pixi.js'


export class Road {

    public graphics: PIXI.Graphics;


    constructor() {
        // Rectangle
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(0xffffff);
        this.graphics.drawRect(275, 0, 266, 600);
        this.graphics.endFill();

    }
}