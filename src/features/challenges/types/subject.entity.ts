import { Subject } from "@features/activities/types/Subject"
import { ChallengeTask } from "./task.entity"

export interface ChallengeSubject extends Subject<ChallengeTask> {}