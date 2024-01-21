import * as TWEEN from '@tweenjs/tween.js';
import createApplication from "./components/application/application";
import moveShip from './components/moveShip/moveShip';
import createPort from "./components/port/port";
import createShips from './components/ship/ship';

let app = createApplication();
const piers = createPort(app);
const ships = [];

document.body.appendChild(app.view);

let firstToEnter = { x: 300, y: 250};

let timerId = setInterval(function () {
    let ship = createShips();
    app.stage.addChild(ship);
    moveShip(ship, firstToEnter);
    firstToEnter.x +=110;
    ships.push(ship);
    if(ships.length===7){
        clearInterval(timerId)
    }
},
    2000);

app.ticker.add(() => {
    TWEEN.update(); 
});

