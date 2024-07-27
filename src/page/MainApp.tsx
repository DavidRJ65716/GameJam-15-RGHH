import { useApp } from "@pixi/react";
import run from "../components/run";

export default function MainApp() {
    const app = useApp()
    app.stage.removeChildren()
    run(app)
    app.start()

    
    return (
        <></>
    )
}