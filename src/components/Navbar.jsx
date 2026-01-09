import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import logoBlack from '../assets/logo-black.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='shadow-lg font-inter bg-white w-full'>

            <div className='flex items-center justify-between text-[18px] py-5 px-6 md:px-[100px] mx-auto container '>

                <div className="flex items-center gap-4">

                    <div className='md:hidden flex items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div>
                        <img src={logoBlack} alt="logo" className="h-[40px] md:h-[57px]" />
                    </div>
                </div>


                <div className='hidden md:flex items-center'>
                    <a href="#" className='p-4 text-red'>Home</a>
                    <a href="#" className='p-4 hover:text-red transition'>Menu</a>
                    <a href="#" className='p-4 hover:text-red transition'>Service</a>
                    <a href="#" className='p-4 hover:text-red transition'>About</a>
                    <a href="#" className='p-4 hover:text-red transition'>Contact Us</a>
                </div>


                <button className=' md:block bg-red text-white py-2 rounded-lg px-6'>
                    Login
                </button>


            </div>


            {isOpen && (
                <div className='md:hidden flex flex-col items-center bg-white pb-6 space-y-4 border-t'>
                    <a href="#" className='pt-4 text-red' onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Menu</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Service</a>
                    <a href="#" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Contact Us</a>
                    <button className='bg-red text-white py-2 rounded-lg px-10 mt-2'>
                        Login
                    </button>
                </div>
            )}
        </nav>

    )
}

export default Navbar