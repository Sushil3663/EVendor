import React from 'react'
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

const App = () => {
  return (

    <BrowserRouter>
         
      <Header />
      <div style={{ paddingTop: '4rem', backgroundColor : 'rgb(241 245 249)', minHeight:'100vh'}}>

      <Routes>
      
        <Route>
         
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/signup' element={<SignUp />} />

         
        </Route>
       
      </Routes>
  
   </div>
    </BrowserRouter >

  )
}

export default App