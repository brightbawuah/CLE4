import * as PIXI from 'pixi.js'


export class Number extends PIXI.Sprite {

    loader: PIXI.Loader

    constructor(xposition: number, yposition: number, moneyBag: PIXI.Texture, pixi: PIXI.Application) {
        super()
        this.scale.set(-3, 3)
        this.x = xposition
        this.y = yposition


    }

}
