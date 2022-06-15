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
import dinoImage from "./images/dino.png"



export class Game {
    pixi

    loader: PIXI.Loader
    number: Number
    number1: Number
    number2: Number
    fish: Fish
    bagtextures: string[] = ['bagTexture1', 'bagTexture2', 'bagTexture3', 'bagTexture4', 'bagTexture5', 'bagTexture6', 'bagTexture7', 'bagTexture8', 'bagTexture9', 'bagTexture10']
    textureIndex: number[] = []



    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add('dinoTexture', dinoImage)
            .add(this.bagtextures[0], bagOne)
            .add(this.bagtextures[1], bagTwo)
            .add(this.bagtextures[2], bagThree)
            .add(this.bagtextures[3], bagFour)
            .add(this.bagtextures[4], bagFive)
            .add(this.bagtextures[5], bagSix)
            .add(this.bagtextures[6], bagSeven)
            .add(this.bagtextures[7], bagEight)
            .add(this.bagtextures[8], bagNine)
            .add(this.bagtextures[9], bagTen)
        this.loader.load(() => this.loadcompleted())






    }

    update() {
        // console.log(this.number)
        // console.log(this.fallingObject.y)
        if ((this.collision(this.number, this.fish)) ||
            (this.collision(this.number2, this.fish))) {
            this.number.y == 0
            // this.fallingObject1.y == 0
            this.number2.y == 0

        }
        // console.log(this.number.y)

        if (this.collision(this.number, this.fish) === false) {
            this.number.y += 2

            this.number2.y += 2

        }
        this.number1.y += 2

        if (this.number.y > 600) {
            this.number.y = -150
        }

        if (this.number1.y > 600) {
            this.number1.y = -150;
        }


        if (this.number2.y > 600) {
            this.number2.y = -150;
        }

        if (this.collision(this.number, this.fish)) {
            console.log("player touches enemy 💀")
            // console.log(this.bagtextures[Math.floor(Math.random() * 9.999)])

            // let number = new Number(125, -150, this.bagtextures[Math.floor(Math.random() * 10)])
        }
        if (this.collision(this.number1, this.fish)) {
            console.log("✅✅✅✅✅")
            this.number1.y = -150
            // this.fallingObject1.destroy
            // this.collision(this.fallingObject1, fish)


        }
        if (this.collision(this.number2, this.fish)) {
            console.log("player touches enemy 💀")
            this.number2.y = -150

            // this.pixi.stage.removeChild(this.fish);
        }

    }

    loadcompleted() {
        let road = new Road()
        this.pixi.stage.addChild(road);

        this.fish = new Fish(this.loader.resources["dinoTexture"].texture!, this.pixi)
        this.pixi.stage.addChild(this.fish)
        const n = Math.floor(Math.random() * 10)

        this.textureIndex.push(this.selectNextNumber())
        this.textureIndex.push(this.selectNextNumber())
        this.textureIndex.push(this.selectNextNumber())
        console.log(this.textureIndex)

        this.number = new Number(125, -150, this.loader.resources[this.bagtextures[this.textureIndex[0]]].texture!, this.pixi)
        this.number1 = new Number(375, -150, this.loader.resources[this.bagtextures[this.textureIndex[1]]].texture!, this.pixi)
        this.number2 = new Number(650, -150, this.loader.resources[this.bagtextures[this.textureIndex[2]]].texture!, this.pixi)

        this.pixi.stage.addChild(this.number, this.number1, this.number2)

        let index = this.selectNextNumber()

        this.pixi.ticker.add(() => this.update())
            .add(() => this.fish.update())
    }

    selectNextNumber() {
        // alle gemaakte numbers zitten in een array. 

        // while het nieuwe nummer voorkomt in de array
        // moet er een nieuwe gekozen worden. 
        // let numbers: number[] = [2, 6]


        let index = 0
        let newNumber = 0
        while (index != -1) { // -1 betekent is nieuw
            newNumber = Math.floor(Math.random() * 10)
            index = this.textureIndex.indexOf(newNumber)
        }

        return newNumber

    }

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
