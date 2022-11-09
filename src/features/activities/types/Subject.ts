import { Task } from "./Task"
import { Time } from "./Time"

export interface Subject<T extends Task<Time>> {
  id: number
  name: string
  tasks: T[]
}