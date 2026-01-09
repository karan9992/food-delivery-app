import React from 'react'
import girlImg from '../assets/5aa67aaa9abb0674f4efdec9e4c7cf38d33a20f2.png'
import commaImg from '../assets/pngaaa.com-3520789.png'

const Customer = () => {
    return (
        <section className="w-full bg-orange">

           
            <div className='container mx-auto  p-8 md:p-24 px-6 md:px-28 flex flex-col md:flex-row items-center md:items-start'>

                <p className='font-merriweather text-2xl md:text-4xl font-bold text-center md:text-left mb-8 md:mb-0 md:mt-8 md:w-1/3'>
                    “See What Our Customer Say About Us”
                </p>

               
                <img
                    src={girlImg}
                    alt="Customer"
                    className='w-[185px] md:w-[192px] h-[185px] md:h-[220px] border-4 border-white shadow-lg z-10 -mb-10 md:mb-0 md:-mr-12 object-cover'
                />

              
                <div className='bg-white p-10 md:p-12 w-full shadow-xl rounded-lg md:rounded-none pt-16 md:pt-12'>
                    <img src={commaImg} alt="quote icon" className='w-8 md:w-12 mb-4 md:mb-6' />

                    <p className='text-sm md:text-lg leading-relaxed'>
                        Absolutely amazing experience! The food arrived hot and fresh, just as if it was served in a restaurant.
                        The delivery was fast, and the online ordering process was super easy. My family and I loved
                        every bite—definitely my go-to for quick, delicious meals at home!"
                    </p>

                    <div className='mt-6'>
                        <h2 className='font-bold text-xl md:text-2xl'>Sarah W</h2>
                        <h3 className='text-red-600 font-bold text-lg md:text-xl'>Proud Dog Mom</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer