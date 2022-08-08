
import React from 'react';
import style from './carousel.css';
import Text from './Text'



const Carousel = () => {



  return (
    
   <div className='w-11/12 bg-blue-100 flex items-center rounded-3xl mt-20 p-5 justify-around'>
    
     <div className="w-7/12 h-full p-3"> 
     
   <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden rounded-full">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        // src='https://mykocum.com/wp-content/themes/coaching/images/bg-page.jpg'
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        
        className="block w-full "
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
    <div className='div h-full w-full absolute'>
  </div>
  </div>
  
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>    

    <div className='w-4/12'>
    <Text />
    </div>
    </div> 
  
  

  )
}

export default Carousel