import { useState, useEffect, KeyboardEvent } from "react";
import { Istages } from "./interface";
import "./App.css";

const AssemblyLine = ({ stages }: Istages) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    setTasks(stages.map(() => []) as any);
  }, [stages]);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
  };

  return (
    <>
    <div>
      <button
        onClick={() => {
          if (stages.length === 0) {
            return;
          }
          setTasks((tasks) => [[...tasks[0], task], ...tasks.slice(1)]);
          setTask(""); 
        }}
        className='btnAdd'
      >
        Add an item:
      </button>
      <input type="text" id="taskInput" onChange={handleChange} value={task} />
      {task}
      </div>
      {stages.map((stage,i) => {
        return (
          
          <div key={`${stage}-${i}`} className='stageContainer'>
            <div className='stages'>
            <h3>{stage}</h3>
            </div>

         {(tasks[i] ?? [])?.map((task: string, j: string) => (
           <button
           
           
           >

           </button>
         ))}
        </div>
        )
      
      })}
     
    </>
  );
};

function App() {
  return (
    <div className="App">
      <AssemblyLine stages={["Idea", "Development", "Testing", "Deployment"]} />
    </div>
  );
}

export default App;
