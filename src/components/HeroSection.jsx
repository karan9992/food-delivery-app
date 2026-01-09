import React from 'react'
import foodImg from '../assets/8eb37f5d990da9dcaff73d3f2a339d3ebdb31c12.png'

const HeroSection = () => {
    return (
        <section className='bg-off-white w-full'>
            <div className='flex flex-col-reverse md:flex-row  font-merriweather container mx-auto '>

                <div className="left w-full md:w-1/2 p-8 md:p-16 md:pl-25 flex flex-col justify-center text-center md:text-left">
                    <div className='font-bold text-3xl md:text-5xl'>The Best </div>
                    <div className="font-bold text-3xl md:text-5xl my-2 text-red">Delicious Food</div>
                    <div className="font-bold text-3xl md:text-5xl">that Meets Your Need</div>
                    <p className='my-4 text-lg md:text-xl font-light'>
                        Indulge in the best flavor and freshness, crafted to satisfy every craving and nourish every need.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className='w-fit text-lg md:text-xl text-white font-inter p-2 px-6 rounded-lg bg-red'>
                            Order Now
                        </button>
                    </div>
                </div>


                <div className="right w-full md:w-1/2">
                    <img src={foodImg} alt="Food" className='w-full h-full  object-cover' />
                </div>
            </div>
        </section>

    )
}

export default HeroSection