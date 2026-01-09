import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import logoWhite from '../assets/916ecf3265964e4c27fe4a1a82623b2adedc6ea4.png'



const Footer = () => {
    return (
        <section className='w-full bg-red '>
        <div className="px-6 py-12 md:px-24  text-white container mx-auto ">
    <div className='flex flex-col md:flex-row'>
        
        <div className='w-full md:w-2/3'>
            <div className="flex justify-center md:justify-start">
                <img
                    src={logoWhite}
                    alt="logo"
                    className="h-[80px] md:h-[100px] w-auto"
                />
            </div>
            <h1 className='font-merriweather text-2xl mt-4 text-center md:text-left'>Subscribe Now</h1>
            <p className='py-2 md:pr-12 text-base md:text-lg text-center md:text-left'>
                Stay in the loop! Subscribe now for exclusive offers, tasty updates, and the latest on new dishes straight to your inbox.
            </p>
            
           
            <div className="flex mt-4 gap-2">
                <input 
                    type="text" 
                    placeholder='Enter Your Email' 
                    className='bg-white rounded-lg p-3 text-gray-600 w-full md:w-80'
                />
                <input 
                    type="button" 
                    value="Subscribe" 
                    className='bg-orange rounded-lg px-8 py-3 font-bold cursor-pointer hover:bg-orange-600 transition-colors' 
                />
            </div>
        </div>

        
        <div className="hidden md:flex flex-col p-4 pl-16">
            <h1 className='font-merriweather text-2xl'>Quick Links</h1>
            <a href="#" className='text-sm underline py-2 hover:text-orange-200'>Home</a>
            <a href="#" className='text-sm underline py-2 hover:text-orange-200'>Services</a>
            <a href="#" className='text-sm underline py-2 hover:text-orange-200'>Menu</a>
            <a href="#" className='text-sm underline py-2 hover:text-orange-200'>Contact Us</a>
            <a href="#" className='text-sm underline py-2 hover:text-orange-200'>About Us</a>
        </div>
    </div>

    <hr className='mt-12 mb-8 border-white/30' />

 
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <span className="text-sm opacity-80">&copy; 2024 FoodStar. All Rights Reserved.</span>
        <div className='hidden md:flex items-center gap-4'>
            <FaFacebookF className='cursor-pointer hover:scale-110 transition-transform' size={24} />
            <FaLinkedinIn className='cursor-pointer hover:scale-110 transition-transform' size={24}/>
            <FaInstagram className='cursor-pointer hover:scale-110 transition-transform' size={24}/>
            <RiTwitterXLine className='cursor-pointer hover:scale-110 transition-transform' size={24}/>
        </div>
    </div>
</div>
</section>

    )
}

export default Footer
