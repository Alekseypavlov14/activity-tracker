import { HomeworkSubject } from "@features/homework/types/subject.entity"

export namespace HomeworkActions {
  interface HomeworkSubjectData extends Omit<HomeworkSubject, 'id'> {}
  interface HomeworkSubjectId extends Pick<HomeworkSubject, 'id'> {}

  export interface Create extends HomeworkSubjectData {}
  
  export interface Update extends HomeworkSubjectId {
    newValues: Partial<HomeworkSubjectData>
  }

  export interface Delete extends HomeworkSubjectId {}
}