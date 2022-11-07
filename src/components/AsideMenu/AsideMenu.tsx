import { FC } from 'react'
import styles from './AsideMenu.module.css'
import cn from 'classnames'

interface AsideMenuProps {
  isOpened: boolean
}

export const AsideMenu: FC<AsideMenuProps> = ({ isOpened }) => {
  const classNames = cn(
    styles.AsideMenu,
    isOpened && styles.Opened
  )

  return (
    <div className={classNames}>
      Aside Menu
    </div>
  )
}