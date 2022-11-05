import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "@store"
import { HomeworkEntity } from "./homework.entity"

interface InitialState {
  list: HomeworkEntity[]
}

const initialState: InitialState = {
  list: []
}

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {}
})

export const homeworkReducer = homeworkSlice.reducer
export const homeworkSelector = (state: AppState) => state.homework