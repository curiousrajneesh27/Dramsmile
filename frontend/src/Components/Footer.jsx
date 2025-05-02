import React from 'react'
import { RiToothFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            {/* Book Appointment Section */}
            <div className="bg-[#021D18] text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-6xl font-bold mb-8">Book Appointment Today</h2>
                    <button className="bg-white text-black px-9 py-4 rounded-full hover:bg-gray-100 font-bold text-xl">
                        Book An Appointment
                    </button>
                </div>
            </div>
            <footer className="bg-[#021D18] text-white py-16">

                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <RiToothFill className="w-8 h-8" />
                                <span className="text-xl font-bold">Cuspidal.</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Exceptional dental care for all ages. Your smile stays with us until smile.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-gray-300 hover:text-white">F</a>
                                <a href="#" className="text-gray-300 hover:text-white">T</a>
                                <a href="#" className="text-gray-300 hover:text-white">In</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4">Menu</h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                                <a href="#" className="block text-gray-300 hover:text-white">About</a>
                                <a href="#" className="block text-gray-300 hover:text-white">Services</a>
                                <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4">Support</h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-300 hover:text-white">Help Center</a>
                                <a href="#" className="block text-gray-300 hover:text-white">Account Information</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4">Subscribe</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Subscribe our newsletter for the latest update of Dental care
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="bg-white/10 px-4 py-2 rounded-l-full w-full text-sm"
                                />
                                <button className="bg-[#FF9500] px-6 py-2 rounded-r-full text-sm font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300 text-sm">
                        ©2025 Client work done by Rajneesh. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
