import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basic from '../components/Basic';
import Forms from '../components/Forms';
import Header from '../common/Header';
import Apicall from '../components/Apicall';
import Products from '../components/Products';

const Base = () => {
  return (
    <main>
        <BrowserRouter>
            <header>
                <Header />
            </header>
            <section className='container'>
                <Routes>
                    <Route path='/basic' element={<Basic />} />
                    <Route path='/forms' element={<Forms />} /> 
                    <Route path='/apicall' element={<Apicall />} />
                    <Route path="" element={<Basic/>} />
                    <Route path='/products' element={<Products /> } />
                </Routes>
            </section>
            <footer>
                {/*  */}
            </footer>
        </BrowserRouter>
    </main>
  )
}

export default Base;