import { Stage, Container, Text } from '@pixi/react';
import { TextStyle, BlurFilter } from 'pixi.js';
import { useMemo } from 'react';
import { Bunny } from './bunny';
import './App.css'

function App() {
  
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  
  
  return (
    <Stage width={1000} options={{ autoDensity: true,  background: 0x1099bb }}>

      <Container position={[0,0]}>
      <Bunny/>
      <Text
          text="Hello World"
          anchor={0.5}
          x={220}
          y={150}
          filters={[blurFilter]}
          style={
            new TextStyle({
              align: 'center',
              fill: '0xffffff',
              fontSize: 40,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: '#E72264',
              dropShadowDistance: 6,
            })
          }
          />
      </Container>
    </Stage>
  )
}

export default App
