import { FC } from 'react'
import { Container } from '@components/Container/Container'
import styles from './TodosPage.module.css'

interface TodosPageProps {}

export const TodosPage: FC<TodosPageProps> = () => {
  return (
    <div className={styles.TodosPage}>
      <Container>
        Todos
      </Container>
    </div>
  )
}