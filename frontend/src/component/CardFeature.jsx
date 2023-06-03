
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../redux/productSlice'

const CardFeature = (props) => {
  const { name, image, price, category, loading,id } = props
  

  const dispatch = useDispatch();


  const handleProps =(e) =>{
    // Say you have multiple events on the same element. If you use event.stopPropagation() , sure it will stop any parent events from firing. 
    // e.stopPropagation();
    dispatch(addItem({
      _id : id,
      name : name,
      image : image,
      price : price,
      category : category
    }))

  }

  return (
    <div className='w-full min-w-[200px] max-w-[200px] py-5 bg-white px-4 cursor-pointer drop-shadow-md rounded-md'>
      {
        image ? <> 
        <Link to = {`/menu/${id}`} onClick={()=>window.scrollTo({top: "0",behavior: "smooth"})}>
        
        <div className="h-24 flex justify-center items-center">
          <img src={image} alt="img" className='h-full' />
        </div>
          <hr />
          <p className='font-semibold text-slate-700  capitalize text-lg'>{name}</p>

          <p className='font-semibold text-slate-700  capitalize text-lg'>{category}</p>
          <p className='text-black-500 font-bold'><span className='text-red-500'>Rs</span>.{price}</p>
          </Link>
          <button className='bg-red-500 rounded-md py-2 mt-2 w-full hover:bg-yellow-400 ' onClick={handleProps}>Add to Cart</button>
          
          </> :
          <div className="flex justify-center items-center h-full">
            <p>{loading}</p>

          </div>
      }
    </div>
  )
}

export default CardFeature