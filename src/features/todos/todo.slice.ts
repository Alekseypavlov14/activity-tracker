import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@store'
import { TodoEntity } from './todo.entity'

interface InitialState {
  list: TodoEntity[]
}

const initialState: InitialState = {
  list: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
})

export const todoReducer = todoSlice.reducer
export const todoSelector = (state: AppState) => state.todos