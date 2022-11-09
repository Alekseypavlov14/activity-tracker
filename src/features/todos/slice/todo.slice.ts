import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { LocalStorage } from '@utils/LocalStorage'
import { TodoTask } from '../types/task.entity'
import { AppState } from '@store'
import { TodoActions } from './todo.actions';
import { generateId } from '@utils/generateId';

const TodosStorage = new LocalStorage<TodoTask>('todos')

interface InitialState {
  list: TodoTask[]
}

const initialState: InitialState = {
  list: TodosStorage.getValue()
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create(state, action: PayloadAction<TodoActions.Create>) {
      const todoData = action.payload

      const ids = state.list.map(todo => todo.id)

      const newTodoTask: TodoTask = {
        ...todoData, 
        id: generateId(ids)
      }

      state.list.unshift(newTodoTask)
      TodosStorage.setValue(state.list)
    },
    update(state, action: PayloadAction<TodoActions.Update>) {
      const newValues = action.payload.newValues
      const todoId = action.payload.id

      const todo = state.list.find(todo => todo.id === todoId)

      if (!todo) return state

      Object.assign(todo, newValues)

      TodosStorage.setValue(state.list)
    },
    delete(state, action: PayloadAction<TodoActions.Delete>) {
      const todoId = action.payload.id

      state.list = state.list.filter(subject => subject.id !== todoId)

      TodosStorage.setValue(state.list)
    }
  }
})

export const todoReducer = todoSlice.reducer
export const todoSelector = (state: AppState) => state.todos.list