'use client'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { IMaskInput } from 'react-imask'

export default function EntryForm({ cancelConfirm, showAcsess }) {
  const [fio, setFio] = useState('')
  const [tel, setTel] = useState('')
  const [errorTel, setErrorTel] = useState('')
  const [errorFio, setErrorFio] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  //Валидация
  function handleChangeFio(e) {
    const value = e.target.value
    setFio(value)
    if (value.length < 2) {
      setErrorFio('Введите ФИО')
    } else {
      setErrorFio('')
    }
  }

  function handleAcceptTel(value, maskRef) {
    let unmasked = maskRef.unmaskedValue
    setTel(unmasked)

    // Валидацию длины 
    if (unmasked.length < 10) {
      setErrorTel('Неполный номер')
    } else {
      setErrorTel('')
    }
  }
  //Отправка формы
  async function handleSubmit(e) {
    e.preventDefault()
    const formattedTel = `+7${tel}`
    const data = {
      fio,
      tel: formattedTel,
      comment: e.target.comment.value
    }
    setIsLoading(true)
    await fetch('/api/max', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    cancelConfirm()
    showAcsess()
  }

  return (
    <div className="modalOverlay" onClick={cancelConfirm}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button id='faTime' type="button" onClick={cancelConfirm}><FaTimes size="1.5rem" /></button>
        <form onSubmit={handleSubmit}>

          <h2>Запись на прием</h2>
          <input type="text" name="fio" id="" required placeholder='ФИО' value={fio} onChange={handleChangeFio} />
          {errorFio && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-1vh' }}>{errorFio}</p>}
          <IMaskInput
            mask="+7 (000) 000-00-00"
            radix="."
            value={tel}
            unmask={true} 
            placeholder="+7 (___) ___-__-__"
            required
            type="tel"
            onAccept={handleAcceptTel}
            name="phone"
          />
          {errorTel && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-1vh' }}>{errorTel}</p>}
          <input type="text" name="comment" id="comment" placeholder='Коментарий' />
          <label htmlFor="agree">
            <input type="checkbox" value='yes' id='checkbox' required name="accept_terms" />
            Разрешение на обработку персоональных данных
          </label>
          {isLoading ? (
            <div className="spinner" aria-label="loading" role="status" />
          ) : (
            <button className='buttonCard' type="submit">Записаться на приём</button>
          )}
        </form>
      </div>
    </div>

  )
}
