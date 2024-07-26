import { Sprite, AnimatedSprite, useTick,render } from "@pixi/react"; 
import { useState,useEffect } from "react";

export function Bunny () {
  // states
  const [x, setX] = useState(500);
  const [y, setY] = useState(500);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    const keyDown = (e: KeyboardEvent) => {
      switch(e.key){
        case 'w': setY(y-1);
        break
        case 's': setY(y+1);
        break
        case 'a': setX(x-1);
        break
        case 'd': setX(x+1);
        break
      }
    }

    window.addEventListener("keydown", keyDown)
  },[])

  function gameLoop(){

  }


    
  console.log(y + " " +x)

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      x={x}
      y={y}
      rotation={rotation}
    />
  );
};