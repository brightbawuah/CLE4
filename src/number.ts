import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Number extends PIXI.Sprite {


    loader: PIXI.Loader


    constructor(xposition: number, yposition: number, texture: PIXI.Texture, pixi: PIXI.Application) {

        super(texture);
        this.x = xposition
        this.y = yposition



    }
    update(delta: number) {

    }
} 