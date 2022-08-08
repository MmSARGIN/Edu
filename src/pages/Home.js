import React from 'react';
import Carousel from '../components/Carousel';
import Info from '../components/Info';
import Table from '../components/Table';



const Home = () => {
  return (
    <div className='flex flex-col items-center bg-blue-100'>
        <Carousel />
        <Info />
        <Table/>
        
    </div>
  )
}

export default Home