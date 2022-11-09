import { TodoTask } from "../types/task.entity"

export namespace TodoActions {
  interface TodoData extends Omit<TodoTask, 'id'> {}
  interface TodoId extends Pick<TodoTask, 'id'> {}

  export interface Create extends TodoData {}

  export interface Update {
    newValues: Partial<TodoData>
    id: number
  }
  
  export interface Delete extends TodoId {}
}