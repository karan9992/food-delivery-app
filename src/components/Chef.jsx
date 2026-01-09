import React from 'react'
import chef1 from '../assets/2cf1232e979d9a5d0992564e81a1ca2c78ee43e0.png'
import chef2 from '../assets/cbeec0eeadc5ffa023c0591fb35468a3ed7662c6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

const Chef = () => {
    return (
        <section className="w-full bg-white">
            <div className='flex flex-col items-center py-12 container mx-auto max-w-[1260px]'>
                <h1 className='text-3xl md:text-[40px] mb-10 font-merriweather font-bold text-center'>
                    Meet Our Expert Chefs
                </h1>

                <div className='w-full px-4'>
                    <Swiper
                        slidesPerView={1} // Default for mobile
                        spaceBetween={0}
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
                        {/* Chef Slide 1 */}
                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={chef1} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <div className="text-center mt-4 text-lg md:text-xl font-bold font-inter">Reema Nair</div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={chef2} alt="Chef" className="w-[200px] h-[200px]  border-orange object-cover " />
                                <div className="text-center mt-4 text-lg md:text-xl font-bold font-inter">Naresh Rajput</div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className='flex flex-col items-center pb-10'>
                                <img src={chef1} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <div className="text-center mt-4 text-lg md:text-xl font-bold font-inter">Priyamani Kumar</div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className='flex flex-col items-center pb-10'>
                                <img src={chef2} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <div className="text-center mt-4 text-lg md:text-xl font-bold font-inter">Shreyas Iyer</div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex flex-col items-center pb-10'>
                                <img src={chef1} alt="Chef" className="w-[200px] h-[200px]  object-cover " />
                                <div className="text-center mt-4 text-lg md:text-xl font-bold font-inter">Shubham Kumar</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Chef