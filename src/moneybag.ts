import * as PIXI from 'pixi.js'
export class Moneybag extends PIXI.Sprite{
    constructor(amount:number, loader:PIXI.Loader){
        super(loader.resources[`moneyImage${amount}`].texture!); // new PIXI.Sprite()
    
    
    }
    update(delta: number){
       
    }
}
