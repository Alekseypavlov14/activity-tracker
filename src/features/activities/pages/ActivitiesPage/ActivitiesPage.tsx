import { FC } from 'react'
import { Container } from '@components/Container/Container'
import { HomeworkActivity } from '@features/homework/components/HomeworkActivity/HomeworkActivity'
import { ChallengeActivity } from '@features/challenges/components/ChallengeActivity/ChallengeActivity'
import { TodoActivity } from '@features/todos/components/TodoActivity/TodoActivity'
import styles from './ActivitiesPage.module.css'

interface ActivitiesPageProps {}

export const ActivitiesPage: FC<ActivitiesPageProps> = () => {
  return (
    <div className={styles.ActivitiesPage}>
      <Container>
        <div className={styles.Activities}>
          <HomeworkActivity />
          <ChallengeActivity />
          <TodoActivity />
        </div>
      </Container>
    </div>
  )
}