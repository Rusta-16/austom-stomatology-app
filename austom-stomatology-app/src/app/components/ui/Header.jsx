'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {

  const [showHumburgerMenu, setshowHumburgerMenu] = useState(false)

  const navHamburger = [
    {
      title: 'О нас',
      path: '#'
    },
    {
      title: 'Услуги',
      path: '#'
    },
    {
      title: 'Врачи',
      path: '#'
    },
    {
      title: 'Контакты',
      path: '#'
    },
    {
      title: 'Отзывы',
      path: '#'
    }
  ]

  function handelNav() {
    setshowHumburgerMenu(!showHumburgerMenu)
  }
  return (
    <header className='header'>
      <button id='humburgerBut' onClick={handelNav} className={showHumburgerMenu ? 'menuShow' : ""}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link href="/" className='logo'>
        <Image src="/logo_full_pink.png" alt='Логотип' width={150} height={50}></Image>
      </Link>
      <nav className={showHumburgerMenu ? 'showNavMobile' : ""}>
        {
          navHamburger.map((item, id) => {
            return (
              <Link key={id} href={item.path}>{item.title}</Link>
            )
          })
        }
      </nav>
      <div className='butForPhoneWithLocation'>
        <Link href="/">
          <Image src='/Location.png' alt='карта' width={35} height={35}></Image>
          <Image src='/phone.png' alt='телефон' width={35} height={35}></Image>
        </Link>
      </div>
    </header>
  )
}
