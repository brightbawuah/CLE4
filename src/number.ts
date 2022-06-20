import * as PIXI from 'pixi.js'


export class MoneyBag extends PIXI.Sprite {

    loader: PIXI.Loader

    constructor(xposition: number, yposition: number, moneyBag: PIXI.Texture) {
        super(moneyBag)

        this.scale.set(3, 3)
        this.x = xposition
        this.y = yposition
    }
}
