import React from 'react'
import Header from './components/ui/Header'
import StartPage from './components/StartPage'
import AdvantagesPage from './components/AdvantagesPage'
import ServicesPage from './components/ServicesPage'


export default function page() {
  return (
    <main>
      <StartPage />
      <AdvantagesPage />
      <ServicesPage />
    </main>
  )
}
