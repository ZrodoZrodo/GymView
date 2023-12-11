
import { useState } from 'react';
import './App.css';
import { HorizontalPicker } from './components/horizontalPicker';
import { Week } from './pages/week';
import { AddExercise } from './pages/addExercise';
import { Trening } from './pages/trening';

function App() {

  return (
    <div>
      <Week/>
      {/* <AddExercise/> */}
      {/* <Trening/> */}
    </div>
  ); 
}

export default App;
