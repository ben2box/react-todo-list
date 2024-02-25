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

  const handleFilterCompleteTodos = () => {
    const newTodos = todos.filter(todo => todo.completed === true)
    setTodos(newTodos)
  }

  const handleFilterIncompleteTodos = () => {
    const newTodos = todos.filter(todo => todo.completed === false)
    setTodos(newTodos)
  }

  return (
    <>
    <TodoComposer handleAddTodo={handleAddTodo} />
    <TabsNav 
      handleFilterCompleteTodos={handleFilterCompleteTodos}
      handleFilterIncompleteTodos={handleFilterIncompleteTodos}
    />
    <ul>
      {todos.filter().map(todo =>(
        <Todo 
          key ={todo.id}
          todo ={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ) )}
    </ul>
    </>


  )
}