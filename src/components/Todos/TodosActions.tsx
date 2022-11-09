import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

//model start
interface Props {
  resetTodos: () => void
  deleteCompletedTodos: () => void
  completedTodosExist: boolean
}

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}: Props) {
  //model end
  //view start
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodos} /*controller / эвент createEvent*/
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos} //controller //эвент - createEvent
        disabled={!completedTodosExist} //controller //эвент - createEvent
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
//view end
export default TodosActions
