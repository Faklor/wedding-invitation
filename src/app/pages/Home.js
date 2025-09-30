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

    const weddingDate = new Date(2025, 9, 3, 15, 0, 0) // 27 сентября 2025, 15:00

    return (
        <div className='Home'>
           <Title handleVideoLoaded={handleVideoLoaded} weddingDate={weddingDate}/>
           <Description/>
           <DateComponent weddingDate={weddingDate}/>
           <Location/>
           <DressCode weddingDate={weddingDate}/>
           <Timing/>
           <Wishes/>
           <Form />
           <Footer weddingDate={weddingDate}/>
           <div className='createBy'>
            Create by Falokfy
            </div>
        </div>
    )
}