import React from 'react'
import scooterImg from '../assets/01c3e43a8ce702abfa10a9eb7b39e318bca7eaa4.png'
import offerImg from '../assets/504ae7d529734f0a6b57cb1173f711c20013f624.png'
import paymentImg from '../assets/976b51b09b6b792dd738c6f0a8a4ab24afea8a5b.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
const Services = () => {
    return (
        <section className="w-full ">
            <div className='flex items-center flex-col p-8 md:p-25 container mx-auto '>

                <div className="text-3xl md:text-[40px] m-4 font-bold font-merriweather text-center">
                    Our Services
                </div>


                <p className='text-lg md:text-2xl font-inter px-4 md:px-16 text-center max-w-5xl'>
                    The best of dining to your doorstep! With a wide variety of cuisines, fast and reliable delivery,
                    and easy online ordering, we make enjoying your favorite meals simple and convenient.
                    Freshly prepared and carefully packed, our food is always just a click away!
                </p>


                {/* <div className='flex flex-col md:flex-row justify-center items-center md:items-end gap-12 md:gap-24 m-10'> */}

                <div className='w-full px-4 mt-24'>
                    <Swiper
                        slidesPerView={1} // Default for mobile
                        spaceBetween={20}
                        pagination={{ dynamicBullets: true, }}
                        breakpoints={{
                            // When window width is >= 640px (Tablet)
                            640: { slidesPerView: 2 },
                            // When window width is >= 1024px (Desktop)
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >


                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={scooterImg} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <h2 className='text-xl md:text-2xl w-[196px] text-center mt-4 font-semibold'>
                                    Fast & Reliable Food Delivery
                                </h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={offerImg} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <h2 className='text-xl md:text-2xl w-[196px] text-center mt-4 font-semibold'>
                                    Special Deals & Discounts
                                </h2>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={paymentImg} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <h2 className='text-xl md:text-2xl w-[196px] text-center mt-4 font-semibold'>
                                    Flexible Payment Options
                                </h2>
                            </div>
                        </SwiperSlide>


                    </Swiper>


                </div>
            </div>
        </section>
    )
}

export default Services