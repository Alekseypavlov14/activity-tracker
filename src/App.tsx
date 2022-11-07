import { Layout } from '@components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<div></div>} />
        </Route>
      </Routes>
    </>
  )
}