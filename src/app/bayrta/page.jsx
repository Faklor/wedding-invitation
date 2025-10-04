'use client'

'use client'
import { useState, useEffect } from 'react';

import '../main.scss'

//components
import PreLoader from '../components/PreLoader'

//pages
import Home from '../pages/Home'

export default function Bayrta(){
    const weddingDate = new Date(2025, 10, 21, 15, 0, 0) 
    const weddingAddress = 'г.Элиста, ул.Пюрбеева 30, ресторан «Крокус»'
    const img = 'location1.jpg' 


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
    />
    // return <Home 
    //     setLoading={setLoading} 
    //     weddingDate={weddingDate}
    //     weddingAddress={weddingAddress}
    // />
}