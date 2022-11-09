import { TodoTask } from "../types/task.entity"

export namespace TodoActions {
  interface TodoData extends Omit<TodoTask, 'id'> {}
  interface TodoId extends Pick<TodoTask, 'id'> {}

  export interface Create extends TodoData {}

  export interface Update extends TodoId {
    newValues: Partial<TodoData>
  }
  
  export interface Delete extends TodoId {}
}