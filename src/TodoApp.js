import "./App.css";
import { useState } from "react";
import { Task } from "./components/Task";
function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState(["first task"]);
  // const [taskDone, setTaskState] = useState(false);

  const updateTask = (event) => {
    setNewTask(event.target.value);
  };

  const handeldelete = (id) => {
    // console.log(id);
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTask(newTaskList);
  };

  const completeTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  // setTask(tasks.concat("first task"));
  // console.log(newTask);
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={updateTask} /> <br />
        <button
          onClick={() => {
            const newTaskv2 = {
              id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
              taskDescription: newTask,
              completed: false,
            };
            setTask([...tasks, newTaskv2]);
          }}
        >
          Add Task
        </button>
      </div>
      <div className="list">
        <ul>
          {tasks.map((task, key) => {
            return (
              <Task
                k={key}
                id={task.id}
                task={task.taskDescription}
                taskDone={task.completed}
                completeTask={completeTask}
                handeldelete={handeldelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
