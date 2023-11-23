
import Contact from './contact/page';
import Herosectiosn from './hero/Herosectiosn';
// import Image from "next/image";
// import styles from '../app/styles/about.module.css';
// import { useState } from 'react';
import Team from './team/Team';
import Script from 'next/script'






export default function Home() {

  return (
    <>
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FYKZQFFQ55');
        `}
      </Script>
    </div>


      <div className='relative w-full h-full max-auto my-auto'>
        <Herosectiosn />
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:divide-x lg:grid lg:grid-cols-4 lg:divide-x xl:grid-cols-4 divide-x gap-2 mt-auto mx-auto overflow-hidden">
          <div><div className="w-full transition-transform duration-300 ease-in-out">
            <div className="text-white sm-mb-25px hover:bg-amber-600 hover:text-white transition duration-300 ease-in-out border border-black bg-red-500 p-4 rounded">
              <div className="clearfix">
                <div className="icon flex items-center justify-center">
                  <img
                    draggable="false"
                    src="dist/icons/service-light-1.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <p className="flex text-white text-center justify-center items-center mt-2 font-bold">
                  HouseHold Shifting

                </p>
                <hr className="bg-white" />
              </div>
              <div className="dis clearfix">
                <p className="text-justify">
                  Trust Us to Move You Right and Relocate with Confidence, We've Got
                  Your Back
                </p>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div className="w-full transition-transform duration-300 ease-in-out">
              <div className="sm-mb-25px text-white hover:bg-amber-600 hover:text-white transition duration-300 ease-in-out border border-black bg-red-500 p-4 rounded">
                <div className="clearfix">
                  <div className="icon flex items-center justify-center">
                    <img
                      draggable="false"
                      src="dist/icons/service-light-1.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex text-white text-center justify-center items-center mt-2 font-bold">
                    Office Relocation

                  </div>
                  <hr className="bg-white" />
                </div>
                <div className="dis clearfix">
                  <p className="text-justify">
                    From One Workplace to the Next, Stress-Free, We Move, You Focus on
                    Business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full transition-transform duration-300 ease-in-out">
              <div className="text-white sm-mb-25px hover:bg-amber-600 hover:text-white transition duration-300 ease-in-out border border-black bg-red-500 p-4 rounded">
                <div className="clearfix">
                  <div className="icon flex items-center justify-center">
                    <img
                      draggable="false"
                      src="dist/icons/service-light-1.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex text-center justify-center items-center mt-2 font-bold">
                    Furniture Shifting
                  </div>
                  <hr className="bg-white" />
                </div>
                <div className="dis clearfix">
                  <p className="text-justify">
                    Your Furniture, Our Care, Handle with Care, Shift with Precision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full transition-transform duration-300 ease-in-out">
              <div className="text-white sm-mb-25px hover:bg-amber-600 hover:text-white transition duration-300 ease-in-out border border-black bg-red-500 p-4 rounded">
                <div className="clearfix">
                  <div className="icon flex items-center justify-center">
                    <img
                      draggable="false"
                      src="dist/icons/service-light-1.png"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex text-center justify-center items-center mt-2 font-bold">
                    Car/Bike Shifting
                  </div>
                  <hr className="bg-white" />
                </div>
                <div className="dis clearfix">
                  <p className="text-justify">
                    Relocating Vehicles, Preserving Quality, Auto Relocation, Made Easy
                    and Secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* -------start about--------- */}

        <div className="container mx-auto my-16 p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="mr-4">
              {/* Left Arrow (You can replace this with your own arrow icon or use an icon library) */}
              &larr;
            </div>
            <div className="relative">
              <h1 className="text-4xl font-bold mb-2">About Us</h1>

              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200"></div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200 mt-2"></div>

            </div>
            <div className="ml-4">
              {/* Right Arrow (You can replace this with your own arrow icon or use an icon library) */}
              &rarr;
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* First Row - Heading with Paragraph and Image with Description and Hover Transition */}
            <div className="col-span-1">
              <h2 className="text-3xl font-bold mb-4">Who We Are ?</h2>
              <div className="about-text margin-tb-25px">
                <h4 className="font-bold"><b>13 Years of Experience in Logistics Services</b></h4>
                <p className='text-justify'>
                  "We are a trusted name of <b>&ldquo;AVG Logistics Ltd.&rdquo;</b> in the logistics industry, backed by 13 years of invaluable experience. Expanding our expertise, That's great to hear that I have ventured into the packers and movers segment with the name <b>&ldquo;GALAXY Packers and Movers Pvt. Ltd.&rdquo;</b> Starting a business in this industry can be a promising venture, as there is always a demand for reliable moving services, whether for residential or commercial purposes., bringing the same level of excellence and reliability to ensure smooth relocations for our valued customers."
                </p>
                <br />
                <p className='text-justify'>Trust us to handle your relocation needs with the same expertise and dedication that have defined our legacy....</p>
                <br />
                <p className=" text-justify mb-8"><b>Our Mission :</b> At GALAXY Packers & Movers, our mission is simple: to make your move stress-free and efficient. We understand that moving can be a daunting task, whether it's across the city or across the state. That's why we're here to take the burden off your shoulders, ensuring a smooth and hassle-free experience. We aim to provide you with peace of mind, knowing that your prized possessions are in capable hands.</p>
              </div>

              <p className="lead">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                  Learn more <i className="fa fa-arrow-right"></i>
                </button>
              </p>

            </div>
            <div className="col-span-1 flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
                <img
                  src="/dist/img/how-we-work.png"
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-lg transition transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white opacity-0 hover:opacity-70 transition duration-300">
                  <p className="font-bold">Process of Booking</p>
                </div>
              </div>
              <p className="mt-2 lg:md:hidden"></p>
            </div>

            {/* Second Row - Image with Description and Hover Transition and Heading with Paragraph */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
                <img
                  src="/dist/img/truck01.png"
                  alt="Image 2"
                  className="w-full h-full object-fill rounded-lg transition transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white opacity-0 hover:opacity-70 transition duration-300">
                  <p className="font-bold">Galaxy Packers & Movers Fleet Moving on the Way</p>
                </div>
              </div>
              <p className="mt-2"></p>
            </div>
            <div className="col-span-1">
              <h2 className="text-3xl font-bold mb-4 text-justify">Why Galaxy Packers & Movers Pvt. Ltd. is the smart player in Logistics and Packers & Movers industry ?</h2>
              <div className="content">

                <p className="mb-4 text-justify">The company continuously strives to innovate and adapt to evolving market demands, positioning itself as a trusted and reliable partner for businesses seeking intelligent logistics solutions. Galaxy Packers & Movers stands out as a smart player in the logistics industry due to its technological advancements, customer-centric approach, comprehensive solutions, global expertise, and commitment to excellence.</p>
                <ul className="list-disc pl-6 mb-4 overflow-hidden">
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Extensive Industry Experience</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Technological Innovation</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Comprehensive Service Portfolio</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Customer-Centric Approach</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Professional and Well-Trained Team</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Strong Network and Global Reach</span></span></li>
                  <li><span className="flex items-center"><i className="fas fa-check mr-2 text-green-500"></i> <span className="font-bold">Focus on Quality and Reliability</span></span></li>
                </ul>
              </div>





            </div>
          </div>
        </div>
        {/* -------end about--------- */}
        {/* ------- start fourcard------ */}



        <div className="lg:md:mb-14 lg:md:mx-5 lg:md:h-[25rem] h-[25rem] mx-5 mb-14">
          <div className="relative bg-cover bg-center h-[23rem] lg:md:h-[23rem] transition duration-300 hover:bg-red-500 hover:text-amber-600 rounded-lg shadow-lg">
            <img src="dist/img/avg-7.jpg" alt="Background Image" className="w-full h-full absolute inset-0 object-cover rounded-lg" />
            <div className="absolute lg:md:inset-1 lg:md:flex lg:md:items-center lg:md:justify-center lg:md:mx-96 lg:md:p-16">
              <div className="began-wrap lg:md:w-full lg:md:p-4 lg:md:h-full lg:md:text-center lg:md:space-y-4 lg:md:mb-80">
                <h2 className="text-2xl font-bold text-red-500 text-shadow-md bg-gradient-to-r from-amber-600 via-sky-blue to-orange-700 text-transparent bg-clip-text lg:md:from-red-500 lg:md:to-black lg:md:text-transparent lg:md:bg-clip-text text-center">Keep Safe Your Relocation with Galaxy Packers & Movers</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mx-3 lg:md:grid lg:md:grid-cols-2 lg:md:gap-4 lg:md:mx-3 lg:md:py-7">
                  {/* <!-- First Row --> */}
                  <div className="flex flex-col justify-center items-center lg:md:flex lg:md:flex-col lg:md:justify-center lg:md:items-center bg-white p-4 hover:bg-red-500 hover:text-white rounded-md ">
                    <span className="inline-block mb-2">
                      <img src="dist/img/booknow.png" alt="Background Image" className='w-18 h-16 ' />
                    </span>
                    <h3 className="mt-2 font-bold">Hassle Free Booking</h3>
                  </div>

                  <div className="flex flex-col justify-center items-center lg:md:flex lg:md:flex-col lg:md:justify-center lg:md:items-center bg-white p-4 hover:bg-red-500 hover:text-white rounded-md ">
                    <span className="inline-block mb-2">
                      <img src="dist/img/deliveryimg.png" alt="Background Image" className='w-18 h-16 ' />
                    </span>
                    <h3 className="mt-2 font-bold">Time Bound Delivery</h3>
                  </div>

                  {/* <!-- Second Row --> */}
                  <div className="flex flex-col justify-center items-center lg:md:flex lg:md:flex-col lg:md:justify-center lg:md:items-center bg-white p-4 hover:bg-red-500 hover:text-white rounded-md ">
                    <span className="inline-block mb-2">
                      <img src="dist/img/sefty.png" alt="Background Image" className='w-18 h-16 ' />
                    </span>
                    <h3 className="mt-2 font-bold">Quality Assurance</h3>
                  </div>

                  <div className="flex flex-col justify-center items-center lg:md:flex lg:md:flex-col lg:md:justify-center lg:md:items-center bg-white p-4 hover:bg-red-500 hover:text-white rounded-md ">
                    <span className="inline-block mb-2">
                      <img src="dist/img/costopt.jpg" alt="Background Image" className='w-18 h-16 ' />
                    </span>
                    <h3 className="mt-2 font-bold">Optimization Of Cost</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------- end fourcard------ */}
        {/* --services section--- */}
        <div className="section padding-tb-100px section-ba-1 mx-5" id="gp-services-section">
          <div className="container flex flex-col items-center justify-center">
            <div className="section-title mb-8">
              <div className="flex items-center justify-center mb-8">
                <div className="mr-4">
                  {/* Left Arrow (You can replace this with your own arrow icon or use an icon library) */}
                  &larr;
                </div>
                <div className="relative">
                  <h1 className="text-4xl font-bold mb-2">Services we offer</h1>
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200"></div>
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200 mt-2"></div>
                </div>
                <div className="ml-4">
                  {/* Right Arrow (You can replace this with your own arrow icon or use an icon library) */}
                  &rarr;
                </div>
              </div>
              <div className="icon text-main-color"><i className="fa fa-truck"></i></div>
              <div className="text-justify">
                There are a number of packers and movers in India, but we are proud to say that we are one of the professional and most trusted packers and movers.
                Once you hire us for Relocation services and other moving needs, we give our best to make your relocation stress-free and hassle-free.
                We provide numerous services.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              <div className="col-span-1">
                <div className="service-card border border-red-600 text-black hover:text-white hover:bg-amber-600 transition duration-300 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="icon"><img draggable="false" src="dist/icons/service-dark-4.png" alt="" /></div>
                  </div>
                  <div className="col-span-1">
                    <div className="service-card relative hover:bg-red-500 hover:text-white text-white transition duration-300 transform hover:rotate-360 spin rounded-lg overflow-hidden">
                      <div className="absolute inset-0 text-white bg-red-500 hover:bg-red-500 opacity-0 hover:opacity-75 transition duration-300"></div>
                      <a href="#" className="block text-center title h2 text-black hover:text-white">
                        <span className="relative z-10 transform hover:scale-x-[-1]"><b>Packaging</b></span>
                      </a>
                    </div>
                  </div>
                  <div className="des text-justify p-4">
                    <p className='text-justify'>
                      This service involves the careful and secure packing of goods and items for various purposes, such as transportation or storage.
                      It includes selecting appropriate packaging materials, wrapping fragile items, and ensuring items are packaged in a way that prevents damage during handling and transit.
                      After packing, items may be stored in a warehouse or transported to their destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="service-card border border-red-600 text-black hover:text-white hover:bg-amber-600 transition duration-300 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="icon"><img draggable="false" src="dist/icons/warehouse1.png" alt="" /></div>
                  </div>
                  <div className="col-span-1">
                    <div className="service-card relative hover:bg-red-500 hover:text-white text-white transition duration-300 transform hover:rotate-360 spin rounded-lg overflow-hidden">
                      <div className="absolute inset-0 text-white bg-red-500 hover:bg-red-500 opacity-0 hover:opacity-75 transition duration-300"></div>
                      <a href="#" className="block text-center title h2 text-black hover:text-white">
                        <span className="relative z-10 transform hover:scale-x-[-1]"><b>Storage</b></span>
                      </a>
                    </div>
                  </div>
                  <div className="des text-justify p-4">
                    <p className='text-justify'>
                      Storage refers to the storage of goods in a dedicated facility or warehouse.
                      Warehouses are used for various purposes, including storing products, managing inventory, and distributing goods.
                      Businesses often utilize warehouses to store items before they are shipped to customers or retailers.
                      Warehouses typically provide security, climate control, and inventory management services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="service-card border border-red-600 text-black hover:text-white hover:bg-amber-600 transition duration-300 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="icon"><img draggable="false" src="dist/icons/tranportation.png" alt="" /></div>
                  </div>
                  <div className="col-span-1">
                    <div className="service-card relative hover:bg-red-500 hover:text-white text-white transition duration-300 transform hover:rotate-360 spin rounded-lg overflow-hidden">
                      <div className="absolute inset-0 text-white bg-red-500 hover:bg-red-500 opacity-0 hover:opacity-75 transition duration-300"></div>
                      <a href="#" className="block text-center title h2 text-black hover:text-white">
                        <span className="relative z-10 transform hover:scale-x-[-1]"><b>Transportation</b></span>
                      </a>
                    </div>
                  </div>
                  <div className="des text-justify p-4">
                    <p className='text-justify'>
                      Transportation services involve the movement of goods and items from one location to another.
                      This can encompass different modes of transportation, such as road transportation (Trucks), rail, air cargo, or sea freight,
                      depending on the distance and type of goods being transported.
                      Transportation companies are responsible for ensuring the safe and timely delivery of goods to their designated destinations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="service-card border border-red-600 text-black hover:text-white hover:bg-amber-600 transition duration-300 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="icon"><img draggable="false" src="dist/icons/service-dark-1.png" alt="" /></div>
                  </div>
                  <div className="col-span-1">
                    <div className="service-card relative hover:bg-red-500 hover:text-white text-white transition duration-300 transform hover:rotate-360 spin rounded-lg overflow-hidden">
                      <div className="absolute inset-0 text-white bg-red-500 hover:bg-red-500 opacity-0 hover:opacity-75 transition duration-300"></div>
                      <a href="#" className="block text-center title h2 text-black hover:text-white">
                        <span className="relative z-10 transform hover:scale-x-[-1]"><b>Unpacking</b></span>
                      </a>
                    </div>
                  </div>
                  <div className="des text-justify p-4">
                    <p className='text-justify'>
                      Unpacking is the opposite of packaging.
                      It refers to the process of removing items from their packaging containers, such as boxes or crates, upon arrival at their destination.
                      This can involve unwrapping items, setting them up, and organizing them in their new location.
                      Unpacking services are often offered by professional movers and can save you time and effort during the moving process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -----Team Section------- */}
        <Team />
        {/* -----Team Section end------- */}

        {/* -----contact Section------- */}
        <Contact />

        {/* -----contact Section end------- */}

      </div>

    </>

  )
}
