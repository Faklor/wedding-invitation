'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.scss'

export default function GuestsBayrtaPage() {
  const [guests, setGuests] = useState([])

  const fetchGuests = () => {
    axios.get('/api/list?user=bayrta')
      .then(res => setGuests(res.data))
      .catch(err => console.error('Ошибка загрузки списка:', err))
  }

  useEffect(() => {
    fetchGuests()
  }, [])

  const handleDelete = async (name) => {
    try {
      await axios.post('/api/delete', { name, user: 'bayrta' })
      fetchGuests()
    } catch (err) {
      console.error('Ошибка удаления:', err)
    }
  }

  return (
    <div className="guests">
      <h2>Гости Bayrta</h2>
      <ul>
        {guests.map((guest, index) => (
           <li key={index}>
            <span className="guestName">{guest.name}</span>
            <button className="btnDelete" onClick={() => handleDelete(guest.name)}>Удалить</button>
        </li>
        ))}
      </ul>
    </div>
  )
}
