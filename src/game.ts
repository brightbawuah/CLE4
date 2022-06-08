import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'
import geldImage from "./images/geld.png"
import stoneImage from "./images/stone.png"
import { Sprite } from 'pixi.js'




export class Game {
    // eigenschappen
    loader: PIXI.Loader
    pixi: PIXI.Application
    fish: PIXI.Sprite
    enemyfish: PIXI.Sprite
    enemyfish2: PIXI.Sprite
    water: PIXI.Sprite
    myFish : Fish
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
        .add('bubbleTexture', bubbleImage)
        .add('waterTexture', waterImage)
        .add('geldImage', geldImage)
        .add('stoneImage', stoneImage)
        this.loader.load(()=>this.loadCompleted())
    }

    // functies
    loadCompleted() {
        this.fish = new Fish(this.loader.resources["geldImage"].texture!)
        this.pixi.stage.addChild(this.fish)

        this.enemyfish = new Fish(this.loader.resources["stoneImage"].texture!)
        this.pixi.stage.addChild(this.enemyfish)

        this.enemyfish2 = new Fish(this.loader.resources["stoneImage"].texture!)
        this.pixi.stage.addChild(this.enemyfish2)
        

        this.pixi.ticker.add( () => this.update() )
    }
    update(){

        this.fish.x = 340
        this.fish.y += 3

        this.enemyfish.x = 0
        this.enemyfish.y += 3

        this.enemyfish2.x = 670
        this.enemyfish2.y += 3

        console.log(this.numbers[Math.ceil(Math.random() * this.numbers.length)])

    }
}

let game = new Game()