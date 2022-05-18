import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'





export class Game {
    pixi
    fishes: Fish[] = []
    loader: PIXI.Loader

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)

        this.loader.load(() => this.loadcompleted())

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

let game = new Game()
