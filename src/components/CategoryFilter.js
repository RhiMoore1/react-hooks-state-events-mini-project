import React from "react";

// Pass the list of categories to this component from App
function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {
  console.log(categories)
  // the buttons will need a key prop equal to the category
  const buttonList = categories.map((category) => {
    // Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button key={category} className={className} onClick={() => onSelectedCategory(category)}> {category} </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
