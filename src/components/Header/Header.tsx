import { FC, useState } from 'react'
import { BurgerButton } from 'standard-ui'
import { AsideMenu } from '@components/AsideMenu/AsideMenu'
import { Title } from '@components/Title/Title'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isOpened, setOpened] = useState<boolean>(false)

  const openMenu = () => setOpened(true)
  const closeMenu = () => setOpened(false)

  return (
    <div className={styles.Header}>
      <AsideMenu isOpened={isOpened} />

      <BurgerButton 
        className={styles.BurgerButton}
        onOpen={openMenu} 
        onClose={closeMenu} 
      />

      <Title />
    </div>
  )
}