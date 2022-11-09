import { FC } from 'react'
import { Container } from '@components/Container/Container'
import styles from './HomeworkPage.module.css'

interface HomeworkPageProps {}

export const HomeworkPage: FC<HomeworkPageProps> = () => {
  return (
    <div className={styles.HomeworkPage}>
      <Container>
        Homework
      </Container>
    </div>
  )
}