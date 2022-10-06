import { React } from 'react';
import { Link } from "react-router-dom";



const Navbar = (props) => {

  return (

    <div className='bg-white font-serif flex flex-row fixed-top justify-center sm:justify-evenly border-b w-full'>
      <div className='flex items-center p-3 justify-center w-full sm:w-2/5 sm:justify-start'>
        <h1 className='text-blue-500 font-bold lg:text-xl  md:text-lg sm:text-sm font-serif bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>OnlineEdu </h1>
      </div>
      <div className='justify-center w-full text-blue-500 lg:text-lg md:text-base sm:text-sm hidden sm:flex items-center font-medium  '>
        <div className='p-2'>
          <Link to="/" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Anasayfa</Link>
        </div>
        <div className='p-2'>
          <Link to="/lessons" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Dersler</Link>
        </div>
        <div className='p-2'>
          <Link to="/teachers" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Kadromuz</Link>
        </div>
        <div className='p-2'>
          <Link to="/contact" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' >İletişim</Link>
        </div>

      </div>
      <div className='hidden w-2/5 justify-end text-blue-500 lg:text-lg md:text-base sm:text-sm  sm:flex items-center font-semibold'>
        <div className='p-2'>
          <Link className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' to="/sign">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

          </Link>
        </div>
        <div className='p-3'>
          <Link className='flex w-full items-center bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_3px]
              bg-left-bottom
              bg-no-repeat
              transition-[background-size]
              duration-500
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' to="/Login"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg> </Link>
        </div>
      </div>
    </div>




  )
}
export default Navbar

