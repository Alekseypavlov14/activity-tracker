import { ChallengeSubject } from "../types/subject.entity"

export namespace ChallengesActions {
  interface ChallengeSubjectData extends Omit<ChallengeSubject, 'id'> {}
  interface ChallengeSubjectId extends Pick<ChallengeSubject, 'id'> {}

  export interface Create extends ChallengeSubjectData {}

  export interface Update extends ChallengeSubjectId {
    newValues: Partial<ChallengeSubjectData>
  }

  export interface Delete extends ChallengeSubjectId {}
}