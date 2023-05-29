import React, { useState } from 'react'
import { BiShowAlt } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loginRedux } from '../redux/userSlice';
import {useDispatch,useSelector } from 'react-redux';


const SignUp = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const userData = useSelector( state=> state )
    // console.log(userData.user)

    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        password: "",

    });



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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = data
        if (email && password) {
            let fechdata = await fetch("http://localhost:5000/login", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)

            })

            fechdata = await fechdata.json()
            alert(fechdata.message)
            console.log(fechdata)
            if (fechdata.alert) {
                dispatch(loginRedux(fechdata))
                setTimeout(()=>{
                    navigate('/')
                },2000)

            }
            console.log(userData.user)


        }
        else {
            alert("All fields are Required!")
        }

    }


    return (
        <div className='p-4 md:p-4 border-blue-400 mt-20'>
            <div className='w-full max-w-sm bg-white m-auto p-4'>
                <h1 className='flex justify-center text-2xl drop-shadow-lg'>Login</h1>


                <form className='w-full py-4' onSubmit={handleSubmit}>


                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name="email" placeholder='Enter Your Email Address' className='mt-1 mb-2 bg-slate-200 w-full px-2 py-1 rounded-sm focus-within:outline focus-within:outline-blue-300'
                        value={data.email} onChange={handleChange} />

                    <label htmlFor="password">Password</label>
                    <div className='flex px-1 py-1 rounded-sm  bg-slate-200 focus-within:outline focus-within:outline-blue-300 mt-1 mb-2'>
                        {show ? <input type="text" id='password' name="password" placeholder='Enter Your Password' className='w-full outline-none border-none  bg-slate-200' /> : <input type="password" id='password' name="password" placeholder='Enter Your Password' className='w-full outline-none border-none  bg-slate-200 ' value={data.password} onChange={handleChange} />}
                        <span onClick={showtext} className='flex text-xl'>{show ? <BiShowAlt /> : <BiHide />}</span>
                    </div>



                    <button type="submit" className='w-full max-w-[90px] bg-red-400 font-medium p-1 mt-2.5 rounded-full hover:bg-blue-300 text-semibold'>Sign Up</button>
                </form>
                <p className='text-500'>Don't have an Account? <Link to='/signup'><span className='text-red-400 underline '>Sign Up</span></Link></p>
            </div>

        </div>
    )
}

export default SignUp