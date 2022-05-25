import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish'
import { Road } from './playingfield';
import { FallingObjects } from './fallingobjects'





export class Game {
    pixi

    loader: PIXI.Loader
    fallingObject: FallingObjects
    fallingObject1: FallingObjects
    fallingObject2: FallingObjects
    fish: Fish



    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 400 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
        this.loader.load(() => this.loadcompleted())
        let road = new Road()
        this.pixi.stage.addChild(road);

        this.fallingObject = new FallingObjects(150, -100, 0)
        this.fallingObject1 = new FallingObjects(400, -100, 1)
        this.fallingObject2 = new FallingObjects(675, -100, 0)


    }

    update() {
        console.log(this.fallingObject.y)
        if (this.fallingObject.y > 600) {
            this.fallingObject.y = -100
        }
        this.fallingObject.y += 1

        if (this.fallingObject1.y > 600) {
            this.fallingObject1.y = -100;
        }
        this.fallingObject1.y += 1

        if (this.fallingObject2.y > 600) {
            this.fallingObject2.y = -100;
        }
        this.fallingObject2.y += 1

        if (this.collision(this.fallingObject, this.fish)) {
            console.log("player touches enemy 💀")
            this.pixi.stage.removeChild(this.fish);
        }
        if (this.collision(this.fallingObject1, this.fish)) {
            console.log("✅✅✅✅✅")
            this.pixi.stage.removeChild(this.fallingObject1);


        }
        if (this.collision(this.fallingObject2, this.fish)) {
            console.log("player touches enemy 💀")
            this.pixi.stage.removeChild(this.fish);
        }

    }

    loadcompleted() {
        this.fish = new Fish(this.loader.resources["fishTexture"].texture!, this.pixi)

        this.pixi.stage.addChild(this.fallingObject, this.fallingObject1, this.fallingObject2)

        this.pixi.ticker.add(() => this.fish.update())

            .add(() => this.update())
    }

    collision(fallingObject: FallingObjects, fish: Fish) {
        const bounds1 = fallingObject.getBounds()

        const bounds2 = fish.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
}

let game = new Game()
