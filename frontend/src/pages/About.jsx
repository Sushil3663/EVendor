import React from 'react'
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';

const About = () => {
  const productData = useSelector((state) => state.product.productList)

  const productDataList = productData.slice(3, 8)

  const loadingArray = new Array(4).fill(null)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Who We Are?</h1>
      <p className="text-lg text-gray-700 mb-6">
        We are an E-Gadget Seller. We sell gadgets as per the customer's request and order. Customer satisfaction is our goal. We believe in providing the best service for every gadget. We are looking forward to your positive response. Let's keep in touch.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Buy different electronic items from Red Store and get offers on every item. We offer free delivery in Kathmandu Valley. Let's get connected...
      </p>
      <hr />

      <div className='md:flex gap-4 py-2'>

        <div className="md:w-1/2">
          <h1 className='text-bold text-4xl md:text-7xl font-bold mt-3'>The Redstore service is <span className='text-red-500'>Faster and Effecient</span></h1>
          <p className='py-3'>An e-store, also known as an online electronic store, is a virtual platform where customers can purchase electronic products and accessories over the internet. It provides a convenient and accessible way for consumers to explore and buy a wide range of electronic devices, gadgets, and related items without the need to visit a physical store.In an e-store, customers can browse through various categories such as computers, smartphones, tablets, audio equipment, cameras, gaming consoles, and other electronic devices. </p>


        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 justify-center">
          {
            productDataList[0] ? productDataList.map((e, index) => {
              return (
                <HomeCard
                  key={e._id}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  category={e.category}

                />

              )
            })
              :
              loadingArray.map((e, index) => {
                return (
                  <HomeCard
                    key={index}
                    loading={"Loading img..."}
                  />
                )
              })
          }


        </div>
      </div>
    </div>
  );
}

export default About

