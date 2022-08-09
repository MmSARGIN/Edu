import {React , useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Teachers = () => {
    const notify = () => {
        toast("Giriş Yapıldı")
        toast.success("Bilgileriniz sisteme kaydedildi", {
          position: toast.POSITION.TOP_CENTER
        });
      };
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setproducts(json);
            
            })
    }, [])
  return (
    <div className='flex  flex-wrap w-full justify-center mt-16'>
        
                         <section class="mb-2 text-gray-700 rounded-xl bg-blue-100">
                         <div class="text-center md:max-w-xl p-4 rounded-lg lg:max-w-3xl mx-auto">
                           <h3 class="text-3xl font-bold mb-6 text-gray-600">Teachers</h3>
                           <p class="mb-6 pb-2 md:mb-12 md:pb-0 text-gray-500">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
                             iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
                             porro a pariatur veniam.
                           </p>
                         </div>
                         
                         <div class="grid p-4 md:grid-cols-3 gap-6 lg:gap-12 text-center">
                         {products ? products.map((item) => (
                           <div class="mb-0">
                             <div class="flex justify-center mb-6">
                                                      <img
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                    class="rounded-full shadow-lg w-32"
                                  />
                             </div>
                             <h5 class="text-xl font-semibold mb-4">{item.description.slice(1, 10).toUpperCase()}</h5>
                             <h6 class="font-semibold text-blue-600 mb-4">{item.category.toUpperCase()}</h6>
                             <p class="mb-4">
                               <svg
                                 aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fas"
                                 data-icon="quote-left"
                                 class="w-6 pr-2 inline-block"
                                 role="img"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                               >
                                 <path
                                   fill="currentColor"
                                   d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                 ></path></svg>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                               praesentium voluptatum deleniti atque corrupti.
                             </p>
                             <ul class="flex justify-center mb-0">
                               <li>
                                 <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   data-prefix="fas"
                                   data-icon="star"
                                   class="w-4 text-yellow-500"
                                   role="img"
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"
                                 >
                                   <path
                                     fill="currentColor"
                                     d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                   ></path>
                                 </svg>
                               </li>
                               <li>
                                 <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   data-prefix="fas"
                                   data-icon="star"
                                   class="w-4 text-yellow-500"
                                   role="img"
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"
                                 >
                                   <path
                                     fill="currentColor"
                                     d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                   ></path>
                                 </svg>
                               </li>
                               <li>
                                 <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   data-prefix="fas"
                                   data-icon="star"
                                   class="w-4 text-yellow-500"
                                   role="img"
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"
                                 >
                                   <path
                                     fill="currentColor"
                                     d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                   ></path>
                                 </svg>
                               </li>
                               <li>
                                 <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   data-prefix="fas"
                                   data-icon="star"
                                   class="w-4 text-yellow-500"
                                   role="img"
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"
                                 >
                                   <path
                                     fill="currentColor"
                                     d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                   ></path>
                                 </svg>
                               </li>
                               <li>
                                 <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   data-prefix="far"
                                   data-icon="star"
                                   class="w-4 text-yellow-500"
                                   role="img"
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 576 512"
                                 >
                                   <path
                                     fill="currentColor"
                                     d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                                   ></path>
                                 </svg>
                               </li>
                             </ul>
                           </div>
                       
                       
        )) : 'Loading' + notify()}
          </div>
        </section>
    </div>
  )
}

export default Teachers