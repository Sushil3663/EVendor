import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from "react-hot-toast";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const userData = useSelector((state) => state.user)
    console.log(userData)

    const dispatch = useDispatch();

    const show = () => {
        setShowMenu(preve => !preve)

    }
  
    const handleLogout = () => {
        dispatch(logoutRedux());
        toast("Logout successfully");
      };
    
  

        return (
            <header className='fixed shadow-md w-full h-16 px-2 md:px-4 bg-white'>
                {/* desktop */}
                <div className='flex items-center h-full justify-between'>
                    <div className='h-10 cursor-pointer'>
                        <img src={logo} alt="logo" className='h-full' />
                    </div>


                    <div className='flex items-center gap-4 md:gap-8'>
                        <nav className='flex gap-4 md:gap-6 text-lg md:text-lg'>
                            <Link to='/'>Home</Link>
                            <Link to='/menu'>Menu</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact</Link>


                        </nav>

                        <div className='text-2xl text-red-400 relative'>
                            <BsCart />
                            <div className="absolute -top-3.5 text-gray-400 -right-1 text-center text-base h-4 w-4 m-0 p-0">0</div>
                        </div>

                        <div className='text-sm' onClick={show}>
                            <div className='border border-solid rounded-full p-1 border-gray-500 cursor-pointer'>
                                <FaUserAlt />

                            </div>
                            {showMenu && (<div className='absolute right-2 py-2 px-2 shadow drop-shadow-md bg-white flex flex-col'>
                                <Link to='/newproduct' className='cursor-pointer'>New Product</Link>
                                {
                                    userData.firstName ? <p className='cursor-pointer' onClick={handleLogout}>Logout</p> : <Link to='/login' className='cursor-pointer'>Login</Link>
                                }
                                {/* <Link to='/login' className='cursor-pointer'>Login</Link> */}

                            </div>)}



                        </div>
                    </div>


                </div>






                {/* Mobile */}
            </header>
        )
    }

export default Header;