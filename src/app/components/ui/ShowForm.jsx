'use client'
import React, { createContext, useContext, useState } from 'react'
import EntryForm from './EntryForm'
import TrueForm from './TrueForm'

const FormContext = createContext()

export default function ShowForm({ children }) {
    const [showForm, setShowForm] = useState(false)
    const [Acsess, setAcsess] = useState(false)
    function showWindowConfirm() {
        setShowForm(true)
    }
    function cancelConfirm() {
        setShowForm(false)
        if (Acsess) {
            setAcsess(false)
        }


    }
    function showAcsess() {
        console.log('acsess')
        setAcsess(true)
    }
    return (
        <FormContext.Provider value={{ showWindowConfirm, cancelConfirm, showForm }}>
            {children}
            {showForm && <EntryForm cancelConfirm={cancelConfirm} showAcsess={showAcsess} />}
            {Acsess && <TrueForm cancelConfirm={cancelConfirm} />}
        </FormContext.Provider>
    )
}
export function useForm() {
    return useContext(FormContext)
}