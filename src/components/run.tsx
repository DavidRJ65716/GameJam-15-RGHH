import { Application, Container, ICanvas } from "pixi.js";
import { Bunny } from "../sprites/bunny";
import { useEffect } from "react";



export default function run(app: Application<ICanvas>) {
        
    const container = new Container();
    app.stage.addChild(container)
    container.x = app.screen.width
    container.y = app.screen.height
    
    
    useEffect(() => {
        container.x = app.screen.width
        container.y = app.screen.height
    },[app.screen.height, app.screen.width, container])
    
    Bunny(app)
}