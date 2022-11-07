import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/Layout/Layout'
import { CalendarPage } from '@features/calendar/pages/CalendarPage/CalendarPage'
import './App.css'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<div></div>} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Route>
      </Routes>
    </>
  )
}