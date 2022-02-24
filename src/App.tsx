import { useState,useRef } from 'react'
import { Istages } from './interface';
import './App.css';

const Assembline = ( {stages }: Istages) => {
  const [tasks, setTasks] = useState<string[]>([])
}

function App() {
  return (
    <div className="App">
      <button className='btnAdd'>Add an item:</button>
     <input type='text' id='taskInput' ref={taskRef}/>
    </div>
  );
}

export default App;
