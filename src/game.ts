import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Sprite, UPDATE_PRIORITY } from 'pixi.js'

export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    water: PIXI.Sprite
    bubble: PIXI.Sprite


    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        this.loader.add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage)



    }


}

let game = new Game()

class Fish {
    fish: PIXI.Sprite
    loader: PIXI.Loader

    constructor(x: number, y: number) {
        this.fish
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)

        this.loader.load(() => this.loadcompleted())
        this.update
    }
    loadcompleted() {
        this.fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)

        this.fish.x = 150
        this.fish.y = 200

        this.fish.scale.set(-1, 1)

        this.pixi.stage.addChild(this.fish)

        this.pixi.ticker.add(() => this.update())

    }
    update() {
        console.log("update!!!")
        this.fish.x += 0.2

    }
}
//
// STAP 1 - maak een pixi canvas
//
// const pixi = new PIXI.Application({ width: 800, height: 450 })
// document.body.appendChild(pixi.view)

// let fish: PIXI.Sprite
// //
// // STAP 2 - preload alle afbeeldingen
// //
// const loader = new PIXI.Loader()


// //
// // STAP 3 - maak een sprite als de afbeeldingen zijn geladen
// //
// function loadCompleted() {
//     fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)

//     fish.interactive = true
//     fish.buttonMode = true



//     fish.x = 150
//     fish.y = 200

//     fish.scale.set(-1, 1)

//     pixi.stage.addChild(fish)

//     pixi.ticker.add(() => update())

//     function update() {
//         console.log("update!!!")
//         fish.x += 0.2
//     }
// }
