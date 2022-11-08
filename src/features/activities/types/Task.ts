export interface Task<Time> {
  id: number
  name: string
  time: Time
  isDone: boolean
}