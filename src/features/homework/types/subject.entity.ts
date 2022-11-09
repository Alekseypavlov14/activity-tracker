import { Subject } from "@features/activities/types/Subject"
import { HomeworkTask } from "./task.entity"

export interface HomeworkSubject extends Subject<HomeworkTask> {}