import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import FeatureProduct from './FeatureProduct'
import { useSelector } from 'react-redux'

const FilterProduct = () => {
    const productData = useSelector((state) => state.product.productList)


    const categortList = [...new Set(productData.map(e => e.category))]

    const loadingArrayFeature = new Array(10).fill(null)

      const [dataFilter, setDataFilter] = useState([]);

  useEffect(()=>{
    setDataFilter(productData)
  },[productData])

  const FilterProduct = (category) => {
    
      let filter = productData.filter((e)=>e.category.toLowerCase() === category.toLowerCase())
    setDataFilter(()=>{
      return[...filter]
    })

  }


  return (
    <div>
    <div className="mt-4">
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


      </div>
    </div>
  )
}

export default FilterProduct