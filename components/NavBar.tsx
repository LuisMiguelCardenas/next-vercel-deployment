import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
  
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(item => (
          <ActiveLink key={item.href} text={item.text} href={item.href}/>
        ))
      }
    </nav>
  )
}
