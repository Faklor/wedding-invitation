'use client'
import { useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import './Description.scss'

gsap.registerPlugin(ScrollTrigger)

export default function Description(){

    useEffect(() => {
        const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.5 },
        scrollTrigger: {
            trigger: ".description",   // запускаем, когда этот блок в зоне видимости
            start: "top 80%",          // когда верх description доходит до 80% окна
            toggleActions: "play none none reverse" 
            // play при входе, reverse при выходе (можно настроить)
        }
        })

        tl.from(".destitle", { opacity: 0, y: -30 })
        .from(".desline", { opacity: 0, scaleX: 0, transformOrigin: "left" }, "-=0.5")
        .from(".destext", { opacity: 0, y: 30 }, "-=0.3")
        .from(".mainpic", { opacity: 0, scale: 0.8 }, "-=0.2")
    }, [])

    return <div className="description">
        <h2 className="destitle">Я люблю тебя больше чем вчера</h2>
        <hr className="desline"/>
        <p className="destext">
            Это официальное приглашение на
            нашу свадьбу! А получии вы его потому что,
            что мы очень хотим видеть вас в этот 
            день рядом с нами. 
        </p>
        <div className="mainpic">
            
            <Image
                className="mainpicInner"
                src={`${process.env.NEXT_PUBLIC_BASEURL}/pic/main.jpg`}
                alt="Мы вдвоём"
                width={400}   
                height={300}  
                priority      
            />
        </div>
       
    </div>
}