'use client'

import './DressCode.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DressCode({ weddingDate }) {
  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = weddingDate.getTime() - now.getTime()

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 🔹 GSAP анимация
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.dressCode',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.dressCodeTitle', { opacity: 0, y: -30 })
      .from('.dressCodeDescription', { opacity: 0, y: 20 }, '-=0.3')
      .from('.dressCodeColors .circle', { opacity: 0, scale: 0.5, stagger: 0.1 }, '-=0.2')
      .from('.weddingAt', { opacity: 0, scale: 0.9 }, '-=0.2')
      .from('.weddingAtTitle', { opacity: 0, y: -20 }, '-=0.2')
      .from('.countdown .timeBox', { opacity: 0, y: 20, stagger: 0.1 }, '-=0.1')
  }, [])

  return (
    <div className="dressCode">
      {/* <h2 className="dressCodeTitle">Дресс-Код</h2>

      <p className="dressCodeDescription">
        Нам будет очень приятно видеть джентельменов в классических костюмах, а дам — в вечерних платьях следующих оттенков:
      </p>

      <div className="dressCodeColors">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div> */}

      <div className="weddingAt">
        <Image
          className="picLocation"
          src={`${process.env.NEXT_PUBLIC_BASEURL}/pic/dresscode.jpg`}
          alt="Мы вдвоём"
          width={400}
          height={300}
          priority
        />

        <div className="dressCodeOverlay">
          <h3 className="weddingAtTitle">До нашей свадьбы осталось</h3>

          <div className="countdown">
            <div className="timeBox">
              <span className="num">{timeLeft.days}</span>
              <span className="label">дней</span>
            </div>
            <div className="timeBox">
              <span className="num">{timeLeft.hours}</span>
              <span className="label">часов</span>
            </div>
            <div className="timeBox">
              <span className="num">{timeLeft.minutes}</span>
              <span className="label">минут</span>
            </div>
            <div className="timeBox">
              <span className="num">{timeLeft.seconds}</span>
              <span className="label">секунд</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
