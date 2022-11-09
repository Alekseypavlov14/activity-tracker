import { FC } from 'react'
import { Activity } from '@features/activities/components/Activity/Activity'
import homeworkIcon from '@assets/activity/homework-icon.png'

interface HomeworkActivityProps {}

export const HomeworkActivity: FC<HomeworkActivityProps> = () => {
  return (
    <Activity 
      name='Homework'
      icon={homeworkIcon}
      link={'/homework'}
    />
  )
}