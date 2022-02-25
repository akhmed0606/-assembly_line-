## 🚀 How to launch:

> Please clone the repo and open it in your preferred text editor.
 Then, please run: - ``npm i && npm start``

 ```
https://github.com/akhmed0606/-assembly_line-.git
```
<br>

## 💡 Overview

Oftentimes, processes can be represented as a series of stages. The concept of an assembly line can be a useful way to organize production logic, list of tasks in varying degrees of completion, or track individuals progressing through a series of milestones.

## ⚙ Functional requirements

The AssemblyLine component (the container) will accept an array of stages in its props.
The stages must be displayed in order of the input array.
Each stage contains a list of tasks.
Task name will be inputted through an input element using ENTER. 

## ⚙ Expecting behaviour

- On LEFT-CLICK assembly item (or task) should move on top of the next stage.
- On RIGHT-CLICK assembly item (or task) should move at the bottom of the previous stage.
- On LEFT-CLICK an assembly item in the last stage will delete off the assembly line (as the task finished moving through the assembly line).
RIGHT-CLICK an assembly item in the first stage will delete it from the assembly line (the task is no longer needed)
- Task input only creates one task at a time and only adds a newly created task in the first stage.
- Task should only be moved one stage at a time.
