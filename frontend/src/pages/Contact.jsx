import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-2 bg-yellow-50 w-1/2 p-3 rounded-md m-5'>
        <h2 className='text-2xl'>Let's Talk</h2>
        <p>LEAVE A MESSAGE.We like to hear from you!</p>
      </div>

      <div className="flex flex-col items-center mt-10 bg-slate-300 w-1/3 p-3 m-auto rounded-md">
        <span className='text-red-500 text-bold text-2xl'>GET IN TOUCH</span>
        <h2 className='text-bold text-lg text-slate-700'>Visit our locations or contact us today</h2>
        <h3>Office</h3>

      </div>

      <div className="bg-slate-200 flex flex-col items-center w-1/2 m-7 list-none rounded-md">
        <div className='p-5'>
          <li>
            <p className='text-bold text-lg text-slate-500'>KTM,Koteshwor-Narephat-5</p>
          </li>
          <li>
            <p className='text-bold text-lg text-yellow-500'>014-547-248</p>
          </li>
          <li>
            <p className='text-bold text-lg text-red-500'>RedStore22@gmail.com</p>
          </li>
          <li>
            <p className='text-bold text-lg text-slate-500'>Sun - fri : 9.00am to 7.00pm</p>
          </li>
        </div>
      </div>

    </div>

  )
}

export default Contact