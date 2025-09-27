'use client'
import './Home.scss'

//components
import Title from './components/Title';
import Description from './components/Description';


export default function Home({ setLoading }) {
    const handleVideoLoaded = () => {
        setLoading(false); 
        
    };

    return (
        <div className='Home'>
           <Title handleVideoLoaded={handleVideoLoaded}/>
           <Description/>
        </div>
    )
}