import { Sprite, useTick } from "@pixi/react"; 
import { useState } from "react";

let i = 0;

export function Bunny () {
  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  // custom ticker
  useTick(delta => {
    i += 0.05 * delta;

    setX(Math.sin(i) * 100);
    setY(Math.sin(i/1.5) * 100);
    setRotation(-10 + Math.sin(i/10 + Math.PI * 2) * 10);
  });

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={0.5}
      position={[100,100]}
      x={x}
      y={y}
      rotation={rotation}
    />
  );
};