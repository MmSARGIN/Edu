import React from 'react';
import Text from './Text'



const Carousel = () => {



  return (
    <div className='w-11/12 bg-blue-100 flex flex-col lg:flex-row items-center rounded-3xl mt-10 sm:mt-20 p-5 justify-around'>
      <div className="lg:w-7/12 w-full h-full p-3 rounded-full bg-blue-200">
        <div id="carouselExampleCaptions" className="carousel  slide carousel-fade relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              hidden
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              hidden
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              hidden
            ></button>
          </div>
          <div className="carousel-inner relative w-full rounded-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <video className="w-full" autoPlay loop muted>
                <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="carousel-item relative float-left w-full">
              <video className="w-full" autoPlay loop muted>
                <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="carousel-item relative float-left w-full">
              <video className="w-full" autoPlay loop muted>
                <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className='w-full flex justify-center lg:w-4/12'>
        <Text />
      </div>
    </div>



  )
}

export default Carousel