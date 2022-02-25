import { useState,useEffect,KeyboardEvent } from 'react'
import { Istages } from './interface';
import './App.css';

const AssemblyLine = ( {stages }: Istages) => {
  const [tasks, setTasks] = useState<any[]>([])
  const [task, setTask] = useState<any>("")
 
 useEffect(() => {
   setTasks(stages.map(() => []) as any)
 },[stages])

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
    
  };
 
  const onEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter'){
     if (stages.length === 0)
      return;
    }
     setTasks((tasks): any => [[...tasks[0], task], ...tasks.slice(1)])
     setTask("")
  }
  
  return (
    <>
     <button onClick={() => {if (stages.length === 0) {
              return;
            }
            setTasks((tasks) => [[...tasks[0], task], ...tasks.slice(1)]);
            setTask("")}} className='btnAdd'>Add an item:</button>
     <input type='text' id='taskInput' onChange={handleChange} value={task} onKeyPress={onEnter} />
     {task}
    </>
  )
}

function App() {
  return (
    <div className="App">
       <AssemblyLine stages={["Idea", "Development", "Testing", "Deployment"]} />
    </div>
  );
}

export default App;
