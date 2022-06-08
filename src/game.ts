import * as PIXI from 'pixi.js'
import money1I from "./images/money1-1.png.png"
import money2I from "./images/money2-1.png.png"
import money3I from "./images/money3-1.png.png"
import money4I from "./images/money4-1.png.png"
import money5I from "./images/money5-1.png.png"
import money6I from "./images/money6-1.png.png"
import money7I from "./images/money7-1.png.png"
import money8I from "./images/money8-1.png.png"
import money9I from "./images/money9-1.png.png"
import money10I from "./images/money10-1.png.png"
import { Moneybag } from './moneybag';
export class Game{
    
    pixiWidth = 800;
    pixiHeight = 450;

    pixi : PIXI.Application;
    loader : PIXI.Loader;

    moneybags:Moneybag[] = [] 


    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new PIXI.Loader();
        this.loader.add('moneyImage1', money1I)
            .add('moneyImage2', money2I)
            .add('moneyImage3', money3I)
            .add('moneyImage4', money4I)
            .add('moneyImage5', money5I)
            .add('moneyImage6', money6I)
            .add('moneyImage7', money7I)
            .add('moneyImage8', money8I)
            .add('moneyImage9', money9I)
            .add('moneyImage10', money10I);

        this.loader.load(()=>this.loadCompleted());
    }

    
    loadCompleted() {


        for(let i = 1; i < 10; i++){
             let bag = new Moneybag(i, this.loader)
             this.moneybags.push(bag)
        }   
       
    }
 
    
}
new Game();