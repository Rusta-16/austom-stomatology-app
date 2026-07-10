'use client'
import { createUser } from '@/actions/autefication'
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react'
import React, { useState } from 'react'

export default function RegistrForm() {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        currentPassword: ''
    })
    async function handleSubmit(e) {
        e.preventDefault()
        const res = await createUser(formData)
        if (res.success) {
            console.log('Очистка данных полей')
            setFormData({
                login: '',
                password: '',
                currentPassword: ''
            })
        } else {
            console.error(res.error)
        }
    }
    return (
        <div className='LoginForm' >
            <div className="wrapperForm">
                <h2>Создание профиля</h2>
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
                    <TextField
                        className='textfield'
                        isRequired
                        value={formData.currentPassword}
                        type='password'
                        name='currentPassword'
                        onChange={(value) => setFormData({ ...formData, currentPassword: value })}
                        validate={(value) => {
                            if (!value) { return 'Пожалуйста повторно введите пароль' }
                            if (value !== formData.password) { return 'Пароли не совпадают' }
                            return null
                        }}
                    >
                        <Label>Повторите пароль</Label>
                        <Input className="input" placeholder="••••••••" />
                        <FieldError className='field-error' />
                    </TextField>
                    <div className='butMenu'>
                        <Button type='submit' className="outline">Регистрация</Button>
                        <Button className="danger-soft" onPress={()=>setFormData({login:'',password:'', currentPassword:''})}>Отмена</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}