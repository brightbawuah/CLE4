import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'
import { Road } from './playingfield';





export class Game {
    pixi
    fishes: Fish[] = []
    loader: PIXI.Loader
    road: Road

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
        this.loader.load(() => this.loadcompleted())
        this.road = new Road()
        this.pixi.stage.addChild(this.road.graphics);

    }
    loadcompleted() {
        let fish = new Fish(this.loader.resources["fishTexture"].texture!, this.pixi)
        // fish.y = Math.random() * this.pixi.screen
        // fish.x = Math.random() * this.pixi.screen
        // fish.tint = Math.random() * 0xFFFFFF
        // fish.scale.set(-1, 1)
        // this.pixi.stage.addChild(fish)
        this.fishes.push(fish)

        this.pixi.ticker.add(() => fish.update())


    }
    // update() {
    //     console.log("update!!!")
    //     this.fish.x += 0.2

    // }
}

// const app = new PIXI.Application({ antialias: true });
// document.body.appendChild(app.view);

// const graphics = new PIXI.Graphics();

// // Rectangle
// graphics.beginFill(0xffffff);
// graphics.drawRect(275, 0, 266, 600);
// graphics.endFill();
// // graphics.position.x = 350;
// // graphics.position.y = 200;

// app.stage.addChild(graphics);

let game = new Game()
