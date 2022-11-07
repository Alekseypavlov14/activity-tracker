import { createSlice } from '@reduxjs/toolkit'
import { LocalStorage } from '@utils/LocalStorage'
import { AppState } from '@store'
import { TodoEntity } from './todo.entity'

const TodosStorage = new LocalStorage<TodoEntity>('todos')

interface InitialState {
  list: TodoEntity[]
}

const initialState: InitialState = {
  list: TodosStorage.getValue()
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
})

export const todoReducer = todoSlice.reducer
export const todoSelector = (state: AppState) => state.todos