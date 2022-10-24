import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

interface Props {
  addTodo: (text: string) => void
}
function TodoForm({ addTodo }: Props) {
  const [text, setTetxt] = useState('')
  const onSubmitHandler = (event: any) => {
    event.preventDefault()
    addTodo(text)
    setTetxt('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(e) => setTetxt(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default TodoForm
