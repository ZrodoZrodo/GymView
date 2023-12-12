
import { useState } from 'react';
import './App.css';
import { HorizontalPicker } from './components/horizontalPicker';

import { Week } from './pages/week';
import { AddExercise } from './pages/addExercise';
import { Trening } from './pages/trening';
import { HeroPage } from './pages/heroPage';

function App() {

  return (
    <div>
      <HeroPage/>
    
      {/* <AddExercise/> */}
      {/* <Trening/> */}
    </div>
  ); 
}

export default App;
