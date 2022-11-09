import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "@features/todos/slice/todo.slice"
import { colorReducer } from "@features/colors/color.slice"
import { homeworkReducer } from "@features/homework/slice/homework.slice"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    colors: colorReducer,
    homework: homeworkReducer
  }
})

export type AppState = ReturnType<typeof store.getState>