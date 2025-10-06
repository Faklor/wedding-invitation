'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import './Sound.scss'

export default function Sound({playing ,setPlaying,audioRef}) {
  
  
useEffect(() => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [playing])

  const togglePlay = () => setPlaying(!playing)


  

  return (
    <div className="sound" onClick={togglePlay}>
      <audio ref={audioRef} src="/sound/Beyonce-Hello.mp3" preload="auto" />
      <Image
        src={playing ? '/pic/sound-on.png' : '/pic/sound-off.png'}
        alt="sound toggle"
        width={32}
        height={32}
      />
    </div>
  )
}