import Todo from './Todo'
import styles from './TodoList.module.css'
import { TodoItem, TodoItems } from './Types'

interface Props {
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  todos: TodoItems
}

function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo: TodoItem) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}
export default TodoList
