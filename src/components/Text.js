import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <div className='flex flex-col justify-center items-center'> 
        
        <p class="text-xl font-normal leading-relaxed  p-2 text-blue-700 ">
  Çocuğunuzun eğitimini şansa bırakmayın. Nitelikli öğretmenler ve doyurucu ders içerikleriyle OnlineEdu yakında hizmetinizde.
</p>
<div className='flex mt-4 w-full justify-around'>
  <Link className='bg-blue-700 w-2/6 flex items-center justify-center text-base p-2 rounded-full text-white'to="/contact" >
  <a>İletişim</a>
  </Link>
  <Link className='bg-blue-700 w-3/6 flex items-center justify-center text-base p-2 rounded-full text-white' to="/sign">
  <a >Kayıt Olun</a>
  </Link>
</div>
    </div>
  )
}

export default Text