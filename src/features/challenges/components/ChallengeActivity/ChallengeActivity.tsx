import { FC } from 'react'
import { Activity } from '@features/activities/components/Activity/Activity'
import challengeIcon from '@assets/activity/challenge-icon.png'

interface ChallengeActivityProps {}

export const ChallengeActivity: FC<ChallengeActivityProps> = () => {
  return (
    <Activity 
      name={'Challenges'}
      icon={challengeIcon}
      link={'/challenges'}
    />
  )
}