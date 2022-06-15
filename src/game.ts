import * as PIXI from 'pixi.js'
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import fishImage from "./images/fish.png"

import { Road } from './road'
import { Number } from './number'
import { Symbol } from './symbols'
import { Loader } from 'pixi.js'


export class Game {

    pixi: PIXI.Application

    // fishes: Fish[] = []

    secondNumber: Number

    numberTexture: string[] = ['numberTexture1', 'numberTexture2', 'numberTexture3', 'numberTexture4', 'numberTexture5', 'numberTexture6', 'numberTexture7'
        , 'numberTexture8', 'numberTexture9', 'numberTexture10']


    symbol: Symbol

    symbolTexture: string[] = ['plusTexture', 'minTexture']

    road: Road


    loader: PIXI.Loader

    constructor() {


        this.pixi = new PIXI.Application({ width: 800, height: 450 })

        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add(this.numberTexture[0], number1Image)
            .add(this.numberTexture[1], number2Image)
            .add(this.numberTexture[2], number3Image)
            .add(this.numberTexture[3], number4Image)
            .add(this.numberTexture[4], number5Image)
            .add(this.numberTexture[5], number6Image)
            .add(this.numberTexture[6], number7Image)
            .add(this.numberTexture[7], number8Image)
            .add(this.numberTexture[8], number9Image)
            .add(this.numberTexture[9], number10Image)

            .add(this.symbolTexture[0], plusImage)
            .add(this.symbolTexture[1], minImage)


        this.loader.load(() => this.loadCompleted())


    }

    loadCompleted() {



        // for (let i = 1; i <= 9; i++) {
        //     const number = new Number(game.loader.resources["numberTexture" + i].texture!, this)
        //     this.pixi.stage.addChild(number)
        //     number.visible = false
        //     this.number.push(number)

        // }
        // this.nextQuestion()




        this.road = new Road()
        this.pixi.stage.addChild(this.road)

        let firstNumberIndex = Math.floor(Math.random() * 10)
        this.firstNumber = new Number(180, 200, this.loader.resources[this.numberTexture[firstNumberIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.firstNumber)

        let operatorIndex = Math.floor(Math.random() * 2)
        this.symbol = new Symbol(230, 300, this.loader.resources[this.symbolTexture[operatorIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.symbol)
        // Als de operator een - is dan is het tweede getal dat ik invul het eerste getal of kleiner
        let secondNumberIndex = -1
        if (operatorIndex == 1) {
            secondNumberIndex = Math.floor(Math.random() * firstNumberIndex)
        } else {
            secondNumberIndex = Math.floor(Math.random() * 10)
        }

        this.secondNumber = new Number(330, 200, this.loader.resources[this.numberTexture[secondNumberIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.secondNumber)


        //


        // const symbol = new Symbol(game.loader.resources["plusTexture"].texture!, this)
        // symbol.x = 180
        // symbol.y = 30
        // symbol.visible = true
        // this.symbols.push(symbol)
        // this.pixi.stage.addChild(symbol)




        this.pixi.ticker.add(() => this.update())

    }
    update() {
        console.log("UPDATE!!!")
        for (const number of this.numberTexture) {

        }
    }

    // nextQuestion() {
    //     // select first number (random)
    //     // set location
    //     // make visible
    //     const number = new Number(this.loader.resources["numberTexture5"].texture!, this)
    //     number.x = 120
    //     number.y = -5
    //     number.visible = true


    //     // add random operator

    //     // select second number
    //     // set location
    //     // make visible
    //     const number1 = new Number(game.loader.resources["numberTexture4"].texture!, this)
    //     number1.x = 300
    //     number1.y = 20
    //     number1.visible = true

    // }

    collision(sprite1: PIXI.Sprite, sprite2: PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

let game = new Game()