import * as PIXI from 'pixi.js'

export class Enemy2 extends PIXI.Sprite{

    //eigenschappen
    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 715
        this.y = 0

        this.scale.set(-2, 2)
    }

    //functies
    

}