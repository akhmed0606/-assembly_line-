import { useState,useEffect } from 'react'
import { Istages } from './interface';
import './App.css';

const AssemblyLine = ( {stages }: Istages) => {
  const [tasks, setTasks] = useState<any[]>([])
  const [task, setTask] = useState<any>("")
 
 useEffect(() => {
   setTasks(stages.map(() => []) as any)
 },[])

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
    
  };

  
  return (
    <>
     <button onClick={() => setTask(task)} className='btnAdd'>Add an item:</button>
     <input type='text' id='taskInput' onChange={handleChange} value={task}/>
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
