'use client'
import { useState, useEffect } from 'react';

import '../main.scss'

//components
import PreLoader from '../components/PreLoader'

//pages
import Home from '../pages/Home'

export default function Ura(){
    const weddingDate = new Date(2025, 10, 22, 15, 0, 0) 
    const weddingAddress = 'г.Лагань ул.Льва Толстого 12, кафе «Байрта»'
    const img = 'none'
    const user = 'ura'
    const timeStart = '18:00'

    const [loading, setLoading] = useState(true);
     
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); 
        return () => clearTimeout(timer);
      }, []);
    
    
    return loading? <PreLoader/> : <Home 
            setLoading={setLoading} 
            weddingDate={weddingDate}
            weddingAddress={weddingAddress}
            img={img}
            user={user}
            timeStart={timeStart}
        />
    // return <Home 
    //     setLoading={setLoading} 
    //     weddingDate={weddingDate}
    //     weddingAddress={weddingAddress}
    // />
}