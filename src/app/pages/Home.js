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

export default function Home({ setLoading, weddingDate, weddingAddress,img }) {
    const handleVideoLoaded = () => {
        setLoading(false); 
        
    };

    

    return (
        <div className='Home'>
           <Title handleVideoLoaded={handleVideoLoaded} weddingDate={weddingDate}/>
           <Description/>
           <DateComponent weddingDate={weddingDate}/>
           <Location weddingAddress={weddingAddress} img={img}/>
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