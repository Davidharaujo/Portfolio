import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home'
import About from '../About'
import Work from '../Work'
import Contact from '../Contact'


export default function Rotas() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/sobre' element={<About />}/>
                <Route path='/trabalhos' element={<Work />}/>
                <Route path='/contato' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
