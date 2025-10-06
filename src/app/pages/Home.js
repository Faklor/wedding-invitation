'use client'
import './Home.scss'
import { useState,useRef } from 'react';

//components
import Title from './components/Title';
import Description from './components/Description';
import DateComponent from './components/DateComponent';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Timing from './components/Timing';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import Sound from './components/Sound';

//dynamic
import Form from './components/Form';

export default function Home({ setLoading, weddingDate, weddingAddress,img,user,timeStart }) {
    const handleVideoLoaded = () => {
        setLoading(false); 
        
    };

    const [open, setOpen] = useState(false)
    const [playing, setPlaying] = useState(false)

    const togglePlay = () => {
        if (!audioRef.current) return
        if (playing) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setPlaying(!playing)
      }

      const audioRef = useRef(null)
    

    return open?
        <div className='Home'>
            <Sound playing={playing} setPlaying={setPlaying}  audioRef={audioRef} />
           <Title handleVideoLoaded={handleVideoLoaded} weddingDate={weddingDate}/>
           <Description/>
           <DateComponent weddingDate={weddingDate}/>
           <Location weddingAddress={weddingAddress} img={img} timeStart={timeStart}/>
           {/* <Timing timeStart={timeStart}/> */}
           <DressCode weddingDate={weddingDate}/>
           
           <Wishes/>
           <Form user={user}/>
           <Footer weddingDate={weddingDate}/>
           <div className='createBy'>
            Create by Falokfy
            </div>
        </div>
    :
    <div className='before-open'>
        <button className='btn-open' onClick={()=>{
            setOpen(true)
            setPlaying(true)
            
        }}>
            Открыть приглашение
        </button>
    </div>
    
}