import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite {
    xspeed = 0
    yspeed = 0

    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)
        this.y = 280
        this.x = 475
        this.tint = Math.random() * 0xFFFFFF
        this.scale.set(-1, 1)
        pixi.stage.addChild(this)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }
    update() {
        console.log("update!!!")
        this.x += this.xspeed
        this.y += this.yspeed
    }


    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xspeed = -7
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 7
                break
            // case "W":
            // case "ARROWUP":
            //     this.yspeed = -7
            //     break
            // case "S":
            // case "ARROWDOWN":
            //     this.yspeed = 7
            //     break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }
}
