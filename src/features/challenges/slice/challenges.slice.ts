import { AppState } from '@store'
import { createSlice } from "@reduxjs/toolkit"
import { ChallengeSubject } from '../types/subject.entity'
import { LocalStorage } from '@utils/LocalStorage'

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
  reducers: {}
})

export const challengesReducer = challengesSlice.reducer
export const challengesSelector = (state: AppState) => state.challenges.list