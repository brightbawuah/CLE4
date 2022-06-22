import * as PIXI from 'pixi.js'
import dinoImage from "./images/dino.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Dino } from './dino'
import { Road } from './playingfield'
import { Operator } from './operator'
import { destroyTextureCache } from '@pixi/utils'
//import { MoneyBagg } from './number'
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
import { Moneybag } from './moneybag'
import { Resource } from 'pixi.js'
import dashSound from "url:./Swipe.mp3"


// Operators not appearing

export class Game {

    pixi: PIXI.Application

    loader: PIXI.Loader
    operator: Operator
    dino: Dino
    moneybags:Moneybag[] = [] 
    moneybag: Moneybag
    textureIndex: number[] = []
    bagTexturelist: string [] = ['moneyImage1','moneyImage2','moneyImage3','moneyImage4','moneyImage5','moneyImage6','moneyImage7','moneyImage8','moneyImage9','moneyImage10']
    operatorTextures: string[] = ['minusTexture', 'plusTexture']
    baglist: Moneybag [] =[]
    operatorList: Operator[] = []
    score: number = 0
    collided: boolean = false
    randomnumber: number [] = []
    temp: number

    road: Road

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add('dinoTexture', dinoImage)
            .add(this.bagTexturelist[0], bagOne)
            .add(this.bagTexturelist[1], bagTwo)
            .add(this.bagTexturelist[2], bagThree)
            .add(this.bagTexturelist[3], bagFour)
            .add(this.bagTexturelist[4], bagFive)
            .add(this.bagTexturelist[5], bagSix)
            .add(this.bagTexturelist[6], bagSeven)
            .add(this.bagTexturelist[7], bagEight)
            .add(this.bagTexturelist[8], bagNine)
            .add(this.bagTexturelist[9], bagTen)
            .add(this.operatorTextures[0], minusBag)
            .add(this.operatorTextures[1], plusBag)
        this.loader.load(() => this.loadcompleted())
    }

    loadcompleted() {

        for(let i = 1; i < 11; i++){
            let bag = new Moneybag(i, this.loader)
            this.moneybags.push(bag)
        
        }

        this.Createrandomnumber();

        let road = new Road()
        this.pixi.stage.addChild(road);

        this.dino = new Dino(this.loader.resources["dinoTexture"].texture!, this.pixi)
        this.pixi.stage.addChild(this.dino)

        this.createNumberRow()

        this.pixi.ticker.add(() => this.update())
            .add(() => this.dino.update())
    }

    private createNumberRow() {
        this.textureIndex = []

        this.textureIndex.push(this.selectNextNumber(10))
        this.textureIndex.push(this.selectNextNumber(10))
        this.textureIndex.push(this.selectNextNumber(10))

        this.Newmoneybag(125, -150, 0, this.randomnumber[0]);
        this.Newmoneybag(375, -150, 1,this.randomnumber[1]);
        this.Newmoneybag(650, -150, 2,this.randomnumber[2]);
    
    }

    private createOperatorRow() {
        this.textureIndex = []

        // push met this.selectNextNumber 2 x operator
        this.textureIndex.push(this.selectNextNumber(2))
        this.textureIndex.push(this.selectNextNumber(2))
        //console.log(this.textureIndex);

        // add to createMoneyBags
        this.createMoneyBag(125, -150, this.operatorTextures[this.textureIndex[0]], this.pixi);
        this.createMoneyBag(375, -150, this.operatorTextures[this.textureIndex[1]], this.pixi);
    }

    selectNextNumber(length: number) {
        // alle gemaakte numbers zitten in een array. 

        // while het nieuwe nummer voorkomt in de array
        // moet er een nieuwe gekozen worden. 
        // let numbers: number[] = [2, 6]


        let index = 0
        let newNumber = 0
        while (index != -1) { // -1 betekent is nieuw
            newNumber = Math.floor(Math.random() * length)
            index = this.textureIndex.indexOf(newNumber)
        }

        return newNumber

    }

    public createMoneyBag(x: number, y: number, textureName: string , pixi: PIXI.Application): void {

        const texture = this.loader.resources[textureName].texture

        if (!texture) {
            console.log("undefiened texture");
            return undefined
        }

        // let moneybag = new moneyBag(x, y, texture)
        // this.moneybags.push(moneybag)
        // this.pixi.stage.addChild(moneybag)
    }

    includes(number: number, array: number[]){
        for (let i = 0; i < array.length; i++){
            if(array[i] == number) return true

        }
        return false

    }

    Createrandomnumber(){

        for (let i = 0; i < 3; i++){
            do{
                this.temp = Math.floor(Math.random() * this.moneybags.length)
            } while (this.includes(this.temp,this.randomnumber))
           this.randomnumber[i] = this.temp
        }
    }

    public Newmoneybag(x: number, y: number, bagTexture : number, bagnumber : number){
        this.bagTexturelist[this.textureIndex[bagTexture]]
        this.collided = false
        //this.moneybag = this.moneybags[Math.floor(Math.random() * this.moneybags.length)];
        this.moneybag = this.moneybags[bagnumber];
        this.moneybag.x = x
        this.moneybag.y = y
        this.moneybag.anchor.set(0,5);
        this.moneybag.scale.set (3.3);
        this.baglist.push (this.moneybag)
        this.pixi.stage.addChild(this.moneybag);
    
       

    }
    

    update() {
        for (let i = this.baglist.length - 1; i >= 0; i--) {

            this.baglist[i].y += 2;

               if (this.baglist[i].y > 1000) {
                console.log("out of screen");

            //       // The moneybag moet destroyed
            //       // verwijderen uit de array
                   this.deleteMoneyBag(i)
               }
            
               if(this.collided === false) {    
                for (let i = 0; i < 3; i++){
               if (this.collision(this.baglist[i], this.dino)) {
                // while (this.operatorList.length > 3) {
                //     // this.operator = new Operator(650, -200, this.loader.resources[this.operatorTextures[0]].texture!, this.pixi)
                //     // this.operator.y += 2
                // }
                console.log('nu komen operatoren')
                console.log("player touches enemy 💀")
                this.score = this.score += this.baglist[i].amount
                this.collided = true
                this.pixi.stage.removeChild(this.baglist[i])
                console.log(this.score)}
            }}
        }
        if (this.baglist.length == 0) {
            this.createOperatorRow()
        }
    }

    deleteMoneyBag(index: number) {
        this.baglist[index].destroy()

        this.baglist = this.baglist.filter(moneyBag => moneyBag !== this.baglist[index])
        //console.log(this.moneybags);
    }

    collision(a: Moneybag, b: Dino) {
        const bounds1 = a.getBounds()

        const bounds2 = b.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

let game = new Game()
