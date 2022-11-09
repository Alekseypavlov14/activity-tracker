import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ChallengesActions } from './challenges.actions'
import { ChallengeSubject } from '../types/subject.entity'
import { LocalStorage } from '@utils/LocalStorage'
import { generateId } from "@utils/generateId"
import { AppState } from '@store'

const ChallengesStorage = new LocalStorage<ChallengeSubject>('challenges')

interface InitialState {
  list: ChallengeSubject[]
}

const initialState: InitialState = {
  list: ChallengesStorage.getValue()
}

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    create(state, action: PayloadAction<ChallengesActions.Create>) {
      const challengeSubjectData = action.payload

      const ids = state.list.map(subject => subject.id)

      const newChallengeSubject: ChallengeSubject = {
        ...challengeSubjectData, 
        id: generateId(ids)
      }

      state.list.unshift(newChallengeSubject)
      ChallengesStorage.setValue(state.list)
    },
    update(state, action: PayloadAction<ChallengesActions.Update>) {
      const newValues = action.payload.newValues
      const subjectId = action.payload.id

      const subject = state.list.find(subject => subject.id === subjectId)

      if (!subject) return state

      Object.assign(subject, newValues)

      ChallengesStorage.setValue(state.list)
    },
    delete(state, action: PayloadAction<ChallengesActions.Delete>) {
      const subjectId = action.payload.id

      state.list = state.list.filter(subject => subject.id !== subjectId)

      ChallengesStorage.setValue(state.list)
    } 
  }
})

export const challengesReducer = challengesSlice.reducer
export const challengesSelector = (state: AppState) => state.challenges.list