import { Task } from "@features/activities/types/Task"
import { DateRange } from "@features/activities/types/DateRange"

export interface ChallengeTask extends Task<DateRange> {}