import { Stage, Container, Text } from '@pixi/react';
import { TextStyle, BlurFilter } from 'pixi.js';
import { useEffect, useMemo, useState } from 'react';
import { Bunny } from './sprites/bunny';
import './App.css'
import { useReSizeContext } from './contexts/reSizeContext';


const style = new TextStyle( {
  align: "center",
  fontWeight: '800',
  dropShadow: true,
  dropShadowAlpha: 0.6,
  dropShadowAngle: 1,
  dropShadowBlur: 5,
  wordWrap: true,
  fill: ["white", "#cccccc"]
})

function App() {
  
  const {width, height} = useReSizeContext()
  
  return (
    <Stage width={width} height={height} raf={false} options={{ backgroundColor: 0x1099bb, resizeTo: window}}>
      <Container position={[100,100]}>
        <Bunny />
      </Container>
      <Text
            text={`${width}\nx\n${height}`}
            style={style}
            anchor={0.5}
            x={width / 2}
            y={height / 2}
          />
    </Stage>
  )
}

export default App
