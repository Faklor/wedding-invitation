'use client'

import './Form.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Form() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState([])
  const [error, setError] = useState('')

  // загрузка гостей при монтировании
  useEffect(() => {
    axios
      .get('/api/guests')
      .then((res) => setGuests(res.data))
      .catch(() => setError('Ошибка загрузки списка гостей'))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Пожалуйста, введите ФИО')
      return
    }

    try {
      const res = await axios.post('/api/guests', { name })
      setGuests((prev) => [...prev, res.data])
      setName('')
      setError('')
    } catch (err) {
      setError(err.response?.data?.error || 'Ошибка при добавлении')
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

      {guests.length > 0 && (
        <div className="guestList">
          <h3>Список гостей:</h3>
          <ul>
            {guests.map((guest) => (
              <li key={guest.id}>{guest.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
