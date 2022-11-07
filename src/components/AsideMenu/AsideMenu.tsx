import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from '@components/Link/Link'
import styles from './AsideMenu.module.css'
import cn from 'classnames'

interface AsideMenuProps {
  isOpened: boolean
}

export const AsideMenu: FC<AsideMenuProps> = ({ isOpened }) => {
  const navigate = useNavigate()

  const createNavigateHandler = (url: string) => {
    return () => navigate(url)
  }

  const classNames = cn(
    styles.AsideMenu,
    isOpened && styles.Opened
  )

  return (
    <div className={classNames}>
      <div 
        className={styles.NavLink}
        onClick={createNavigateHandler('/')}
      >
        <Link to='/'>Home</Link>
      </div>
      
      <div 
        className={styles.NavLink}
        onClick={createNavigateHandler('/calendar')}
      >
        <Link to='/calendar'>Calendar</Link>
      </div>
    </div>
  )
}