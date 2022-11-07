import { createSlice } from "@reduxjs/toolkit"
import { LocalStorage } from "@utils/LocalStorage"
import { AppState } from "@store"
import { HomeworkEntity } from "./homework.entity"

const HomeworkStorage = new LocalStorage<HomeworkEntity>('homework')

interface InitialState {
  list: HomeworkEntity[]
}

const initialState: InitialState = {
  list: HomeworkStorage.getValue()
}

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {}
})

export const homeworkReducer = homeworkSlice.reducer
export const homeworkSelector = (state: AppState) => state.homework