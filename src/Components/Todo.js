export default function Todo({ todo, handleUpdateTodo, handleRemoveTodo }){
  
    const handleCompleteToggle = () => handleUpdateTodo({
      ...todo,
      completed: !todo.completed
    })

    const handleDeleteClick = () => handleRemoveTodo(todo.id)
  
    return (
      <li>
        {todo.label}
        <button onClick={handleCompleteToggle}>{todo.completed ? 'Complete' : 'Incomplete'}</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    )
  }
  //TODO: Later --> Add onClick event in button to toggle completed/!completed ---->>>> DONE?
  //TODO: Add a ternary operator to button to change style/color weather completed or !completed