import { Time } from "./Time"

export interface Task<T extends Time> {
  id: number
  name: string
  time: T
  isDone: boolean
}