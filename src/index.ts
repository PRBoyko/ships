import * as TWEEN from '@tweenjs/tween.js';
import { Graphics } from 'pixi.js';
import createApplication from "./components/application/application";
import moveShip from './components/moveShip/moveShip';
import createPort from "./components/port/port";
import createShips from './components/ship/ship';
import checkEmptyPier from './services/checkEmptyPier';
import checkFullPier from './services/checkFullPier';

const app = createApplication();
const piers = createPort(app);
let shipsFull: Graphics[] = [];
let shipsEmpty: Graphics[] = [];

document.body.appendChild(app.view);
app.ticker.add(() => {
    TWEEN.update();
});

const firstToEnterX = 300;

setInterval(function () {
    const ship = createShips();
    app.stage.addChild(ship);
    if (ship.geometry.graphicsData[0].fillStyle.color === 16711680) {
        shipsEmpty.push(ship);
        let shipPositionX = firstToEnterX + shipsEmpty.indexOf(ship) * 110;
        moveShip(ship, { x: shipPositionX, y: 250 });
    }

    if (ship.geometry.graphicsData[0].fillStyle.color === 65280) {
        shipsFull.push(ship);
        let shipPositionX = firstToEnterX + shipsFull.indexOf(ship) * 110;
        moveShip(ship, { x: shipPositionX, y: 350 });
    }
},
    8000);

setInterval(function () {
    let fullPier = checkFullPier(piers);
    if (fullPier !== -1) {
        let currentPierFull = piers[fullPier];
        let currentShipEmpty = shipsEmpty[0];
        if (currentShipEmpty) {
            currentPierFull.isBusy = true;
            moveShip(currentShipEmpty, currentPierFull.coordinates);
            shipsEmpty = shipsEmpty.slice(1);
            shipsEmpty.map((ship: Graphics) => {
                moveShip(ship, { x: ship.x - 110, y: ship.y })
            })
            setTimeout(() => {
                currentPierFull.isBusy = false;
                currentPierFull.pier.clear();
                currentPierFull.pier.lineStyle(2, 0xFFFF00);
                currentPierFull.pier.beginFill();
                currentPierFull.pier.drawRect(0, currentPierFull.coordinates.y, 50, 100);
                currentPierFull.pier.endFill()
                currentPierFull.ifFull = false;
                moveShip(currentShipEmpty, { x: 1500, y: 450 })
            }, 5000)
        }
    }

    let emptyPier = checkEmptyPier(piers);
    if (emptyPier !== -1) {
        let currentPier = piers[emptyPier];
        let currentShipFull = shipsFull[0];
        if (currentShipFull) {
            currentPier.isBusy = true;
            moveShip(currentShipFull, piers[emptyPier].coordinates);
            shipsFull = shipsFull.slice(1);
            shipsFull.map((ship: Graphics) => {
                moveShip(ship, { x: ship.x - 110, y: ship.y })
            })
            setTimeout(() => {
                debugger
                currentPier.isBusy = false;
                currentPier.pier.clear();
                currentPier.pier.lineStyle(2, 0xFFFF00);
                currentPier.pier.beginFill(0xFFFF00);
                currentPier.pier.drawRect(0, currentPier.coordinates.y, 50, 100);
                currentPier.pier.endFill();
                currentPier.ifFull = true;
                moveShip(currentShipFull, { x: 1500, y: 450 })
            }, 5000)
        }
    }
}, 1000);

