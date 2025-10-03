'use client'

import './Location.scss'
import Image from 'next/image'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Location() {
  const weddingAddress = 'г.Лагань ул.Льва Толстого 12, кафе «Байрта»'
  const weddingAddress2 = 'г.Элиста, ул.Пюрбеева 30, ресторан «Крокус»'



  const mapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(
    weddingAddress
  )}`

  const handleOpenMap = () => {
    window.open(mapsUrl, '_blank')
  }

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.location',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.locationTitle', { opacity: 0, y: -30 })
      .from('.locationDescription', { opacity: 0, y: 20 }, '-=0.3')
      .from('.picLocation', { opacity: 0, scale: 0.8 }, '-=0.2')
      .from('.item_navLocation', { opacity: 0, y: 20 }, '-=0.2')
      //.from('.btnLocation', { opacity: 0, scale: 0.8 }, '-=0.2')
  }, [])

  return (
    <div className="location">
      <h2 className="locationTitle">Локация</h2>

      <p className="locationDescription">
        Наша свадьба пройдет по адрессу {weddingAddress}
      </p>

      <Image
        className="picLocation"
        src={`${process.env.NEXT_PUBLIC_BASEURL}/pic/location.jpg`}
        alt="Мы вдвоём"
        width={400}
        height={300}
        priority
      />

      <h3 className="item_navLocation">
        <p className="item_nameLocation">СБОР ГОСТЕЙ, WELCOME</p>
        <p className="item_timeLocation">15.00</p>
      </h3>

      <button className="btnLocation" onClick={handleOpenMap}>
        Как добраться
      </button>
    </div>
  )
}
