import { useState, useEffect } from "react";
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
          className="btnAdd"
        >
          Add an item:
        </button>
        <input
          type="text"
          id="taskInput"
          onChange={handleChange}
          value={task}
        />
      </div>
      {stages.map((stage, i) => {
        return (
          <div key={`${stage}-${i}`} className="stageContainer">
            <div className="stages">
              <h3>{stage}</h3>
            </div>

            {(tasks[i] ?? [])?.map((task: string, j: string) => (
              <button
                key={`${task}-${j}`}
                onClick={() => {
                  setTasks((tasks) =>
                    i === 0
                      ? [
                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                      : [
                          ...tasks.slice(0, i - 1),
                          [...tasks[i - 1], task],
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                  );
                }}
                onContextMenu={() => {
                  setTasks((tasks) =>
                    i === tasks.length - 1
                      ? [
                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                      : [
                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j),
                            ...tasks[i].slice(j + 1)],
                            [...tasks[i + 1], task],
                            ...tasks.slice(i + 2)
                      ]
                  );
                }}
              >
                {task}
              </button>
            ))}
          </div>
        );
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
