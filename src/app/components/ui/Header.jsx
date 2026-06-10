'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {

  const [showHumburgerMenu, setshowHumburgerMenu] = useState(false)

  const navHamburger = [
    {
      title: 'О нас',
      path: 'start'
    },
    {
      title: 'Услуги',
      path: 'services'
    },
    {
      title: 'Врачи',
      path: 'doctor'
    },
    {
      title: 'Контакты',
      path: 'note'
    },
    {
      title: 'Отзывы',
      path: 'rewiew'
    }
  ]
  function scrollToSection(id) {
    if (typeof window !== 'undefined') {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      })
    }
    if(showHumburgerMenu){
      handelNav()
    }
  }
  function handelNav() {
    setshowHumburgerMenu(!showHumburgerMenu)
  }
  return (
    <header className='header'>
      <div className='butForPhoneWithLocation'>
        <Link href="https://yandex.ru/maps/-/CPTKBBPq" target="_blank" rel="noopener noreferrer">
          <Image src='/header/location.svg' alt='карта' width={10} height={10}></Image>
        </Link>
        <Link href="tel:+79999999999" target="_blank" rel="noopener noreferrer">
          <Image src='/header/phone.svg' alt='телефон' width={10} height={10}></Image>
        </Link>
      </div>
      <Link href="/" className='logo' onClick={()=> scrollToSection('start')}>
        <Image src="/logo_full_pink.png" alt='Логотип' width={150} height={50}></Image>
      </Link>
      <button id='humburgerBut' onClick={handelNav} className={showHumburgerMenu ? 'menuShow' : ""}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={showHumburgerMenu ? 'showNavMobile' : ""}>
        {
          navHamburger.map((item, id) => {
            return (
              <button onClick={() => scrollToSection(item.path)} key={id}>{item.title}</button>
            )
          })
        }
      </nav>

    </header>
  )
}
