'use client'

import './Footer.scss'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer({ weddingDate }) {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.6 },
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.footerTitle', { opacity: 0, y: -30 })
      .from('.footerLine', { opacity: 0, scaleX: 0, transformOrigin: 'center' }, '-=0.3')
      .from('.footerTitle2', { opacity: 0, y: 30 }, '-=0.2')
      .from('.footerDate', { opacity: 0, scale: 0.8 }, '-=0.2')

      ScrollTrigger.refresh()

        // return () => {
        // tl.kill()
        // ScrollTrigger.kill()
        // }
  }, [])

  return (
    <footer className="footer">
      <video
        src={`${process.env.NEXT_PUBLIC_BASEURL}/video/main.mp4`}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />
      <div className="shadow" />

      <div className="overlay">
        <h2 className="footerTitle">Будем рады вас видеть!</h2>
        {/* <hr className="footerLine" /> */}
        <h2 className="footerTitle2">с любовью Байрта и Юрий</h2>
        {/* <hr className="footerLine" /> */}
       
      </div>
    </footer>
  )
}
