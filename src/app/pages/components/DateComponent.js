'use client'

import './Date.scss'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DateComponent({weddingDate}) {
  // дата свадьбы
  //const weddingDate = new Date(2025, 8, 27) // месяцы с 0 → 8 = сентябрь

  const month = weddingDate.toLocaleString('ru-RU', { month: 'long' })
  const year = weddingDate.getFullYear()
  const day = weddingDate.getDate()

  const daysInMonth = new Date(year, weddingDate.getMonth() + 1, 0).getDate()
  const firstDayOfWeek = new Date(year, weddingDate.getMonth(), 1).getDay() || 7

  const days = []
  for (let i = 1; i < firstDayOfWeek; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.date',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.dateTitle', { opacity: 0, y: -30 })
      .from('.calendar-header', { opacity: 0, y: -20 }, '-=0.3')
      .from('.calendar-dayname', { opacity: 0, y: 20, stagger: 0.05 }, '-=0.2')
      .from('.calendar-cell', { opacity: 0, scale: 0.5, stagger: 0.02 }, '-=0.1')
      .to('.calendar-cell.highlight', {
        scale: 1.3,
        backgroundColor: '#d33',
        duration: 0.8,
        yoyo: true,
        repeat: 1,
      })
  }, [])

  return (
    <div className="date">
      <h2 className="dateTitle">Свадьба состоится</h2>

      <div className="calendar">
        <div className="calendar-header">
          {month} {year}
        </div>
        <div className="calendar-grid">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
            <div key={d} className="calendar-dayname">
              {d}
            </div>
          ))}
          {days.map((d, idx) => (
            <div
              key={idx}
             className={`calendar-cell ${d !== null && d === day ? 'highlight' : ''}`}
            >
              {d || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
