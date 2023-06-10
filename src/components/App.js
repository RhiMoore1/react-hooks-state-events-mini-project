import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] =useState("All");

  // When the form is submitted, add a new task to the list with the text and category from the form. 
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }
  // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed. If the button for "All" is selected, all the tasks should be displayed.
  const showTask = tasks.filter((task) => category === "All" || task.category === category);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      {/* Pass down the task data from App to TaskList */}
      <TaskList tasks={showTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
