export interface TodoItem {
  id: string
  text: string
  isCompleted: boolean
}

export interface TodoItems extends Array<TodoItem> {}
