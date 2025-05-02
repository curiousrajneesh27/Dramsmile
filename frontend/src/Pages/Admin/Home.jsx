import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiSolidOffer } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { CiLogout } from "react-icons/ci";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Home = () => {
    // State to control form visibility
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Toggle form visibility
    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    // Sample offer data
    const offers = [
        {
            id: 1,
            name: "Teeth Whitening Special",
            description: "Professional teeth whitening treatment at a discounted price",
            price: 12000,
            discount: 25
        },
        {
            id: 2,
            name: "Complete Dental Checkup",
            description: "Comprehensive dental examination with X-rays included",
            price: 5000,
            discount: 20
        },
        {
            id: 3,
            name: "Root Canal Treatment",
            description: "Special offer on root canal procedure with free consultation",
            price: 15000,
            discount: 15
        },
        {
            id: 4,
            name: "Kids Dental Package",
            description: "Complete dental care package for children under 12",
            price: 3500,
            discount: 30
        },
        {
            id: 5,
            name: "Dental Implant Offer",
            description: "Get dental implants at a reduced price this month",
            price: 25000,
            discount: 10
        }
    ];

    // Handlers for edit and delete (placeholder functions)
    const handleEdit = (id) => {
        console.log("Edit offer with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Delete offer with ID:", id);
    };

    return (
        <div className='min-h-screen w-full bg-zinc-200 overflow-x-hidden'>
            <div className='w-full overflow-y-auto px-20 pt-14 pb-10'>
                <h1 className='text-6xl tracking-tighter font-medium flex items-center gap-4'>Wassup, Doctor <img className='h-20 object-contain bg-white rounded-full p-4' src="https://em-content.zobj.net/source/apple/391/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png" alt="" /></h1>
                <div className='flex flex-wrap items-center gap-4 mt-10'>
                    <div className='h-36 w-60 bg-white rounded-4xl p-4 px-8'>
                        <h1 className='text-7xl font-bold'>26+</h1>
                        <h1 className='text-xl font-medium tracking-tighter'>Special offer clicks</h1>
                    </div>
                    <div className='h-36 w-60 bg-white rounded-4xl p-4 px-8'>
                        <h1 className='text-7xl font-bold'>20+</h1>
                        <h1 className='text-xl font-medium tracking-tighter'>appointment books</h1>
                    </div>
                    <div className='h-36 w-60 bg-white rounded-4xl p-4 px-8'>
                        <h1 className='text-7xl font-bold'>35+</h1>
                        <h1 className='text-xl font-medium tracking-tighter'>Review checks</h1>
                    </div>
                </div>
                <h1 className='text-3xl tracking-tighter font-medium mt-14 flex items-center gap-2'><BiSolidOffer /> Running special offers</h1>
                <div className='offers_table mt-6 w-full'>
                    <div className='bg-white rounded-xl shadow-sm overflow-x-auto'>
                        <table className='min-w-full table-fixed'>
                            <thead className='bg-orange-400 text-white'>
                                <tr>
                                    <th className='py-4 px-6 w-1/5'>Offer Name</th>
                                    <th className='py-4 px-6 w-2/5'>Description</th>
                                    <th className='py-4 px-6 w-1/6'>Price (₹)</th>
                                    <th className='py-4 px-6 w-1/6'>Discount (%)</th>
                                    <th className='py-4 px-6 text-center w-1/6'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offers.map((offer, index) => (
                                    <tr key={offer.id} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
                                        <td className='py-4 px-6 font-medium'>{offer.name}</td>
                                        <td className='py-4 px-6'>{offer.description}</td>
                                        <td className='py-4 px-6 text-center'>₹{offer.price.toLocaleString()}</td>
                                        <td className='py-4 px-6 text-center'>{offer.discount}%</td>
                                        <td className='py-4 px-6'>
                                            <div className='flex items-center justify-center gap-4'>
                                                <button
                                                    onClick={() => handleEdit(offer.id)}
                                                    className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer transition-colors'
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(offer.id)}
                                                    className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 cursor-pointer transition-colors'
                                                >
                                                    <RiDeleteBin6Line />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-end mt-6'>
                    <button 
                        onClick={toggleForm}
                        className='bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-orange-500 cursor-pointer transition-colors flex items-center gap-2'
                    >
                        <BiSolidOffer /> Add New Offer
                    </button>
                </div>

                {/* LogOut */}
                <button className='bg-orange-400 fixed z-10 right-10 top-10 text-white py-2 px-6 rounded-lg hover:bg-orange-500 cursor-pointer transition-colors flex items-center gap-2 font-semibold'>
                    <CiLogout /> Logout
                </button>
                
                {/* Special Offer Modal - Only show when isFormOpen is true */}
                {isFormOpen && (
                    <>
                        <div className='bg-black opacity-20 h-screen w-full fixed top-0 left-0 z-20'></div>
                        <div className='h-[80vh] fixed z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white w-[60vw] rounded-xl shadow-lg overflow-auto'>
                            <div className='sticky top-0 bg-orange-400 text-white py-4 px-6 flex justify-between items-center'>
                                <h2 className='text-2xl font-medium tracking-tighter'>Add Special Offer</h2>
                                <button 
                                    onClick={toggleForm}
                                    className='text-white text-xl cursor-pointer hover:bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors'
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div className='p-6'>
                                <form>
                                    <div className='mb-6'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='offerName'>
                                            Offer Name
                                        </label>
                                        <input 
                                            className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400' 
                                            id='offerName' 
                                            type='text' 
                                            placeholder='Enter offer name'
                                        />
                                    </div>
                                    
                                    <div className='mb-6'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
                                            Description
                                        </label>
                                        <textarea 
                                            className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 h-32' 
                                            id='description' 
                                            placeholder='Enter offer description'
                                        ></textarea>
                                    </div>
                                    
                                    <div className='flex gap-6 mb-6'>
                                        <div className='w-1/2'>
                                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>
                                                Price (₹)
                                            </label>
                                            <input 
                                                className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400' 
                                                id='price' 
                                                type='number' 
                                                placeholder='Enter price'
                                            />
                                        </div>
                                        
                                        <div className='w-1/2'>
                                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='discount'>
                                                Discount (%)
                                            </label>
                                            <input 
                                                className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400' 
                                                id='discount' 
                                                type='number' 
                                                placeholder='Enter discount percentage'
                                                min='0'
                                                max='100'
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='mb-6'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='validity'>
                                            Validity Period
                                        </label>
                                        <div className='flex gap-4'>
                                            <div className='w-1/2'>
                                                <label className='block text-gray-700 text-xs mb-1' htmlFor='startDate'>
                                                    Start Date
                                                </label>
                                                <input 
                                                    className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400' 
                                                    id='startDate' 
                                                    type='date'
                                                />
                                            </div>
                                            <div className='w-1/2'>
                                                <label className='block text-gray-700 text-xs mb-1' htmlFor='endDate'>
                                                    End Date
                                                </label>
                                                <input 
                                                    className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400' 
                                                    id='endDate' 
                                                    type='date'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='mb-6'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                                            Offer Status
                                        </label>
                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-center'>
                                                <input 
                                                    id='active'
                                                    type='radio'
                                                    name='status'
                                                    value='active'
                                                    className='w-4 h-4 text-orange-400 focus:ring-orange-400'
                                                    defaultChecked
                                                />
                                                <label htmlFor='active' className='ml-2 text-gray-700'>
                                                    Active
                                                </label>
                                            </div>
                                            <div className='flex items-center'>
                                                <input 
                                                    id='inactive'
                                                    type='radio'
                                                    name='status'
                                                    value='inactive'
                                                    className='w-4 h-4 text-orange-400 focus:ring-orange-400'
                                                />
                                                <label htmlFor='inactive' className='ml-2 text-gray-700'>
                                                    Inactive
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='mb-6'>
                                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='terms'>
                                            Terms & Conditions
                                        </label>
                                        <textarea 
                                            className='shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 h-24' 
                                            id='terms' 
                                            placeholder='Enter terms and conditions'
                                        ></textarea>
                                    </div>
                                    
                                    <div className='flex justify-end gap-4'>
                                        <button
                                            type='button'
                                            onClick={toggleForm}
                                            className='py-3 px-6 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type='submit'
                                            className='py-3 px-6 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors'
                                        >
                                            Save Offer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home