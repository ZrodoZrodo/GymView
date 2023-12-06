
import { useState } from 'react';
import './App.css';
import { HorizontalPicker } from './components/horizontalPicker';

function App() {
  const [scrollTop, setScrollTop] = useState(0)
  return (
    <h1 >
                {// Scroll top: <b>{scrollTop}</b>
        /*<HorizontalPicker background={'black'} color={'orange'} step={2.5} StateHandler={setScrollTop} range={[1,600]}/>*/}
    </h1>
  ); 
}

export default App;
