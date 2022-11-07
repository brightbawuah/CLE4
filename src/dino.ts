import * as PIXI from 'pixi.js'
import { AppLoaderPlugin, Loader } from 'pixi.js'
import dashSound from "url:./Swipe.mp3"


export class Dino extends PIXI.Sprite {
    xspeed = 0
    yspeed = 0
    xposition = 1
    lane = [190, 465, 715]
    private dashSound: HTMLAudioElement;
    
     private loader: PIXI.Loader


    constructor(texture: PIXI.Texture, pixi: PIXI.Application, sound: HTMLAudioElement) {
        super(texture)
        this.dashsound = sound;
        
        this.y = 280
        this.x = 475
        // this.tint = Math.random() * 0xFFFFFF
        this.scale.set(-3, 3)
        
         this.loader = new PIXI.Loader()
        this.loader.add('dashSound', dashSound);
        pixi.stage.addChild(this)

        this.loader.load(() => this.soundCompleted())
    }
    soundCompleted(): void {
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("mousedown", (e: MouseEvent) => this.onMouseDown(e))
        window.addEventListener("mousemove", (e: MouseEvent) => this.onMouseMove(e))
        window.addEventListener("mouseup", (e: MouseEvent) => this.onMouseUp(e))
    }


    update() {
        // console.log("update!!!")
        this.x = this.lane[this.xposition]
    }


    onKeyDown(e: KeyboardEvent): void {
        let sound = this.loader.resources['dashSound'].data!

        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                if (this.xposition !== 0) {

                    this.xposition = this.xposition - 1
                    
                } sound.play()
                break

            case "D":
            case "ARROWRIGHT":
                if (this.xposition !== 2) {

                    this.xposition = this.xposition + 1
                   
                } sound.play()
                break
        }

    }

    onMouseDown(e: MouseEvent){
        console.log('Mouse clicked')
        console.log('X',  'Y');
    }

    onMouseMove(e: MouseEvent){

    }

    onMouseUp(e: MouseEvent){

    }

    

    // private onKeyUp(e: KeyboardEvent): void {
    //     switch (e.key.toUpperCase()) {
    //         case " ":
    //             break;
    //         case "A":
    //         case "D":
    //         case "ARROWLEFT":
    //         case "ARROWRIGHT":
    //             this.xspeed = 0
    //             break
    //         case "W":
    //         case "S":
    //         case "ARROWUP":
    //         case "ARROWDOWN":
    //             this.yspeed = 0
    //             break
    //     }
    // }
}
