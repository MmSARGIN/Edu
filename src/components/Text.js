import React from 'react';
import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <div className='flex w-3/4 flex-col mt-10 sm:mt-0 sm:justify-center items-center'>

      <p className="text-xl font-normal mb-5 leading-relaxed p-2 text-blue-400 ">
        Çocuğunuzun eğitimini şansa bırakmayın. Nitelikli öğretmenler ve doyurucu ders içerikleriyle OnlineEdu yakında hizmetinizde.
      </p>
      <div className='flex justify-between flex-col sm:flex-row w-full'>
        <Link className='bg-blue-400 w-full mb-5 sm:mb-0 sm:w-2/6 flex items-center justify-center text-base p-2 rounded-full text-white' to="/contact" >
          İletişim
        </Link>
        <Link className='bg-blue-400 w-full sm:w-2/6 flex items-center justify-center text-base p-2 rounded-full text-white' to="/sign">
          Kayıt
        </Link>
      </div>
    </div>
  )
}

export default Text