import * as PIXI from 'pixi.js'


export class Operator extends PIXI.Sprite {

    loader: PIXI.Loader


    constructor(xposition: number, yposition: number, texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)

        this.scale.set(3, 3)
        this.x = xposition
        this.y = yposition
    }
}
