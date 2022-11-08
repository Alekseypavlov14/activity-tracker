import { CSSProperties, FC } from 'react'
import { useColor } from '@features/colors/hooks/useColor'
import styles from './Activity.module.css'

interface ActivityProps {
  name: string
  icon: string
}

export const Activity: FC<ActivityProps> = ({ name, icon }) => {
  return (
    <div className={styles.Activity}>
      <img src={icon} className={styles.ActivityIcon} />
      <div className={styles.ActivityName}>
        {name}
      </div>
    </div>
  )
}