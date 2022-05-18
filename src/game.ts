// 2 objecten aanmaken die automatisch bewegen om collision te testten 
import * as PIXI from 'pixi.js'
import bubbleImage from "./images/bubble.png"
import enemyImage from "./images/bubble copy.png"



const pixi = new PIXI.Application({ width: 800, height: 600 })
document.body.appendChild(pixi.view)

const loader = new PIXI.Loader()
loader.add('bubbleTexture', bubbleImage)
      .add('enemyTexture', enemyImage)
      loader.load(()=>loadCompleted())

      function loadCompleted() {

        

let player = new PIXI.Sprite(loader.resources["bubbleTexture"].texture!)
player.anchor.set(0,5);
player.x = 100;
player.y = pixi.view.height /2;

let enemy = new PIXI.Sprite(loader.resources["enemyTexture"].texture!)
enemy.anchor.set(0,5);
enemy.x = pixi.view.width - 100;
enemy.y = pixi.view.height /2;

let speed = 1;

pixi.stage.addChild(player);
pixi.stage.addChild(enemy);

pixi.ticker.add(gameLoop);

function gameLoop(){
    player.x += speed;
    enemy.x -= speed;

    if(rectsIntersect(player, enemy)){
        pixi.stage.removeChild(enemy);
    }


}

function rectsIntersect (a, b){
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height;
    

}
      }
