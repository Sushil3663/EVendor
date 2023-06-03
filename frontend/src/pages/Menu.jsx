import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import FilterProduct from '../component/FilterProduct';
import { addItem } from '../redux/productSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(params.id)
  const data = params.id

  const productData = useSelector(state => state.product.productList)

  const filterProdduct = productData.filter(e => e._id === data)[0]
  console.log(filterProdduct)

  const handleCart = () =>{
    dispatch(addItem(filterProdduct))
    
  }
  return (
    <div className='p-2 md:p-20 '>
      <div className="w-full max-w-2xl m-auto md:flex gap-4">

        <div className="max-w-lg shadow-lg overflow-hidden rounded-md">
          <img src={filterProdduct.image} alt="" className='hover:scale-105 transition-all cursor-pointer md:h-80' />
        </div>

        <div className="md:flex md:flex-col gap-3 bg-white rounded-md">
          <div className='p-1'>
            <p className='font-semibold text-slate-900 capitalize text-3xl'>{filterProdduct.name}</p>
            <p className='text-black-500 font-bold mt-2' ><span className='text-red-500'>Rs</span>.{filterProdduct.price}</p>

          </div>
          <div className="flex gap-3 pl-1 pr-1">
            <button className='bg-red-500 rounded-md px-3 w-full hover:bg-yellow-400 min-w-[110px] h-10'>Shop</button>
            <button onClick={handleCart} className='bg-red-500 rounded-md px-3 w-full hover:bg-yellow-400 min-w-[110px] h-10'>Add To Cart</button>
           
          </div>
          <div className='bg-white p-2 rounded-md'> 
           <h2 className='text-4xl text-slate-500'>Description</h2>
            <p className='text-xl text-slate-700'>{filterProdduct.description}</p>
            </div>
           

    
        </div>


      </div>
      <div className='mt-8 w-full'>
      <FilterProduct/>

      </div>



    </div>
  )
}

export default Menu