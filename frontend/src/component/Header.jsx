import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from "react-hot-toast";

let emailss = "karkisushil309@gmail.com"
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const userData = useSelector((state) => state.user)
    console.log(userData.email)

    const dispatch = useDispatch();

    const show = () => {
        setShowMenu(preve => !preve)

    }

    const handleLogout = () => {
        dispatch(logoutRedux());
        toast("Logout successfully");
    };

    const cartChangeNumber = useSelector((state)=>state.product.cartItem)



    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 bg-white'>
            {/* desktop */}
            <div className='flex items-center h-full justify-between'>
                <div className='h-10 cursor-pointer'>
                    <img src={logo} alt="logo" className='h-full' />
                </div>


                <div className='flex items-center gap-4 md:gap-8 '>
                    <nav className='gap-4 md:gap-6 text-lg md:text-lg hidden md:flex'>
                        <Link to='/'>Home</Link>
                        <Link to='/menu/6474c9e99e7dd37bd1e2248a'>Menu</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>


                    </nav>
                    <Link to="/cart">
                    <div className='text-2xl text-red-400 relative'>
                        <BsCart />
                        <div className="absolute -top-3.5 text-gray-400 -right-1 text-center text-base h-4 w-4 m-0 p-0">{cartChangeNumber.length }</div>
                    </div>
                    </Link>
                    <div className='text-sm flex flex-col' onClick={show}>
                        <div className='border border-solid rounded-full p-1 border-gray-500 cursor-pointer'>
                            <FaUserAlt />
                            

                        </div>
                        
                        
                        {showMenu && (<div className='absolute right-2 p-4 py-2 mt-8 shadow drop-shadow-md bg-white flex flex-col min-w-[120] text-center'>
                            {userData.email === emailss && (
                                <Link to='/newproduct' className='cursor-pointer bg-slate-300'>New Product</Link>
                            )}
                            {/* <Link to='/newproduct' className='cursor-pointer'>New Product</Link> */}
                            {
                                userData.firstName ? <p className='cursor-pointer bg-red-200' onClick={handleLogout}>Logout({userData.firstName})</p> : <Link to='/login' className='cursor-pointer'>Login</Link>
                            }
                            {/* <Link to='/login' className='cursor-pointer'>Login</Link> */}
                            <nav className='text-lg md:text-sm flex flex-col md:hidden'>
                        <Link to='/' className='py-1 px-2'>Home</Link>
                        <Link to='/menu/6474c9e99e7dd37bd1e2248a' className='py-1 px-2'>Menu</Link>
                        <Link to='/about' className='py-1 px-2'>About</Link>
                        <Link to='/contact' className='py-1 px-2'>Contact</Link>



                    </nav>
                        </div>)}
                        



                    </div>
                </div>


            </div>






            {/* Mobile */}
        </header>
    )
}

export default Header;