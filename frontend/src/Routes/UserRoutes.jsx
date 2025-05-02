import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/User/Home'
import About from '../Pages/User/About'
import Gallery from '../Pages/User/Gallery'
import Contact from '../Pages/User/Contact'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const UserRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default UserRoutes
