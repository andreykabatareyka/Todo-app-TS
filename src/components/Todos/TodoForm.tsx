import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
//model start
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
  //model end
  //view start
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler} /* controller */>
        <input
          value={text}
          onChange={(e) => setTetxt(e.target.value)} //controller
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
//view end
export default TodoForm
