import * as PIXI from 'pixi.js'
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import fishImage from "./images/fish.png"
import laneImage from "./images/lanes.png"
import { Fish } from './Fish'
import { Road } from './road'

export class Game {

    pixi: PIXI.Application

    fishes: Fish[] = []

    loader: PIXI.Loader

    road: Road

    constructor() {

        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
            .add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage)

        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {
        // this.fishes.push(new Fish(game.loader.resources["fishTexture"].texture!, this))

        this.pixi.ticker.add(() => this.update())

        this.road = new Road()
        this.pixi.stage.addChild(this.road)

    }
    update() {
        console.log("UPDATE!!!")

    }
}

let game = new Game()