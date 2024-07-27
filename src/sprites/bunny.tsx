import { useTick } from "@pixi/react";
import { Application, ICanvas, Texture, Sprite } from "pixi.js";
import { useEffect } from "react";

interface keys {
  [key: string] : boolean
}

export function Bunny (app: Application<ICanvas>) {
   // states

   const player = new Sprite(Texture.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"))
   player.anchor.set(0.5)
   player.x = app.screen.width/2
   player.y = app.screen.height/2
   player.scale.set(5,5)
   const keyPress : keys = {'w':false,'s':false,'a':false,'d':false, ' ':false}

   app.stage.addChild(player)
 
   useEffect(() => {

    window.addEventListener("keydown", keyDown)
    window.addEventListener("keyup", keyUp)
    console.log(JSON.stringify(keyPress))
  },[ keyPress])

  const keyDown = (e: KeyboardEvent) => {
    keyPress[e.key] = true
  }

  const keyUp = (e: KeyboardEvent) => {
    keyPress[e.key] = false
  }

  useTick(gameLoop)

  function gameLoop(){
    if(keyPress['w']) player.y -= 5
    if(keyPress['s']) player.y += 5
    if(keyPress['a']) player.x -= 5
    if(keyPress['d']) player.x += 5
    if(keyPress[' ']) player.y -= 5
  }
};