import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/Layout/Layout'
import { ActivitiesPage } from '@features/activities/pages/ActivitiesPage/ActivitiesPage'
import { CalendarPage } from '@features/calendar/pages/CalendarPage/CalendarPage'
import { HomeworkPage } from '@features/homework/pages/HomeworkPage/HomeworkPage'
import { ChallengesPage } from '@features/challenges/pages/ChallengesPage/ChallengesPage'
import { TodosPage } from '@features/todos/pages/TodosPage/TodosPage'
import './App.css'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<ActivitiesPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/homework' element={<HomeworkPage />} />
          <Route path='/challenges' element={<ChallengesPage />} />
          <Route path='/todos' element={<TodosPage />} />
        </Route>
      </Routes>
    </>
  )
}