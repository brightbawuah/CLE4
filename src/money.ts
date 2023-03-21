import * as PIXI from 'pixi.js'

export class MoneyBag extends PIXI.Sprite{

    //eigenschappen
    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 465
        this.y += 3

        this.scale.set(-2, 2)
    }

    //functies
    

}