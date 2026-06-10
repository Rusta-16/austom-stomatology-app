import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function EntryForm({ cancelConfirm, showAcsess }) {
  const [fio, setFio] = useState('')
  const [tel, setTel] = useState('')
  const [errorTel, setErrorTel] = useState('')
  const [errorFio, setErrorFio] = useState('')
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

  function handleChangeTel(e) {
    // Удаляем все нецифровые символы
    const value = e.target.value.replace(/\D/g, '')
    setTel(value)
    if (value.length < 11) {
      setErrorTel('Неполный номер')
    } else {
      setErrorTel('')
    }
  }
  //Отправка формы
  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      fio,
      tel,
      comment: e.target.comment.value
    }

    await fetch('/api/telegram', {
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
          <input type="tel" name="phone" id="" required placeholder='Номер телефона' value={tel} onChange={handleChangeTel} />
          {errorTel && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '-1vh' }}>{errorTel}</p>}
          <input type="text" name="comment" id="comment" placeholder='Коментарий' />
          <label htmlFor="agree">
            <input type="checkbox" value='yes' id='checkbox' required name="accept_terms" />
            Разрешение на обработку персоональных данных
          </label>
          <button className='buttonCard'>Записаться на приём</button>
        </form>
      </div>
    </div>

  )
}
