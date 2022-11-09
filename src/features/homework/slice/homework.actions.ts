import { HomeworkSubject } from "@features/homework/types/subject.entity"

export namespace HomeworkActions {
  interface HomeworkSubjectData extends Omit<HomeworkSubject, 'id'> {}
  interface HomeworkSubjectId extends Pick<HomeworkSubject, 'id'> {}

  export interface Create extends HomeworkSubjectData {}
  
  export interface Update {
    newValues: Partial<HomeworkSubjectData>
    id: number
  }

  export interface Delete extends HomeworkSubjectId {}
}