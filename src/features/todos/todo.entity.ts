import { Task } from "@features/activities/types/Task"
import { SingleDay } from '@features/activities/types/SingleDay'

export interface TodoEntity extends Task<SingleDay> {}