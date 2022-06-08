import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'
import { Road } from './playingfield'
import { FallingObject } from './fallingobject'
import { destroyTextureCache } from '@pixi/utils'
import { Number } from './number'
import bagOne from "./images/1.png";
import bagTwo from "./images/2.png";
import bagThree from "./images/3.png";
import bagFour from "./images/4.png";
import bagFive from "./images/5.png";
import bagSix from "./images/6.png";
import bagSeven from "./images/7.png";
import bagEight from "./images/8.png";
import bagNine from "./images/9.png";
import bagTen from "./images/10.png";



export class Game {
    pixi

    loader: PIXI.Loader
    number: Number
    number1: Number
    number2: Number
    fish: Fish
    bagtextures = [bagOne, bagTwo, bagThree, bagFour, bagFive, bagSix, bagSeven, bagEight, bagNine, bagTen]



    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
            .add('bagTexture1', bagOne)
            .add('bagTexture2', bagTwo)
            .add('bagTexture3', bagThree)
            .add('bagTexture4', bagFour)
            .add('bagTexture5', bagFive)
            .add('bagTexture6', bagSix)
            .add('bagTexture7', bagSeven)
            .add('bagTexture8', bagEight)
            .add('bagTexture9', bagNine)
            .add('bagTexture10', bagTen)
        this.loader.load(() => this.loadcompleted())
        // let road = new Road()
        // this.pixi.stage.addChild(road);




    }

    update() {
        // console.log(this.number)
        // // console.log(this.fallingObject.y)
        // if ((this.collision(this.number, this.fish)) ||
        //     (this.collision(this.number2, this.fish))) {
        //     this.number.y == 0
        //     // this.fallingObject1.y == 0
        //     this.number2.y == 0

        // }
        // console.log(this.number.y)

        // if (this.collision(this.number, this.fish) === false) {
        //     this.number.y += 2

        //     this.number2.y += 2

        // }
        // this.number1.y += 2

        // if (this.number.y > 600) {
        //     this.number.y = -100
        // }

        // if (this.number.y <= 300) {
        //     // this.number.color[1]
        // }

        // if (this.number1.y > 600) {
        //     this.number1.y = -100;
        // }


        // if (this.number2.y > 600) {
        //     this.number2.y = -100;
        // }

        // if (this.collision(this.number, this.fish)) {
        //     console.log("player touches enemy 💀")
        //     // this.pixi.stage.removeChild(this.fish);
        // }
        // if (this.collision(this.number1, this.fish)) {
        //     console.log("✅✅✅✅✅")
        //     this.number1.y = 0
        //     // this.fallingObject1.destroy
        //     // this.collision(this.fallingObject1, fish)


        // }
        // if (this.collision(this.number2, this.fish)) {
        //     console.log("player touches enemy 💀")
        //     this.number2.y = 0

        //     // this.pixi.stage.removeChild(this.fish);
        // }

    }

    loadcompleted() {
        this.fish = new Fish(this.loader.resources["fishTexture"].texture!, this.pixi)
        this.pixi.stage.addChild(this.fish)

        this.number = new Number(150, 350, this.loader.resources["bagTexture1"].texture!, this.pixi)
        this.number1 = new Number(400, 200, this.loader.resources["bagTexture2"].texture!, this.pixi)
        this.number2 = new Number(675, 300, this.loader.resources["bagTexture3"].texture!, this.pixi)

        this.pixi.stage.addChild(this.number, this.number1, this.number2)

        this.pixi.ticker.add(() => this.update())
    }
    // createFallingObject(color: number) {
    //     this.number = new FallingObjects(150, -100, color)
    // }
    // createFallingObject1(color: number) {
    //     this.fallingObject1 = new FallingObjects(400, -100, color)
    // }
    // createFallingObject2(color: number) {
    //     this.fallingObject2.push(new FallingObjects(675, -100, color))
    // }

    collision(number: Number, fish: Fish) {
        const bounds1 = number.getBounds()

        const bounds2 = fish.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

let game = new Game()
