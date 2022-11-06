import type { Date } from '@features/calendar/types/Date'
import { FC } from 'react'
import styles from './Day.module.css'
import cn from 'classnames'
import { parseDate } from '@features/calendar/utils/parseDate'
import { compareDates } from '@features/calendar/utils/compareDates'

interface DayProps {
  date: Date
}

export const Day: FC<DayProps> = ({ date }) => {
  const today = parseDate(Date.now())

  const isToday = compareDates(date, today)

  const classNames = cn(
    styles.Day,
    isToday && styles.Today
  )

  return (
    <div className={classNames}>
      {date.day}
    </div>
  )
}