"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

import './main.scss'

//components
import PreLoader from './components/PreLoader'

//pages
import Home from './pages/Home'

export default function Main() {

  const [loading, setLoading] = useState(true);
  const weddingDate = new Date(2025, 10, 22, 15, 0, 0) // 22.11.2025
  const weddingDate2 = new Date(2025, 10, 21, 15, 0, 0) // 21.11.2025

  const weddingAddress = 'г.Лагань ул.Льва Толстого 12, кафе «Байрта»'
  const weddingAddress2 = 'г.Элиста, ул.Пюрбеева 30, ресторан «Крокус»'

  const img = 'location1.jpg'


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);


  
   return loading? <PreLoader/> : <Home 
          setLoading={setLoading} 
          weddingDate={weddingDate}
          weddingAddress={weddingAddress}
          img = {img}
      />
  // return <Home 
  //   setLoading={setLoading} 
  //   weddingDate={weddingDate} 
  //   weddingAddress={weddingAddress}
  // />
}

