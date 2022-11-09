import { FC } from 'react'
import { Container } from '@components/Container/Container'
import styles from './ChallengesPage.module.css'

interface ChallengesPageProps {}

export const ChallengesPage: FC<ChallengesPageProps> = () => {
  return (
    <div className={styles.ChallengesPage}>
      <Container>
        Challenges
      </Container>
    </div>
  )
}