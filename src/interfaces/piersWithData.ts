import { Graphics } from "pixi.js";

export interface piersWithData{
    pier: Graphics,
    isBusy: Boolean,
    ifFull: Boolean,
    coordinates: {x: number, y: number},

}