import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  console.log(tasks)
  {/* Pass down the task data from App to TaskList, and display each task using the Task component. Make sure to use a key prop! */}
  const taskList = tasks.map((task) => (
    <Task key={task.text} category={task.category} text={task.text} onDeleteTask={onDeleteTask}/>
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
