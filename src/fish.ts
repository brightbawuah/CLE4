import * as PIXI from 'pixi.js'
import { FallingObjects } from "./fallingobjects";

export class Fish extends PIXI.Sprite {
    yspeed = 0
    xposition = 1
    lane = [200, 475, 725]
    fallingObjectsSpeed: FallingObjects


    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)
        this.y = 280
        this.x = this.lane[this.xposition]
        this.tint = Math.random() * 0xFFFFFF
        this.scale.set(-1, 1)
        pixi.stage.addChild(this)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }
    update() {
        this.x = this.lane[this.xposition]
    }


    onKeyDown(e: KeyboardEvent): void {



        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                if (this.xposition !== 0) {

                    this.xposition = this.xposition - 1

                }
                break
            case "D":
            case "ARROWRIGHT":
                if (this.xposition !== 2) {
                    this.xposition = this.xposition + 1

                }
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        console.log(this.xposition)

        switch (e.key.toUpperCase()) {
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                console.log(this.lane[this.xposition])
                break
        }
    }
}
