import { Application, Graphics } from "pixi.js";
import { piersWithData } from "../../interfaces/piersWithData";
import pier from "../pier/pier";

export default function createPort(app: Application<HTMLCanvasElement>) {
    let portEnterTopBorder = new Graphics();
    let portEnterBottomBorder = new Graphics();

    portEnterTopBorder.lineStyle(1, 0xffffff)
        .moveTo(300, 0)
        .lineTo(300, 200);


    portEnterBottomBorder.lineStyle(1, 0xffffff)
        .moveTo(300, 400)
        .lineTo(300, 600);

    app.stage.addChild(portEnterTopBorder);
    app.stage.addChild(portEnterBottomBorder);

    const piers: piersWithData[] = [];

    for (let i = 25; i <= 475; i += 150) {
        let piertoAdd = pier(i);
        app.stage.addChild(piertoAdd);
        piers.push({ pier: piertoAdd, isBusy: false, ifFull:false, coordinates: { x:50 , y: i } });
    }

    return piers
}