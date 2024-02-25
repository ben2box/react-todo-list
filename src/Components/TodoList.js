import { useState } from 'react';
import Todo from './Todo.js';
import TodoComposer from './TodoComposer.js'
import TabsNav from './TabsNav.js';

export default function TodoList(){
  const [todos, setTodos] = useState([
    {id: 1, label: 'Learn React', completed: false},
    {id: 2, label: 'Learn about State Management', completed: false},
    {id: 3, label: 'Finish this TODO List', completed: false}
  ])

  const [showComplete, setShowComplete] = useState(true);
  const [showIncomplete, setShowIncomplete] = useState(true);

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
    setTodos(newTodos)
  }

  const handleRemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  //TODO: NOT WORKING AS INTENDED -> DELETES ORIGINAL LIST
  const handleShowComplete = () => {
    // const newTodos = todos.filter(todo => todo.completed === true)
    // setTodos(newTodos)
    setShowComplete(true);
    setShowIncomplete(false);
  }

  //TODO: NOT WORKING AS INTENDED -> DELETES ORIGINAL LIST
  const handleShowIncomplete = () => {
    // const newTodos = todos.filter(todo => todo.completed === false)
    // setTodos(newTodos)
    setShowComplete(false);
    setShowIncomplete(true);
  }

  const handleShowAll = () => {
    setShowComplete(true);
    setShowIncomplete(true);
  }

  return (
    <>
    <TodoComposer handleAddTodo={handleAddTodo} />
    <TabsNav 
      handleShowAll={handleShowAll}
      handleShowComplete={handleShowComplete}
      handleShowIncomplete={handleShowIncomplete}
    />
    <ul>
      {
        todos
          .filter(todo => (showComplete && todo.completed === true) || (showIncomplete && todo.completed === false))
          .map(todo => (
            <Todo 
              key ={todo.id}
              todo ={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          ))
      }
    </ul>
    </>


  )
}