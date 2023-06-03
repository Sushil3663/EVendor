import React from 'react'

const HomeCard = (props) => {
    const { name, image, price, loading } = props
    return (
        <div className='bg-white shadow-md rounded-md p-2'>
            {
                image ? (<>
                    <div className="w-40 min-h-[180px]">
                        <img src={image} alt="" className='w-full h-full rounded-md' />
                    </div>
                    <hr />
                    <p className='font-semibold text-slate-700 text-center capitalize text-lg'>{name}</p>
                    <p className='text-black-500 font-bold text-center'><span className='text-red-500'>Rs</span>.{price}</p>
                </>
                ) :
                    <div className="flex justify-center items-center h-full">
                        <p>{loading}</p>

                    </div>


            }


        </div>




    )
}

export default HomeCard