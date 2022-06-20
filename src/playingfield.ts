import * as PIXI from 'pixi.js'


export class Road extends PIXI.Graphics {

    graphics: PIXI.Graphics;

    constructor() {
        super()
        // Rectangle
        this.beginFill(0xffffff);
        this.drawRect(275, 0, 266, 600);
        this.endFill();

    }
}