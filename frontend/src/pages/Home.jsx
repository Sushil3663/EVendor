import React, { useRef } from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr'
// import FeatureProduct from '../component/FeatureProduct';
import FilterProduct from '../component/FilterProduct';


const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  // console.log(productData)

  const productslide = useRef()

  const Next = () => {
    productslide.current.scrollLeft += 50;

  }

  const Previous = () => {
    productslide.current.scrollLeft -= 50


  }

  const productListMobile = productData.filter((e) => { return (e.category === 'Phone') }, [])

  const productDataList = productData.slice(0, 5)

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  // const categoryfeature = productData.filter((e) => { return (e =>e.category)})
  // const categortList = [...new Set(productData.map(e => e.category))]
  // console.log(categortList)


  // const [dataFilter, setDataFilter] = useState([]);

  // useEffect(()=>{
  //   setDataFilter(productData)
  // },[productData])

  // const FilterProduct = (category) => {
    
  //     let filter = productData.filter((e)=>e.category.toLowerCase() === category.toLowerCase())
  //   setDataFilter(()=>{
  //     return[...filter]
  //   })

  // }

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className="md:w-1/2">
          <div className="flex gap-3 bg-red-200 items-center px-2 rounded-full w-28">
            <p className='text-bold'>Delivery</p>
            <img src="https://e7.pngegg.com/pngimages/341/470/png-clipart-cycling-club-computer-icons-bicycle-ciclista-text-sport.png" alt="delivery" className='h-5 bg-red-200 text-red-200' />
          </div>
          <h1 className='text-bold text-4xl md:text-7xl font-bold mt-3'>The Redstore service is <span className='text-red-500'>Faster and Effecient</span></h1>
          <p className='py-3'>An e-store, also known as an online electronic store, is a virtual platform where customers can purchase electronic products and accessories over the internet. It provides a convenient and accessible way for consumers to explore and buy a wide range of electronic devices, gadgets, and related items without the need to visit a physical store.In an e-store, customers can browse through various categories such as computers, smartphones, tablets, audio equipment, cameras, gaming consoles, and other electronic devices. </p>

          <button className='font-semibold bg-red-500 text-white rounded-md hover:bg-slate-300 pl-2 pr-2 p-1 hover:text-red-500 mt-3'>Order Now</button>
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

      <div className="mt-4">
        <h2 className='font-bold text-2xl text-slate-800 underline text-center p-5'>New Product</h2>
        <div className='flex justify-end items-center py-1'>
          <button onClick={Next} className=' bg-slate-300 hover:bg-slate-600 pr-2 p-1 rounded'><GrNext /></button>
          <button onClick={Previous} className=' bg-slate-300 hover:bg-slate-600 p-1 rounded'><GrPrevious /></button>

        </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={productslide}>
          {
            productListMobile[0] ? (productListMobile.map((e) => {
              return (
                <CardFeature
                  key={e._id}
                  id={e._id}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  category={e.category}
                />

              )
            })
            ) :
              loadingArrayFeature.map((e, index) => {
                return (
                  <CardFeature
                    key={index}
                    loading={"Loading img..."}
                  />
                )
              })
          }

        </div>

      </div>

      {/* <div className="mt-4">
        <h2 className='font-bold text-3xl text-grey-500 text-center p-3 hover:bg-slate-400 hover:text-red-500 cursor-pointer underline'>Click For Filter</h2>

        <div className="flex gap-5 justify-center items-center overflow-hidden scrollbar-none pt-3 pb-3">
          {
            categortList[0] && categortList.map((e,index) => {
              return (
                <FeatureProduct key={index} category={e} onClick={()=>FilterProduct(e)} />


              )
            })
          }


        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
           {
            dataFilter[0] ? (dataFilter.map((e) => {
              return (
                <CardFeature
                  key={e._id}
                  id={e._id}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  category={e.category}
                />

              )
            })
            ) :
              loadingArrayFeature.map((e, index) => {
                return (
                  <CardFeature
                    key={index}
                    loading={"Loading img..."}
                  />
                )
              })
          }
        </div>


      </div> */}
      <FilterProduct />
    </div>
  )
}

export default Home