import * as PIXI from 'pixi.js'



export class Text extends PIXI.Graphics {
    constructor(x: number, y: number, teken: string) {
        super()




        const startText = new PIXI.Text("+",
            {

                "fontFamily": "\"Times New Roman\", Times, serif",
                "fontSize": 30,
                "fontStyle": "italic",
                "fontWeight": "bold"

            })
        startText.x = this.getBounds().width / 2
        startText.x = this.getBounds().height / 2
        startText.anchor.set(0, 5)

        this.addChild(startText)


    }
}