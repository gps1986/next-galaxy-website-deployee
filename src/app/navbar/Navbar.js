"use client"
// components/Navbar.js
import Link from 'next/link';

// import Herosectiosn from '../hero/Herosectiosn';

export default function Navbar() {
 
  return (
    <>
    
      {/* Top Section */}
    
      
      <div className=" mx-auto top-0 z-20 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200 text-white text-center py-2"><span className="bg-gradient-to-r from-red-500 via-red-600 to-white"></span>
        <span className="tracking-wider">Contact us at: customercare@galaxypackersmovers.com | Toll-Free: 1-800-309-5565</span>
      </div>

      {/* Navbar */}
      <nav className="p-2 w-full z-20 bg-white border-b border-black shadow-md sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand/logo on the left */}
          <Link href="/" className="text-blue-500 font-bold text-lg"><img
            src="/dist/img/Galaxy-Logo-Final.png"
            alt="Carousel Image 2"
            className="w-25 h-8 lg:w-50 lg:h-20 md:w-50 md:h-20 object-fill transition-transform hover:scale-105"
          /></Link>

          {/* Navbar menu in the center */}
          <div className="hidden lg:flex md:flex space-x-1.5 lg:space-x-5 md:space-x-5 md:font-semibold lg:font-semibold">
          <Link href="/" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Home</Link>
          <Link href="/about" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">About</Link>
          <Link href="/services" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Services</Link>
          <Link href="/contact" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Contact</Link>
          </div>

          {/* Menu items for smaller screens */}
          <div className="flex space-x-4 font-semibold lg:md:hidden">
              <Link href="/" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Home</Link>
              <Link href="/about" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">About</Link>
              <Link href="/services" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Services</Link>
              <Link href="/contact" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Contact</Link>
              <Link href="/booking" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Quote</Link>
            </div>

          <div className="hidden lg:flex md:flex space-x-2 lg:space-x-5 md:space-x-5 md:font-semibold lg:font-semibold">
          <Link href="/booking" className="text-black pl-2 pr-2 hover:text-red-500 hover:bg-white hover:border-red-500 border-double border-4 border-indigo-600 transition-all duration-300">Get A Free Quote</Link>
          
          </div>

          {/* Login/Signup on the right */}
          {/* <div className="hidden md:flex lg:flex space-x-4 font-semibold">
          <Link href="/login" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Login</Link>
          <Link href="/signup" className="text-black hover:text-red-500 hover:bg-white hover:border-red-500 border-b-2 border-transparent transition-all duration-300">Signup</Link>
          </div> */}
        </div>
      </nav>
      <div className="relative">
        <div className="row">
          <div className="col-xl-9 col-lg-9">
            <div className="bg-black">
            <span><h1 className="text-white flex justify-center items-center">Safe & Reliable Packers & Movers Solutions!</h1></span>
            </div>

          </div>
        </div>
      </div>

      
      

      {/* <Herosectiosn/> */}
      
      
      </>
    
  );
};

