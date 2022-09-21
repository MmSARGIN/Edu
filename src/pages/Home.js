import React from 'react';
import Carousel from '../components/Carousel';
import Info from '../components/Info';
import Table from '../components/Table';
// import axios from 'axios';



const Home = () => {

  // axios.get('https://leroz.herokuapp.com/users')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  return (
    <div className='flex flex-col h-full'>
      <Carousel />


    </div>
  )
}

export default Home