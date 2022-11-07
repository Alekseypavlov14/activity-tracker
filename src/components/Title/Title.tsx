import { FC } from 'react'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <div className={styles.Title}>
      <span>Activity</span> Tracker
    </div>
  )
}