'use client'
import { SignOutFunc } from '@/actions/sign-out'
import React from 'react'

export default function ButtonDoctor() {
  const handleSignOut = async () => {
    await SignOutFunc()
  }
  return (
    <div>
      <button onClick={handleSignOut}>Выйти</button>
    </div>
  )
}
