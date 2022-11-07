import { Activity } from "@features/activities/types/Activity"
import { SingleDay } from '@features/activities/types/SingleDay'

export interface TodoEntity extends Activity<SingleDay> {}