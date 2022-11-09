import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
//model start
interface Props {
  addTodo: (text: string) => void
}
function TodoForm({ addTodo }: Props) {
  const [text, setTetxt] = useState('') //состояние - createStore
  const onSubmitHandler = (event: any) => {
    event.preventDefault()
    addTodo(text) //эвент - createEvent
    setTetxt('') //эвент - createEvent
  }
  //model end
  //view start
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler} /* controller эвент - createEvent */>
        <input
          value={text}
          onChange={(e) => setTetxt(e.target.value)} //controller //эвент - createEvent
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
