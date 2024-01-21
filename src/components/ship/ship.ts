import { Graphics } from "pixi.js";

export default function createShips() {
    const isGreen = Math.random() < 0.5;
    const shipColor = isGreen ? 0x00FF00 : 0xFF0000;

    const shipGraphics = new Graphics();
    shipGraphics.beginFill(shipColor);
    shipGraphics.drawRect(0, 0, 100, 50);
    shipGraphics.endFill(); 

    shipGraphics.x =900;
    shipGraphics.y = 250;

    return shipGraphics
   
    
   
}