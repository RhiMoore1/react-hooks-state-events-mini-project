import React from "react";

// props will need category, text, onClick from TaskList(parent)
function Task({category, text, onDeleteTask }) {
  //console.log(category, text, onDeleteTask)
  //console.log(`category: ${category}`)
  //console.log(`text: ${text}`)

  // handleClick receives onDeleteTask from App
  function handleClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      {/* Update the Task component so that it shows the task's text and category. */}
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* When the delete button is clicked, the task should be removed from the list. */}
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
