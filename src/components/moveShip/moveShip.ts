import { Easing, Tween } from "@tweenjs/tween.js";
import { Graphics } from "pixi.js";
import { shipPosition } from "../../interfaces/sipPosition";




export default function moveShip(ship:Graphics, endPosition: shipPosition) {
    const startPosition = { x: ship.x, y: ship.y };

    new Tween(startPosition)
        .to(endPosition, 5000)
        .easing(Easing.Sinusoidal.Out) // You can change the easing function
        .onUpdate(() => {
            ship.x = startPosition.x;
            ship.y = startPosition.y;
        })
        .start()
}