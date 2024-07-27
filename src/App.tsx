import { Stage } from '@pixi/react';
import MainApp from './page/MainApp';
import { useReSizeContext } from './contexts/reSizeContext';

function App() {
  
  const {width, height} = useReSizeContext()
  
  return (
    <Stage width={width} height={height} raf={false} options={{ backgroundColor: 0x1099bb, resizeTo: window, antialias: true}}>
      <MainApp />
    </Stage>
  )
}

export default App
