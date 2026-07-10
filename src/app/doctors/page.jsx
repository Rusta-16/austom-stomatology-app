'use client'
import React from 'react'
import RegistrForm from '../forms/RegistrForm'
import ButtonDoctor from '../components/ButtonDoctor'
import LoginForm from '../forms/LoginForm'
import { useSession } from 'next-auth/react'
export default function DoctorsPage() {
  const {data: seccion, status} = useSession()
  console.log('session',seccion)
  console.log('status',status)
  return (
    <div>
      <RegistrForm />
      <LoginForm />
      <ButtonDoctor />
    </div>
  )
  }
