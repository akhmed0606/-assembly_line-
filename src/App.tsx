import { useState, useEffect, KeyboardEvent } from "react";
import { Istages } from "./interface";
// 1) add  the interface to determine what are the values being used
import "./App.css";

const AssemblyLine = ({ stages }: Istages) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState<string>("");

  // 3) when stages is passed, we create tasks with empty array

  useEffect(() => {
    setTasks(stages.map(() => []) as any);
  }, [stages]);

  // 4) Take the value form input and update state variable

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
  };

  // 13)  update task onEnter keypress

  const onEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (stages.length === 0) {
        return;
      }
      setTasks((tasks): any => [[...tasks[0], task], ...tasks.slice(1)]);
      setTask("");
    }
  };

  return (
    <>
      <div className="inputWrap">
        {/* 5) onClick and if stages is empty, do nothing. if not empty, update tasks */}
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
          onKeyPress={onEnter}
        />
      </div>
      {/* 6) map through the stages [idea, development, testing, deployment] */}
      {stages.map((stage, i) => {
        return (
          <div key={`${stage}-${i}`} className="stageContainer">
            <div className="stageWrapper">
              <h3 className="stages">{stage}</h3>
            </div>

            {/* 7) ?? [] means that if tasks[i] does not exist, use an empty array [] instead */}

            {(tasks[i] ?? [])?.map((task: string, j: string) => (
              <button
                className="taskBtn"
                key={`${task}-${j}`}
                // onclick is our left click
                onClick={() => {
                  setTasks((tasks) =>
                    i === 0
                      ? [
                          // 8) if it's first array, and we left click, then we take out the text from array.

                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                      : [
                          // 9) if it's not first array, and we left click, then we move to previous array
                          ...tasks.slice(0, i - 1),
                          [...tasks[i - 1], task],
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                  );
                }}
                // 10) oncontextmenu is our right click
                onContextMenu={() => {
                  setTasks((tasks) =>
                    i === tasks.length - 1
                      ? [
                          // 11) if it's last array, and we right click, then we take out the text from array.
                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          ...tasks.slice(i + 1),
                        ]
                      : [
                          // 12) if it's not last array, then we move to next array
                          ...tasks.slice(0, i),
                          [...tasks[i].slice(0, j), ...tasks[i].slice(j + 1)],
                          [...tasks[i + 1], task],
                          ...tasks.slice(i + 2),
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
      {/* 2) Pass stages to Assemblyline component */}
      <AssemblyLine stages={["Idea", "Development", "Testing", "Deployment"]} />
    </div>
  );
}

export default App;
