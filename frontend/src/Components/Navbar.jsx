import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className='h-[10vh] w-full flex items-center justify-between px-20'>
                    <div className='logo w-[20%]'>
                        <h1 className='text-2xl font-medium tracking-tighter'>Dream Smile Dental</h1>
                    </div>
                    <div className="flex w-[60%] items-center justify-center gap-8">
                        <Link to="/" className="hover:text-gray-600 font-medium text-lg">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-gray-600 font-medium text-lg">
                            About
                        </Link>
                        <Link to="/gallery" className="hover:text-gray-600 font-medium text-lg">
                            Gallery
                        </Link>
                        <Link to="/contact" className="hover:text-gray-600 font-medium text-lg">
                            Contact
                        </Link>
                    </div>
                    <div className='w-[20%] flex justify-end'>
                        <a href="tel:+911234567890" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
                            Contact us
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
