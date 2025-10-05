'use client'

import './Wishes.scss'
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Wishes() {
  const wishes = [
    // "Пусть ваша любовь будет такой же яркой и тёплой, как огонь в домашнем очаге.",
    // "Желаем, чтобы каждый новый день вместе приносил радость и вдохновение.",
    // "Пусть ваши сердца всегда бьются в унисон, а дом будет полон смеха и уюта.",
    // "Желаем долгих лет счастья, взаимопонимания и бесконечных улыбок."
    "Мы с теплотой относимся к детям любого возраста. Но для свадьбы выбрали формат 18+."
  ]

  const [current, setCurrent] = useState(0)

  const nextWish = () => {
    animateChange(() => setCurrent((prev) => (prev + 1) % wishes.length))
  }

  const prevWish = () => {
    animateChange(() => setCurrent((prev) => (prev - 1 + wishes.length) % wishes.length))
  }

  // 🔹 Анимация при скролле
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.wishes',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.wishesTitle', { opacity: 0, y: -30 })
      .from('.wishesSlider', { opacity: 0, scale: 0.9 }, '-=0.2')

      ScrollTrigger.refresh()

        // return () => {
        // tl.kill()
        // ScrollTrigger.kill()
        // }
  }, [])

  // 🔹 Анимация смены пожелания
  const animateChange = (callback) => {
    gsap.to('.wishContent p', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        callback()
        gsap.fromTo(
          '.wishContent p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4 }
        )
      },
    })
  }

  return (
    <div className="wishes">
      <h2 className="wishesTitle">Пожелания</h2>

      <div className="wishesSlider">
        {/* <button className="navBtn" onClick={prevWish}>‹</button> */}

        <div className="wishContent">
          <p>{wishes[current]}</p>
          {/* <span className="counter">
            {current + 1} / {wishes.length}
          </span> */}
        </div>

        {/* <button className="navBtn" onClick={nextWish}>›</button> */}
      </div>
    </div>
  )
}
