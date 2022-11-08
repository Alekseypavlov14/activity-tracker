import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "@store"
import { ColorEntity } from "./color.entity"

interface InitialState {
  list: ColorEntity[]
  default: ColorEntity
}

const initialState: InitialState = {
  list: [
    { value: '#005eff', id: 1 },
    { value: '#44944A', id: 2 },
    { value: '#FF2400', id: 3 },
    { value: '#8b00ff', id: 4 },
    { value: '#FFD700', id: 5 },
  ],
  default: { id: 0, value: '#000' }
}

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {}
})

export const colorReducer = colorSlice.reducer
export const colorsSelector = (state: AppState) => state.colors.list
export const defaultColorSelector = (state: AppState) => state.colors.default