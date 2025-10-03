'use client'
import './Home.scss'

//components
import Title from './components/Title';
import Description from './components/Description';
import DateComponent from './components/DateComponent';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Timing from './components/Timing';
import Wishes from './components/Wishes';
import Footer from './components/Footer';

//dynamic
import Form from './components/Form';

export default function Home({ setLoading }) {
    const handleVideoLoaded = () => {
        setLoading(false); 
        
    };

    const weddingDate = new Date(2025, 10, 22, 15, 0, 0) // 22.11.2025
    const weddingDate2 = new Date(2025, 10, 21, 15, 0, 0) // 21.11.2025

    return (
        <div className='Home'>
           <Title handleVideoLoaded={handleVideoLoaded} weddingDate={weddingDate}/>
           <Description/>
           <DateComponent weddingDate={weddingDate}/>
           <Location/>
           <Timing/>
           <DressCode weddingDate={weddingDate}/>
           
           <Wishes/>
           <Form />
           <Footer weddingDate={weddingDate}/>
           <div className='createBy'>
            Create by Falokfy
            </div>
        </div>
    )
}