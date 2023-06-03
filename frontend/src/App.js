import React, { useEffect } from 'react'
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import SignUp from './pages/SignUp';
import { setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './pages/Cart';

const App = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state)=>state.product)
  console.log(productData)


  useEffect(() => {
    (async()=>{
      const resdata =  await fetch('http://localhost:5000/Product')
      let data =  await resdata.json()
      // console.log(data)

      dispatch(setDataProduct(data))

    })()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // const fetchData = async () => {
  //   let resdata = await fetch('http://localhost:5000/Product')
  //   let data =  await resdata.json()
  //   dispatch(setDataProduct(data))
  //   console.log(data)
  // }
  return (

    <BrowserRouter>

      <Header />
      <div style={{ paddingTop: '4rem', backgroundColor: 'rgb(241 245 249)', minHeight: '100vh' }}>

        <Routes>

          <Route>

            <Route path='/' element={<Home />} />
            <Route path='/menu/:id' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path ='/cart' element ={<Cart/>} />


          </Route>

        </Routes>

      </div>
    </BrowserRouter >

  )
}

export default App