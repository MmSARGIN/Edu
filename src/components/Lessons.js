import { React, useEffect, useState } from 'react';



const Lessons = () => {
  // const [products, setproducts] = useState([])
  const [lesson, setlesson] = useState();
  const data1 = async () => {

    const info = await fetch('http://localhost:5000/lesson')
      .then(res => res.json())
      .then(json => {
        console.log('json', json)
        setlesson(json)
      })



  };

  useEffect(() => {
    data1();
    // fetch(
    //   "http://localhost:3000/lesson"
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setlesson(data)
    //   })

    // const requestOptions = {
    //   method: 'GET',
    //   headers: { 'Authorization': 'Bearer 00D8d000005zrd6!AREAQHRwQK_5V3eCWCTtAI7UQMKDK5hS7sIzGlcGqSo64SsQhucVetztySgDJyvFD5qM4wmdgFAaGsb5B643u4.kmjOnOZCv' },


    // };
    // fetch('https://onlineedu-dev-ed.my.salesforce.com/services/apexrest/Lesson', requestOptions)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //     // setproducts(json);

    //   });

    // fetch('https://afternoon-dusk-68458.herokuapp.com/users')
    // .then(res => console.log(res))
  }, [])
  // https://fakestoreapi.com/products?limit=10

  return (
    <section class="overflow-auto text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div class="flex flex-wrap flex-col sm:flex-row items-center justify-center -m-1 md:-m-2">
          <div class="flex flex-wrap w-full">
            {lesson ? lesson.map((i) => (
              <div class="w-1/2 p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src={i.image_url} />
              </div>
            ))
              : console.log("melih")

            }

          </div>

        </div>
      </div>
    </section>
  )
}

export default Lessons