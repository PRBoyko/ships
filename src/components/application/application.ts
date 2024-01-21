import { Application } from 'pixi.js';

export default function createApplication() {
    let app = new Application<HTMLCanvasElement>({ width: 1100, height: 600, backgroundColor: 0x0000ff, });
    return app;
}
