import * as PIXI from 'pixi.js'
import { Game } from "./game";

export class FallingObjects extends PIXI.Graphics {
    game: Game
    graphics: PIXI.Graphics;
    color = [0xDE3249, 0x35CC5A]

    constructor(x: number, y: number, color: number) {
        super()

        // Circle
        this.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        this.beginFill(this.color[color], 1);
        this.drawCircle(x, y, 50);
        this.endFill();



    }

}
