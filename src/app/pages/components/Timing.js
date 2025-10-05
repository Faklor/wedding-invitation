'use client'

import './Timing.scss'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Timing({timeStart}) {
  const items = [
    // {
    //   icon: '/pic/item_nav_1.png',
    //   time: '15:00',
    //   text: 'Сбор гостей, WELCOME',
    // },
    // {
    //   icon: '/pic/item_nav_2.png',
    //   time: '16:00',
    //   text: 'Выездная регистрация',
    // },
    {
      icon: '/pic/item_nav_3.png',
      time: timeStart,
      text: 'Банкет',
    },
    {
      icon: '/pic/item_nav_4.png',
      time: '23:00',
      text: 'Завершение вечера',
    },
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.timing',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.timingTitle', { opacity: 0, y: -30 })
      .from('.timingRow', { opacity: 0, y: 40, stagger: 0.2 }, '-=0.2')
      .from('.timingRow .iconWrapper img', { scale: 0, stagger: 0.2 }, '-=0.4')
      .from('.timingRow .textWrapper', { opacity: 0, x: 30, stagger: 0.2 }, '-=0.3')

      ScrollTrigger.refresh()

        // return () => {
        // tl.kill()
        // ScrollTrigger.kill()
        // }
  }, [])

  return (
    <div className="timing">
      <h2 className="timingTitle">Тайминг</h2>
      {items.map((item, idx) => (
        <div className="timingRow" key={idx}>
          <div className="iconWrapper">
            <Image
              className="picLocation"
              //src={`${process.env.NEXT_PUBLIC_BASEURL}${item.icon}`}
              src={`${item.icon}`}
              alt={item.text}
              width={40}
              height={40}
              priority
            />
            {idx !== items.length - 1 && <div className="line" />}
          </div>
          <div className="textWrapper">
            <div className="time">{item.time}</div>
            <div className="desc">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
