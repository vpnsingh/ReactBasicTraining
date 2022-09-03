import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basic from '../components/Basic';
import Forms from '../components/Forms';
import Header from '../common/Header';
import Apicall from '../components/Apicall';
import Products from '../components/Products';
import Mobile from '../components/crud/Mobile';
import AddMobile from '../components/crud/AddMobile';
import Parent from '../components/contextAPI/Parent';
import State from '../components/useCallback/State';
import MemoExample from '../components/MemoExample';
import RefExample from '../components/refExample';

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
                    <Route path='/json-server' element={<Mobile /> } />
                    <Route path='/json-server/add' element={<AddMobile /> } />
                    <Route path='/context' element={<Parent /> } />
                    <Route path='/callback' element={<State /> } />
                    <Route path='/memo' element={<MemoExample /> } />
                    <Route path='/ref' element={<RefExample /> } />
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