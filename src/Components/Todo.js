import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Todo({ todo, handleUpdateTodo, handleRemoveTodo }){

    const removeIcon = <FontAwesomeIcon icon={faTrash} />

  
    const handleCompleteToggle = () => handleUpdateTodo({
      ...todo,
      completed: !todo.completed
    })

    const handleDeleteClick = () => handleRemoveTodo(todo.id)
  
    return (
      <li className={todo.completed === true ? 'task-complete' : 'task-incomplete'}>
        {todo.label}
        <button 
          className={todo.completed === true ? 'btn btn-success btn-sm' : 'btn btn-warning btn-sm'}
          onClick={handleCompleteToggle}>
          {todo.completed ? 'Complete' : 'Incomplete'}
        </button>

        <button className='btn btn-danger btn-sm' onClick={handleDeleteClick}>{removeIcon}</button>
      </li>
    )
  }
