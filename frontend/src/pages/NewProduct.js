import React, { useState } from 'react'

import { BsCloudUpload } from 'react-icons/bs';
import { ImagetoBase64 } from '../utility/ImagetoBase64';
import { toast } from 'react-hot-toast';

const NewProduct = () => {

  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })


  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)

    const { name, image, category, price } = data

    if (name && image && category && price) {
      let fechdata = await fetch("http://localhost:5000/uploadProduct", {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)

      })

      fechdata = await fechdata.json()
      console.log(fechdata)

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: ""

        }
      })


    }
    else {
      toast("All Field are required");
    }

  }



  const uploadImage = async (event) => {
    const file = await ImagetoBase64(event.target.files[0]);
    // console.log(file)
    setData((preve) => {
      return {
        ...preve,
        image: file
      }
    })

  }

  return (
    <div className='p-4'>
      <form className=' m-auto flex w-full max-w-md flex-col shadow p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className='bg-slate-200 p-1 my-1 rounded-md' placeholder='Enter Product Name' onChange={handleChange} value={data.name} />

        <label htmlFor="category" className='mt-2'>Category</label>
        <select id="category" className='my-1 p-1 mb-2 rounded-md' name="category" onChange={handleChange} value={data.category}  > 
          <option value={"other"}>Select Category</option>
          <option>Laptop</option>
          <option>EyerPhone</option>
          <option>Watch</option>
          <option>Phone</option>
          <option>Mouse</option>
          <option>Keyboard</option>
        </select>

        <label htmlFor="image">Image
          <div className='h-40 w-full bg-slate-300 my-1 rounded-md flex justify-center items-center cursor-pointer'>
            {
              data.image ? <img src={data.image} alt="img" className="h-40 w-full rounded-md" /> : <span className='text-3xl'><BsCloudUpload /></span>
            }
            {/* <span className='text-3xl'><BsCloudUpload/></span>  */}
            {/* <img src={data.image} alt="img" className ="h-40 w-full rounded-md"/> */}
            <input type="file" id="image" accept="image/*" onChange={uploadImage} className='hidden cursor-pointer' name='image' />
          </div></label>

        <label htmlFor="price" className='mt-1'>Price</label>
        <input type="text" name="price" className='bg-slate-200 p-1 my-1 rounded-md' placeholder='Enter Product Price' onChange={handleChange} value={data.price}/>

        <label htmlFor="description" className='mt-1'>Description</label>
        <textarea name="description" id="description" cols="20" rows="2" className='bg-slate-200 rounded-md resize-none' onChange={handleChange} value={data.description}/>

        <button className='bg-red-400 hover:bg-red-500 my-2 rounded-md text-sm text-cyan-50 p-1'>Save Product</button>

      </form>
    </div>
  )
}

export default NewProduct