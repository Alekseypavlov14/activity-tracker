import { createSlice } from "@reduxjs/toolkit"
import { LocalStorage } from "@utils/LocalStorage"
import { AppState } from "@store"
import { ColorEntity } from "./color.entity"

const ColorsStorage = new LocalStorage<ColorEntity>('colors')

interface InitialState {
  list: ColorEntity[]
}

const initialState: InitialState = {
  list: ColorsStorage.getValue()
}

const colorSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {}
})

export const colorReducer = colorSlice.reducer
export const colorsSelector = (state: AppState) => state.colors