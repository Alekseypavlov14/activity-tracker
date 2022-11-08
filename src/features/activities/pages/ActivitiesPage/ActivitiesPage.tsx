import { Activity } from '@features/activities/components/Activity/Activity'
import { FC } from 'react'
import { Container } from '@components/Container/Container'
import homeworkIcon from '@assets/activity/homework-icon.png'
import challengeIcon from '@assets/activity/challenge-icon.png'
import todoIcon from '@assets/activity/todo-icon.png'
import styles from './ActivitiesPage.module.css'

interface ActivitiesPageProps {}

export const ActivitiesPage: FC<ActivitiesPageProps> = () => {
  return (
    <div className={styles.ActivitiesPage}>
      <Container>
        <div className={styles.Activities}>
          <Activity 
            icon={homeworkIcon}
            name='Homework'
          />
    
          <Activity 
            icon={challengeIcon}
            name='Challenges'
          />
    
          <Activity 
            icon={todoIcon}
            name='Todos'
          />
        </div>
      </Container>
    </div>
  )
}