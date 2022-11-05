import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from './components/Todos/Types'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'
//model start
function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }
  const resetTodoHandler = () => {
    setTodos([])
  }
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  //model end

  //view start
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount} //controller
          resetTodos={resetTodoHandler} //controller
          deleteCompletedTodos={deleteCompletedTodosHandler} //controller
        />
      )}

      <TodoList
        todos={todos} //controller
        deleteTodo={deleteTodoHandler} //controller
        toggleTodo={toggleTodoHandler} //controller
      />
      {!!completedTodosCount && (
        <h2>
          {`You have completed ${completedTodosCount}  ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
        </h2>
      )}
    </div>
  )
}
//view end
export default App
