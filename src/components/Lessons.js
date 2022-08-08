import { React , useEffect, useState} from 'react';


const Lessons = () => {
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
    <div className='flex flex-row flex-wrap w-6/6 justify-center'>
        {products ? products.map((item) => (
                           <div class="flex justify-center h-52 mt-20 w-2/4">
                           <div class="block p-6 rounded-lg shadow-lg bg-blue-100 w-3/4">
                             <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{item.category.toUpperCase()}</h5>
                             <p class="text-gray-700 text-base mb-4 h-16">
                               {item.title}
                             </p>
                             <div className='flex justify-evenly'>
                            <a href="https://zoom.us/" target='blank'> 
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Enter Live</button></a>
                             <button type="button" class=" inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Watch Records</button>
                             </div>
                           </div>
                         </div> 
        )) : 'Loading'}
    </div>
  )
}

export default Lessons