import * as PIXI from 'pixi.js'
import dinoImage from "./images/dino.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Dino } from './dino'
import { Road } from './playingfield'
import { Operator } from './operator'
import { destroyTextureCache } from '@pixi/utils'
import { MoneyBag } from './number'
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
import minusBag from "./images/-.png"
import plusBag from "./images/+.png"
import { Resource } from 'pixi.js'




export class Game {
    pixi: PIXI.Application

    loader: PIXI.Loader
    operator: Operator
    dino: Dino
    moneybags: MoneyBag[] = []
    bagtextures: string[] = ['bagTexture1', 'bagTexture2', 'bagTexture3', 'bagTexture4', 'bagTexture5', 'bagTexture6', 'bagTexture7', 'bagTexture8', 'bagTexture9', 'bagTexture10']
    textureIndex: number[] = []
    operatorTextures: string[] = ['minusTexture', 'plusTexture']
    operatorList: Operator[] = []


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
            .add(this.operatorTextures[0], minusBag)
            .add(this.operatorTextures[1], plusBag)
        this.loader.load(() => this.loadcompleted())
    }

    loadcompleted() {
        let road = new Road()
        this.pixi.stage.addChild(road);

        this.dino = new Dino(this.loader.resources["dinoTexture"].texture!, this.pixi)
        this.pixi.stage.addChild(this.dino)
        const n = Math.floor(Math.random() * 10)

        this.textureIndex.push(this.selectNextNumber())
        this.textureIndex.push(this.selectNextNumber())
        this.textureIndex.push(this.selectNextNumber())

        // console.log(this.loader.resources[this.bagtextures[this.textureIndex[0]]].texture)

        this.createMoneyBag(125, -150, this.textureIndex[0], this.pixi);
        this.createMoneyBag(375, -150, this.textureIndex[1], this.pixi)
        this.createMoneyBag(650, -150, this.textureIndex[2], this.pixi)

        // this.loader.resources[this.bagtextures[this.textureIndex[2]]].texture
        // let index = this.selectNextNumber()

        this.pixi.ticker.add(() => this.update())
            .add(() => this.dino.update())
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

    public createMoneyBag(x: number, y: number, textureNumber: number, pixi: PIXI.Application): void {

        const texture = this.loader.resources[this.bagtextures[textureNumber]].texture

        if (!texture) {
            console.log("undefiened texture");
            return undefined
        }

        let moneybag = new MoneyBag(x, y, texture)
        this.moneybags.push(moneybag)
        this.pixi.stage.addChild(moneybag)
    }

    update() {
        for (let i = this.moneybags.length - 1; i >= 0; i--) {

            this.moneybags[i].y += 2;

            if (this.moneybags[i].y > this.pixi.screen.height) {
                console.log("out of screen");

                // The moneybag moet destroyed
                // verwijderen uit de array
                this.deleteMoneyBag(i)

            } else if (this.collision(this.moneybags[i], this.dino)) {
                // while (this.operatorList.length > 3) {
                //     // this.operator = new Operator(650, -200, this.loader.resources[this.operatorTextures[0]].texture!, this.pixi)
                //     // this.operator.y += 2
                // }
                console.log('nu komen operatoren')
                console.log("player touches enemy 💀")
                this.deleteMoneyBag(i)
            }
        }
    }

    deleteMoneyBag(index: number) {
        this.moneybags[index].destroy()

        this.moneybags = this.moneybags.filter(moneyBag => moneyBag !== this.moneybags[index])
        console.log(this.moneybags);
    }

    collision(moneyBag: MoneyBag, dino: Dino) {
        const bounds1 = moneyBag.getBounds()

        const bounds2 = dino.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

let game = new Game()
