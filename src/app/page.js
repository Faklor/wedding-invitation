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
 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);


  //return loading? <PreLoader/> : <Home setLoading={setLoading}/>
  return <Home setLoading={setLoading}/>
}

