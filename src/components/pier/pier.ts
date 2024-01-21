import { Graphics } from "pixi.js";

export default function pier(yPosition: number){
    const pier = new Graphics();
   
    pier.lineStyle(2, 0xFFFF00); 
    pier.drawRect(0, yPosition, 50, 100)

    return pier
}