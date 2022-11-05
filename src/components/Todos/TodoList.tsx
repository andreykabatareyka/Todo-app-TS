import Todo from './Todo'
import styles from './TodoList.module.css'
import { TodoItem } from './Types'

//model start
interface Props {
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  todos: TodoItem[]
}

function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  //model end
  //view start
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo: TodoItem) => (
        <Todo
          key={todo.id} //controller
          todo={todo} //controller
          deleteTodo={deleteTodo} //controller
          toggleTodo={toggleTodo} //controller
        />
      ))}
    </div>
  )
}
//view end
export default TodoList
