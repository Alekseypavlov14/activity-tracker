import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LocalStorage } from "@utils/LocalStorage"
import { HomeworkSubject } from "@features/homework/types/subject.entity"
import { HomeworkActions } from "./homework.actions"
import { generateId } from "@utils/generateId"
import { AppState } from "@store"

const HomeworkStorage = new LocalStorage<HomeworkSubject>('homework')

interface InitialState {
  list: HomeworkSubject[]
}

const initialState: InitialState = {
  list: HomeworkStorage.getValue()
}

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
    create(state, action: PayloadAction<HomeworkActions.Create>) {
      const homeworkSubjectData = action.payload

      const ids = state.list.map(subject => subject.id)

      const newHomeworkSubject: HomeworkSubject = {
        ...homeworkSubjectData, 
        id: generateId(ids)
      }

      state.list.unshift(newHomeworkSubject)
      HomeworkStorage.setValue(state.list)
    },
    update(state, action: PayloadAction<HomeworkActions.Update>) {
      const newValues = action.payload.newValues
      const subjectId = action.payload.id

      const subject = state.list.find(subject => subject.id === subjectId)

      if (!subject) return state

      Object.assign(subject, newValues)

      HomeworkStorage.setValue(state.list)
    },
    delete(state, action: PayloadAction<HomeworkActions.Delete>) {
      const subjectId = action.payload.id

      state.list = state.list.filter(subject => subject.id !== subjectId)

      HomeworkStorage.setValue(state.list)
    }
  }
})

export const homeworkReducer = homeworkSlice.reducer
export const { create, update } = homeworkSlice.actions
export const homeworkSelector = (state: AppState) => state.homework.list