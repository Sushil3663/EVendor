import React, { useState } from 'react'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [show, setShow] = useState(false)
    const [confirmshow, setConfirmShow] = useState(false)
    const navigate = useNavigate();


    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",

    });
    // console.log(data)



    const handleChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const showtext = () => {
        setShow(prevs => !prevs)

    }
    const showtexts = () => {
        setConfirmShow(prevs => !prevs)

    }

    const handleSubmit = async(e) => {
        e.preventDefault();


        const { firstName, lastName, email, password, confirmPassword } = data
        if (firstName && lastName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                let fechdata = await fetch("http://localhost:5000/signup",{
                    method:'POST',
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(data)

                })
                
                fechdata = await fechdata.json()
                alert(fechdata.message)
                // console.log(fechdata)
                if(fechdata.alert){
                    navigate('/login')

                }
                

            }
            else {
                alert("Password is not Matching")
            }

        }
        else {
            alert("All fields are Required!")
        }

    }


    return (
        <div className='p-4 md:p-4 border-blue-400'>
            <div className='w-full max-w-sm bg-white m-auto p-4'>
                <h1 className='flex justify-center text-2xl drop-shadow-lg'>Sign Up</h1>


                <form className='w-full py-4' onSubmit={handleSubmit}>
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" id='firstName' name="firstName" placeholder='Enter Your First Name' className='mt-1 mb-2 bg-slate-200 w-full px-2 py-1 rounded-sm focus-within:outline focus-within:outline-blue-300' value={data.firstName} onChange={handleChange} />

                    <label htmlFor="listname">LastName</label>
                    <input type="text" id='lastName' name="lastName" placeholder='Enter Your Last Name' className='mt-1 mb-2 bg-slate-200 w-full px-2 py-1 rounded-sm focus-within:outline focus-within:outline-blue-300' value={data.lastName} onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name="email" placeholder='Enter Your Email Address' className='mt-1 mb-2 bg-slate-200 w-full px-2 py-1 rounded-sm focus-within:outline focus-within:outline-blue-300'
                        value={data.email} onChange={handleChange} />

                    <label htmlFor="password">Password</label>
                    <div className='flex px-1 py-1 rounded-sm  bg-slate-200 focus-within:outline focus-within:outline-blue-300 mt-1 mb-2'>
                        {show ? <input type="text" id='password' name="password" placeholder='Enter Your Password' className='w-full outline-none border-none  bg-slate-200' /> : <input type="password" id='password' name="password" placeholder='Enter Your Password' className='w-full outline-none border-none  bg-slate-200 ' value={data.password} onChange={handleChange} />}
                        <span onClick={showtext} className='flex text-xl'>{show ? <BiShowAlt /> : <BiHide />}</span>
                    </div>

                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <div className='flex px-1 py-1 rounded-sm bg-slate-200 focus-within:outline focus-within:outline-blue-300'>
                        <input type={confirmshow ? "text" : "password"} id='confirmPassword' name="confirmPassword" placeholder='Enter Confirm Password' className='w-full outline-none border-none  bg-slate-200' value={data.confirmPassword} onChange={handleChange} />
                        <span onClick={showtexts} className='flex text-xl'>{confirmshow ? <BiShowAlt /> : <BiHide />}</span>
                    </div>

                    <button type="submit" className='w-full max-w-[90px] bg-red-400 font-medium p-1 mt-2.5 rounded-full hover:bg-blue-300 text-semibold'>Sign Up</button>
                </form>
                <p className='text-500'>Already have an Account? <Link to='/login'><span className='text-red-400 underline '>Login</span></Link></p>
            </div>

        </div>
    )
}

export default SignUp