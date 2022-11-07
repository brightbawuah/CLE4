import * as PIXI from 'pixi.js'

export class Dino extends PIXI.Sprite{

    xspeed = 0
    yspeed = 0
    xposition = 1
    lane = [190, 465, 715]

    //eigenschappen
    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)
        this.y = 280
        this.x = 475

        this.scale.set(-2, 2)
        pixi.stage.addChild(this)

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    
    }

    //functies
    
    update() {
        // console.log("update!!!")
        this.x = this.lane[this.xposition]
    }


    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                if (this.xposition !== 0) {

                    this.xposition = this.xposition - 1
                    break
                }

            case "D":
            case "ARROWRIGHT":
                if (this.xposition !== 2) {

                    this.xposition = this.xposition + 1
                    break
                }
        }

    }
}