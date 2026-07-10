'use client'
import { SignInWithCredentionals } from '@/actions/sign-in'
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react'
import React, { useState } from 'react'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })
  async function handleSubmit(e) {
    e.preventDefault()
   const result =  await SignInWithCredentionals(formData.login,formData.password)
   console.log('result',result)
    
  }
  return (
    <div className='LoginForm' >
      <div className="wrapperForm">
        <h2>Вход в личный кабинет</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <TextField
            className='textfield'
            isRequired
            value={formData.login}
            name='login'
            type='text'
            onChange={(value) => setFormData({ ...formData, login: value })}
            validate={(value) => {
              if (!value) {
                return 'Пожалуйста введите логин'
              }
              return null
            }}
          >
            <Label>Логин</Label>
            <Input className="input" placeholder='логин'></Input>
            <FieldError />
          </TextField>
          <TextField
            className='textfield'
            isRequired
            value={formData.password}
            type='password'
            name='password'
            minLength={7}
            onChange={(value) => setFormData({ ...formData, password: value })}
            validate={(value) => {
              if (!value) { return 'Пожалуйста введите пароль' }
              if (value.length <= 6) { return 'Пароль должен быть не менее 6 символов' }
              return null
            }}
          >
            <Label>Пароль</Label>
            <Input className="input" placeholder="••••••••" />
            <FieldError className='field-error' />
          </TextField>
          <div className='butMenu'>
            <Button type='submit' className="outline">Вход</Button>
            <Button className="danger-soft" onPress={() => setFormData({ login: '', password: '', currentPassword: '' })}>Отмена</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}