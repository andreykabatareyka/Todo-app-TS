import Todo from './Todo'
import styles from './TodoList.module.css'
import { TodoItem } from './Types'

//model start
interface Props {
  deleteTodo: (id: string) => void //эвент - createEvent
  toggleTodo: (id: string) => void //эвент - createEvent
  todos: TodoItem[] //состояние - createStore
}

function TodoList({ todos, deleteTodo, toggleTodo }: Props) {
  //model end
  //view start
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo: TodoItem) => (
        <Todo
          key={todo.id}
          todo={todo} //controller  //эвент - createEvent
          deleteTodo={deleteTodo} //controller  //эвент - createEvent
          toggleTodo={toggleTodo} //controller  //эвент - createEvent
        />
      ))}
    </div>
  )
}
//view end
export default TodoList
