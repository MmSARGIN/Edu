import { React } from 'react';
import { Link } from "react-router-dom";



const Navbar = (props) => {


  return (<nav class="
fixed-top
  w-full
  flex 
  items-center
  justify-between
  bg-white
  hover:text-blue-700
  focus:text-blue-700
  shadow-sm
  navbar navbar-expand-lg navbar-light
  ">
    <div class="  container-fluid w-full flex flex-wrap items-center justify-between px-6">
      <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
          class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
      </button>
      <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        {/* <a class="
        flex
        items-center
        text-blue-500
        hover:text-blue-600
        focus:text-blue-600
        mt-2
        lg:mt-0
        mr-5
      " href="/ ">
          <h4 className='font-bold'>OnlineEducation</h4>
        </a> */}

        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item text-blue-500 p-2">
            <a class="text-blue-500  p-0" href="/">Anasayfa</a>
          </li>
          <li class="nav-item p-2">
            <div class="dropdown relative">

              <a class="text-blue-500 dropdown-toggle  p-0" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">Kaynaklar</a>

              <ul class="
      dropdown-menu
      min-w-max
      absolute
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Action</a>
                </li>
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Another action</a>
                </li>
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Something else here</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item p-2">
            <div class="dropdown relative">

              <a class="text-blue-500 dropdown-toggle  hover:text-blue-700 focus:text-gray-700 p-0" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">Paketler</a>

              <ul class="
      dropdown-menu
      min-w-max
      absolute
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Action</a>
                </li>
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Another action</a>
                </li>
                <li>
                  <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Something else here</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item p-2">
            <a class="text-blue-500  hover:text-blue-700 focus:text-gray-700 p-0" href="/teachers">Kadromuz</a>
          </li>
          <li class="nav-item p-2">
            <a class="text-blue-500  hover:text-blue-700 focus:text-gray-700 p-0" href="/">Hakkımızda</a>
          </li>
        </ul>

      </div>



      <div class="flex items-center relative">

        {/* <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="/">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
            class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path fill="blue"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
            </path>
          </svg>
        </a> */}
        <div class="dropdown relative">
          <a class="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        " href="/login" >
            <button className='bg-blue-500 hover:bg-blue-700 text-md text-white px-4 py-2 rounded-xl'>Giriş</button>

            {/* <span class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span> */}
          </a>
          {/* <ul class="
      dropdown-menu
      min-w-max
      absolute
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    " aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Action</a>
            </li>
            <li>
              <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Another action</a>
            </li>
            <li>
              <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        " href="/">Something else here</a>
            </li>
          </ul> */}
        </div>
        <div class="dropdown relative">
          <a class="dropdown-toggle flex items-center hidden-arrow" href="/sign" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="blue" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

          </a>
          {/* <ul class="
    dropdown-menu
    min-w-max
    absolute
    
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
            <li>
              <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="/">Action</a>
            </li>
            <li>
              <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="/">Another action</a>
            </li>
            <li>
              <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="/">Something else here</a>
            </li>
          </ul> */}
        </div>
      </div>

    </div>
  </nav>

    // <div className='bg-white font-serif flex flex-row fixed-top justify-center sm:justify-evenly border-b-2 border-blue-400 w-full'>
    //   <div className='flex items-center p-4 justify-center w-2/5 sm:justify-start'>
    //     <h1 className='text-blue-500 font-bold lg:text-2xl  md:text-lg sm:text-sm font-serif bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>OnlineEdu </h1>
    //   </div>
    //   <div className='flex justify-center items-center lg:hidden w-1/5'>
    //     <button class="
    //   navbar-toggler
    //   text-gray-500
    //   border-0
    //   hover:shadow-none hover:no-underline
    //   py-2
    //   px-2.5
    //   bg-transparent
    //   focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    // " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    //         class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    //         <path fill="currentColor"
    //           d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    //         </path>
    //       </svg>
    //     </button>


    //   </div>
    //   <div id="navbarSupportedContent" className='collapse navbar-collapse justify-center w-full text-blue-500 lg:text-lg md:text-base sm:text-sm hidden lg:flex items-center font-medium  '>
    //     <div className='p-2'>
    //       <Link to="/" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Anasayfa</Link>
    //     </div>
    //     <div className='p-2'>
    //       <Link to="/aboutus" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Hakkımızda</Link>
    //     </div>
    //     <div className='p-2'>
    //       <Link to="/teachers" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>Kadromuz</Link>
    //     </div>
    //     <div class="flex p-2 justify-center">
    //       <div>
    //         <div class="dropdown relative">
    //           <button
    //             class="
    //             flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //             bg-[length:0px_3px]
    //             bg-left-bottom
    //             bg-no-repeat
    //             transition-[background-size]
    //             duration-500
    //             hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
    //     "
    //             type="button"
    //             id="dropdownMenuButton1"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Kaynaklar
    //             <svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="caret-down"
    //               class="w-2 ml-2"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 320 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    //               ></path>
    //             </svg>
    //           </button>
    //           <ul
    //             class="
    //       dropdown-menu
    //       min-w-max
    //       absolute

    //       bg-white
    //       text-base
    //       z-50
    //       float-left
    //       py-2
    //       list-none
    //       text-left
    //       rounded-lg
    //       shadow-lg
    //       mt-1
    //       hidden
    //       m-0
    //       bg-clip-padding
    //       border-none
    //     "
    //             aria-labelledby="dropdownMenuButton1"
    //           >
    //             <li>
    //               <a
    //                 class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/"
    //               >Dökümanlarımız</a>
    //             </li>
    //             <li>
    //               <a
    //                 class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/"
    //               >Videolu Soru Çözümleri</a
    //               >
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">Canlı Ders Talebi</a>
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">Resimli Soru Çözümleri</a>
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">Kitaplarımız</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="flex p-2 justify-center">
    //       <div>
    //         <div class="dropdown relative">
    //           <button
    //             class="
    //             flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //             bg-[length:0px_3px]
    //             bg-left-bottom
    //             bg-no-repeat
    //             transition-[background-size]
    //             duration-500
    //             hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
    //     "
    //             type="button"
    //             id="dropdownMenuButton1"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Paketler
    //             <svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="caret-down"
    //               class="w-2 ml-2"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 320 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    //               ></path>
    //             </svg>
    //           </button>
    //           <ul
    //             class="
    //       dropdown-menu
    //       min-w-max
    //       absolute

    //       bg-white
    //       text-base
    //       z-50
    //       float-left
    //       py-2
    //       list-none
    //       text-left
    //       rounded-lg
    //       shadow-lg
    //       mt-1
    //       hidden
    //       m-0
    //       bg-clip-padding
    //       border-none
    //     "
    //             aria-labelledby="dropdownMenuButton1"
    //           >
    //             <li>
    //               <a
    //                 class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/"
    //               >9.Sınıflar</a>
    //             </li>
    //             <li>
    //               <a
    //                 class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/"
    //               >10.Sınıflar</a
    //               >
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">11.Sınıflar(Sayısal)</a>
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">11.Sınıflar(Eşit Ağırlık)</a>
    //             </li>
    //             <li>
    //               <a class="
    //           dropdown-item
    //           text-sm
    //           py-2
    //           px-4
    //           font-normal
    //           block
    //           w-full
    //           whitespace-nowrap
    //           bg-transparent
    //           text-blue-500
    //           hover:bg-gray-100
    //         "
    //                 href="/">YKS</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className='p-2'>
    //       <Link to="/packages" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' >Paketler</Link>
    //     </div> */}
    //     <div className='p-2'>
    //       <Link to="/contact" className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' >İletişim</Link>
    //     </div>

    //   </div>
    //   <div className=' w-2/5 mr-3 justify-end text-blue-500 lg:text-lg md:text-base sm:text-sm flex items-center font-semibold'>
    //     <div className='p-2'>
    //       <Link className='flex w-full bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' to="/sign">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //           <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    //         </svg>

    //       </Link>
    //     </div>
    //     <Link to="/Login">
    //       <button type="button" class="inline-block font-sans px-2 py-2  sm:px-6 sm:py-2.5 bg-blue-500 text-white font-medium text-sm leading-tight rounded-3xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">

    //         Giriş Yap
    //       </button>
    //     </Link>

    //     {/* <div className='p-3'>
    //       <Link className='flex w-full items-center bg-gradient-to-r from-amber-200 to-amber-500 
    //           bg-[length:0px_3px]
    //           bg-left-bottom
    //           bg-no-repeat
    //           transition-[background-size]
    //           duration-500
    //           hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]' to="/Login"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

    //           <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    //         </svg> </Link>
    //     </div> */}
    //   </div>
    // </div>




  )
}
export default Navbar

