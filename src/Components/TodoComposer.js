import * as React from "react";


function createTodo (label) {
    return {
        id: Math.floor(Math.random() * 10000),
        label: label,
        completed: false
    }
}


export default function InputField({ handleAddTodo }) {
    
    const [label, setLabel] = React.useState('')

    const handleUpdateLabel = e => setLabel(e.target.value)

    const handleAddTodoClick = () => {
        const todo = createTodo(label)
        handleAddTodo(todo)
        setLabel('')
    }

  return (
    <div id="inputDiv" className="row">
      <input
        type="text"
        placeholder="Add a new task to the list"
        className="col form-control"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button onClick={handleAddTodoClick} className="col-4 btn btn-primary" type="submit" disabled={label.length === 0}>Add Task</button>
    </div>
  );
}
