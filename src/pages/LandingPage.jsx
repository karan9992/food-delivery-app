import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Menu from '../components/Menu'
import Chef from '../components/Chef'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Customer from '../components/Customer'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            {/* <main className="container mx-auto max-w-[1260px] "> */}
                <HeroSection />
                <Services />
                <Menu />
                <Chef />
                <Customer />
                <Contact />
            {/* </main> */}
            <Footer />
        </div>
    )
}

export default LandingPage