import * as PIXI from 'pixi.js'
import { Game } from './game';






export class Road extends PIXI.Graphics {

    constructor() {
        super();
        // Rectangle
        this.beginFill(14271916);
        this.drawRect(300, 0, 200, 700);
        this.endFill();

        this.beginFill(9070146);
        this.drawRect(500, 0, 200, 700);
        this.endFill();

        this.beginFill(9070146);
        this.drawRect(100, 0, 200, 700);
        this.endFill();
    }
}


