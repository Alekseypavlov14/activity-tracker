import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'
import cn from 'classnames'

interface LinkProps {
  children: string
  to: string
}

export const Link: FC<LinkProps> = ({ children, to }) => {
  const activeLinkClassName = cn(styles.Link, styles.ActiveLink)

  return (
    <NavLink
      className={({ isActive }) => 
        isActive ? activeLinkClassName : styles.Link} 
      to={to}
    >
      {children}
    </NavLink>
  )
}