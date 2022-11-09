import { FC } from 'react'
import { useNavigate } from 'react-router'
import styles from './Activity.module.css'

interface ActivityProps {
  name: string
  icon: string
  link: string
}

export const Activity: FC<ActivityProps> = ({ name, icon, link }) => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate(link)
  }

  return (
    <div 
      className={styles.Activity}
      onClick={navigateHandler}
    >
      <img src={icon} className={styles.ActivityIcon} />
      <div className={styles.ActivityName}>
        {name}
      </div>
    </div>
  )
}