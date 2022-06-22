import * as PIXI from 'pixi.js'
import dinoImage from "./images/dino.png"
import number1Image from "./images/number1.png"
import number2Image from "./images/number2.png"
import number3Image from "./images/number3.png"
import number4Image from "./images/number4.png"
import number5Image from "./images/number5.png"
import number6Image from "./images/number6.png"
import number7Image from "./images/number7.png"
import number8Image from "./images/number8.png"
import number9Image from "./images/number9.png"
import number10Image from "./images/number10.png"
import plusImage from "./images/plus.png"
import minImage from "./images/min.png"
import { Dino } from './dino'
import { Road } from './road'
import { Number } from './number'
import { Symbol } from './symbols'
import { Loader } from 'pixi.js'
import dashSound from "url:./sound/Swipe.mp3"



export class Game {

    private pixi: PIXI.Application

    private firstNumber: Number

    private secondNumber: Number

    numberTexture: string[] = ['numberTexture1', 'numberTexture2', 'numberTexture3', 'numberTexture4', 'numberTexture5', 'numberTexture6', 'numberTexture7'
        , 'numberTexture8', 'numberTexture9', 'numberTexture10']


    private symbol: Symbol

    private symbolTexture: string[] = ['plusTexture', 'minTexture']

    private equalTexture: ['equalTexture']

    private road: Road

    private dino: Dino


    private loader: PIXI.Loader

    constructor() {


        this.pixi = new PIXI.Application({ width: 800, height: 450 })

        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add('dinoTexture', dinoImage)
            .add(this.numberTexture[0], number1Image)
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


            .add('url:./sound/Swipe.mp3', dashSound);


        this.loader.load(() => this.loadCompleted())


    }

    loadCompleted() {

        this.road = new Road()
        this.pixi.stage.addChild(this.road)

        this.dino = new Dino(this.loader.resources["dinoTexture"].texture!, this.pixi, dashSound)
        this.pixi.stage.addChild(this.dino)


        let firstNumberIndex = Math.floor(Math.random() * 10)
        this.firstNumber = new Number(180, 280, this.loader.resources[this.numberTexture[firstNumberIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.firstNumber)

        let operatorIndex = Math.floor(Math.random() * 2)
        this.symbol = new Symbol(230, 380, this.loader.resources[this.symbolTexture[operatorIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.symbol)
        // Als de operator een - is dan is het tweede getal dat ik invul het eerste getal of kleiner
        let secondNumberIndex = -1
        if (operatorIndex == 1) {
            secondNumberIndex = Math.floor(Math.random() * firstNumberIndex)
        } else {
            secondNumberIndex = Math.floor(Math.random() * 10)
        }

        this.secondNumber = new Number(330, 280, this.loader.resources[this.numberTexture[secondNumberIndex]].texture!, this.pixi)
        this.pixi.stage.addChild(this.secondNumber)




        this.pixi.ticker.add(() => this.update())
            .add(() => this.dino.update())



    }
    update() {
        console.log("UPDATE!!!")
        // this.keyboardDino.update();



    }

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