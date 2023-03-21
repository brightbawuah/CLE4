import * as PIXI from 'pixi.js'

export class Enemy extends PIXI.Sprite{

    //eigenschappen
    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 190
      

        this.scale.set(-2, 2)
    
    }

    //functies
    

}