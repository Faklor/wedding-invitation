'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import './Title.scss'



export default function Title({handleVideoLoaded,weddingDate}){

    useEffect(() => {
        gsap.fromTo(
        '.name',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        gsap.fromTo(
        '.line',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 }
        )
        gsap.fromTo(
        '.date',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 }
        )
    }, [])

    return <div className="title">
        <video
            //src="/video/main.mp4"
            src={`${process.env.NEXT_PUBLIC_BASEURL}/video/main.mp4`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            className="background-video"
        />
        <div className='shadow'/>

        <div className='overlay'>
            <h1 className='name'>
                Юрий и Байрта
            </h1>
            <hr className='line'/>
            <h2 className='date'>
                {String(weddingDate.getDate()).padStart(2, '0')} |  
                {' ' + String(weddingDate.getMonth() + 1).padStart(2, '0')} |  
                {' ' + String(weddingDate.getFullYear()).slice(-2)}
            </h2>
        </div>
    </div>
}