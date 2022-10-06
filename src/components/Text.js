import React from 'react';
import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <div className='flex w-3/4 flex-col sm:justify-center items-center'>

      <p className="text-xl font-semibold mb-5 leading-relaxed p-2 text-blue-500 bg-gradient-to-r from-amber-200 to-amber-500 
              bg-[length:0px_5px]
              bg-no-repeat
              bg-left-bottom
              duration-1000
              hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
        Çocuğunuzun eğitimini şansa bırakmayın. Nitelikli öğretmenler ve doyurucu ders içerikleriyle OnlineEdu yakında hizmetinizde.
      </p>
      <div className='flex justify-between flex-col sm:flex-row w-full'>
        <Link className='bg-blue-500 hover:bg-blue-600 w-full mb-5 sm:mb-0 sm:w-2/5 flex items-center justify-center text-base p-2 rounded-full text-white' to="/contact" >
          İletişim
        </Link>
        <Link className='bg-blue-500 
             hover:bg-blue-600 w-full mb-5 sm:mb-0 sm:w-2/5 flex items-center justify-center text-base p-2 rounded-full text-white' to="/sign">
          Kayıt
        </Link>
      </div>
    </div>
  )
}

export default Text