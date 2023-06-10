import React, { useState } from "react";

// Pass the list of categories to this component from App
function NewTaskForm({categories, onTaskFormSubmit}) {
  // Next, update this form to be a controlled component, so that all form inputs are captured in state.
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) =>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {/* update this component to display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task. */}
          {categories.map((category) => (category!== "All" ? <option key={category}>{category}</option> : null)
          
          // {console.log(category)}
          
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
