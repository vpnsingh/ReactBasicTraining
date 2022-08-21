import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basic from '../components/Basic';
import Forms from '../components/Forms';
import Header from '../common/Header';
import Apicall from '../components/Apicall';

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