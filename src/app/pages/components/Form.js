'use client'

import './Form.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Form({ user }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Пожалуйста, введите ФИО')
      return
    }

    try {
      await axios.post('/api/send', { name, user })
      setSuccess(true)
      setName('')
      setError('')
    } catch (err) {
      setError('Ошибка при отправке')
    }
  }

  return (
    <div className="form">
      <h2 className="formTitle">Подтверждение присутствия</h2>

      <form onSubmit={handleSubmit} className="formInner">
        <input
          type="text"
          placeholder="Введите ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`input ${error ? 'error' : ''}`}
        />
        <button type="submit" className="btnConfirm">
          Подтвердить присутствие
        </button>
      </form>

      {error && <p className="errorText">{error}</p>}
      {success && <p className="successText">Спасибо! Ваш ответ отправлен.</p>}
    </div>
  )
}
