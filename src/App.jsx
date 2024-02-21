import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

import "./App.css";

function App() {
  const [tasksList, setTasksList] = useState([]);

  const addTask = (task) => {
    setTasksList([...tasksList, task]);
    console.log(tasksList);
  };

  const deleteTask = (taskId) => {
    const newTasksList =  tasksList.filter(task => task.id !== taskId);
    setTasksList(newTasksList);
  }

  const changeTaskStatus = (taskId) => {
    const taskIndex = tasksList.findIndex((task) => task.id === taskId);
    const taskChanged = { ...tasksList[taskIndex], isDone: !tasksList[taskIndex].isDone }
    const newTasksList = tasksList.map((task) => task.id === taskId ? taskChanged : task);
    setTasksList(newTasksList)
  }

  return (
    <main>
      <Form addTask={addTask} />
      {
        tasksList.length <= 0 ? 
          <p className="text-center font-bold my-10">Aucune tâche à réaliser</p>
        :
          <Table tasksList={tasksList} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>
      }

    </main>
  );
}

export default App;
