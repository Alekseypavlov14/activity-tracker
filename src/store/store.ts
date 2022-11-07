import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "@features/todos/todo.slice"
import { colorReducer } from "@features/colors/color.slice"
import { homeworkReducer } from "@features/homework/homework.slice"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    colors: colorReducer,
    homework: homeworkReducer
  }
})

export type AppState = ReturnType<typeof store.getState>