import {React} from 'react';
import { Link } from "react-router-dom";



const Navbar = (props) => {
  return (
    
    <div className='bg-white font-serif flex flex-row fixed-top justify-evenly border-b-2 w-full'>
      <div className='flex items-center justify-center w-1/4'>
        <h1 className='text-blue-900 font-bold lg:text-2xl md:text-xl sm:text-sm font-serif'> 🛸 OnlineEdu </h1>
      </div>
      <div className='  flex flex-row justify-around w-3/4 text-blue-400 lg:text-lg md:text-base sm:text-sm 2xl:visible xl:visible lg:visible md:visible sm:invisible h-14 items-center font-semibold'>
        <div className='w-1/4'>
        <Link to="/"  className='flex w-full hover:text-blue-600'>Anasayfa</Link>
        </div>
        <div className='w-1/4  '>
          <Link to="/lessons"  className='flex w-full hover:text-blue-600'>Dersler</Link>
        </div>  
        <div className='w-1/4  '>
        <Link to="/teachers"  className='flex w-full hover:text-blue-600'>Kadromuz</Link> 
        </div>
        <div className='w-1/4  '>
        <Link to="/contact" className='flex w-full hover:text-blue-600' >İletişim</Link> 
        </div>
        <div className='w-1/4  '>
        <Link className='flex w-full hover:text-blue-600' to="/sign">Kayıt Ol</Link> 
        </div>
        <div className='w-1/4  '>
        <Link className='flex w-full items-center hover:text-blue-600' to="/Login">Giriş Yap<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg> </Link>
        </div> 
        </div>
    </div>
    
    

  
  )
}
export default Navbar

