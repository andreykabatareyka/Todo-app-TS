import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import { TodoItem } from './Types'
import styles from './Todo.module.css'

interface Props {
  todo: TodoItem
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
}

function Todo({ todo, deleteTodo, toggleTodo }: Props) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.completedTodo} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}
export default Todo
