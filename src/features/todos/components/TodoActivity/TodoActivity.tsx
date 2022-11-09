import { FC } from 'react'
import { Activity } from '@features/activities/components/Activity/Activity'
import todoIcon from '@assets/activity/todo-icon.png'

interface TodoActivityProps {}

export const TodoActivity: FC<TodoActivityProps> = () => {
  return (
    <Activity 
      name='Todos'
      icon={todoIcon}
      link={'/todos'}
    />
  )
}