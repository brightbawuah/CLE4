import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'
import geldImage from "./images/geld.png"
import stoneImage from "./images/stone.png"
import dinoImage from "./images/dino.png"
import { Sprite } from 'pixi.js'
import { Enemy } from './enemy'
import { Money } from './money'
import { Enemy2 } from './enemy2'





export class Game {
    // eigenschappen
    loader: PIXI.Loader
    pixi: PIXI.Application
    fish: Fish
    water: PIXI.Sprite
    enemy: Enemy
    enemy2: Enemy2
    money: Money
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // gameover = boolean = true

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
        .add('bubbleTexture', bubbleImage)
        .add('waterTexture', waterImage)
        .add('geldImage', geldImage)
        .add('stoneImage', stoneImage)
        .add('dinoImage', dinoImage)
        this.loader.load(()=>this.loadCompleted())
    }

    // functies
    loadCompleted() {
        this.fish = new Fish(this.loader.resources["dinoImage"].texture!, this.pixi)
        this.pixi.stage.addChild(this.fish)

        this.enemy = new Enemy(this.loader.resources["stoneImage"].texture!)
        this.pixi.stage.addChild(this.enemy)

        this.money = new Money(this.loader.resources["geldImage"].texture!)
        this.pixi.stage.addChild(this.money)
        
        this.enemy2 = new Enemy2(this.loader.resources["stoneImage"].texture!)
        this.pixi.stage.addChild(this.enemy2)

        this.pixi.ticker.add(() => this.update())
        .add(() => this.fish.update())

    }
    update(){


         this.money.x = 340
         this.money.y += 3

         this.enemy.x = 0
         this.enemy.y += 3

         this.enemy2.x = 670
         this.enemy2.y += 3

        console.log(this.numbers[Math.ceil(Math.random() * this.numbers.length)])

    }
}

let game = new Game()