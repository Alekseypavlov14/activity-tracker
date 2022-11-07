import { Calendar } from '@features/calendar/components/Calendar/Calendar'
import { FC } from 'react'
import styles from './CalendarPage.module.css'

interface CalendarPageProps {}

export const CalendarPage: FC<CalendarPageProps> = () => {
  return (
    <div className={styles.CalendarPage}>
      <Calendar />
    </div>
  )
}