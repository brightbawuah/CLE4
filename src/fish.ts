import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite {
    xspeed = 0
    xposition = 1
    lane = [200, 475, 725]

    // yspeed = 0

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
        console.log("update!!!")
        this.x = this.lane[this.xposition]
        // this.y += this.yspeed
    }


    onKeyDown(e: KeyboardEvent): void {



        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                // this.xposition = this.xposition - 1
                if (this.xposition !== 0) {

                    this.xposition = this.xposition - 1

                }
                break
            case "D":
            case "ARROWRIGHT":
                // this.xposition = this.xposition + 1
                if (this.xposition !== 2) {
                    this.xposition = this.xposition + 1

                }
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
        console.log(this.xposition)

        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                console.log(this.lane[this.xposition])
            //     break
            // case "W":
            // case "S":
            // case "ARROWUP":
            // case "ARROWDOWN":
            //     this.yspeed = 0
            //     break
        }
    }
}
