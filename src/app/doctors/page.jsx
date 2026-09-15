'use client'
import React from 'react'
import RegistrForm from '../forms/RegistrForm'
import ButtonDoctor from '../components/ButtonDoctor'
import LoginForm from '../forms/LoginForm'



export default function DoctorsPage() {
  return (
    <div>
      <meta name="robots" content="noindex, nofollow" />
      <RegistrForm />
      <LoginForm />
      <ButtonDoctor />
    </div>
  )
}
