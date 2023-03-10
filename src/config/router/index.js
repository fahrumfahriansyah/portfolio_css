import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Open, Home, Register, Login, About } from '../../pages'

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<Open />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/About' element={<About />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index
