import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Symbol extends PIXI.Sprite {




    constructor(xposition: number, yposition: number, texture: PIXI.Texture, pixi: PIXI.Application) {

        super(texture);

        this.x = xposition
        this.y = yposition





    }
    update(delta: number) {

    }
} 