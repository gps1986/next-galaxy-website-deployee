"use client"
import { useState } from 'react';
import Head from 'next/head';


export default function About() {
  const [openTab, setOpenTab] = useState(1);

  const handleAccordionClick = (tabNumber) => {
    setOpenTab((prevTab) => (prevTab === tabNumber ? 0 : tabNumber));
  };

  return (  
    <>
    <div>
      <Head>
        <title>About Galaxy Packers & Movers</title>
        <link
          rel="canonical"
          href="https://galaxypackersmovers.com/about"
          key="canonical"
        />
      </Head>
      
    </div>
      <div className="container bg-white mx-auto my-16">
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

        <div className="gp-about-section bg-white p-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <div className="section-title-right text-main-color clearfix">
                  <div className="icon">
                    <img draggable="false" src="assets/icons/title-icon-1.png" alt="" />
                  </div>
                  <h2 className="title-text text-3xl font-bold mb-4 hover:text-red-500 transition duration-300">
                    Who We Are ?
                  </h2>
                </div>
                <div className="about-text mb-8">
                  <h4 className="font-bold">13 years of experience in Logistics services</h4>
                  <p className="text-justify">
                    "We are a trusted name of <b>&ldquo;AVG Logistics Ltd.&rdquo;</b> in the logistics industry, backed by 13 years of invaluable experience. Expanding our expertise, That's great to hear that I have ventured into the packers and movers segment with the name{' '}
                    <b>&ldquo;GALAXY Packers and Movers Pvt. Ltd.&rdquo;</b> Starting a business in this industry can be a promising venture, as there is always a demand for reliable moving services, whether for residential or commercial purposes., bringing the same level of excellence and reliability to ensure smooth relocations for our valued customers."
                  </p>
                  <br />
                  <p className="text-justify">
                    Trust us to handle your relocation needs with the same expertise and dedication that have defined our legacy....
                  </p>
                  <br />
                  <p className="text-justify">
                    <b>Our Mission :</b> At GALAXY Packers & Movers, our mission is simple: to make your move stress-free and efficient. We understand that moving can be a daunting task, whether it's across the city or across the state. That's why we're here to take the burden off your shoulders, ensuring a smooth and hassle-free experience. We aim to provide you with peace of mind, knowing that your prized possessions are in capable hands.
                  </p>
                </div>
                <h4><b>Why Choose GALAXY Packers and Movers ?</b></h4>
                <p className="text-justify mb-3">At GALAXY Packers and Movers, we understand that choosing the right moving company is crucial for smooth and stress-free relocation experience. Here are some compelling reasons why you should choose us:</p>
                {/* Accordion Section */}
                <div className="flex flex-col items-start justify-center">
                  <div className="w-full max-w-md">
                    {/* Accordion Item 1 */}
                    <div className="mb-4">
                      <button
                        type="button"
                        className={`w-full p-4 text-left border rounded ${openTab === 1 ? ' bg-red-500 text-white' : 'bg-red-500 text-white hover:text-white hover:bg-amber-500'
                          } transition-colors`}
                        onClick={() => handleAccordionClick(1)}
                      >
                        <span className="font-semibold">Experience You Can Trust</span>
                        <span className="ml-auto">
                          {openTab === 1 ? '[-]' : '[+]'}
                        </span>
                      </button>
                      {openTab === 1 && (
                        <div className="p-4 border-t">
                          <p className='text-justify'>With over 13 years of experience in the logistics industry, we have perfected the art of moving. Our seasoned professionals are experts in handling all types of relocations, ensuring your belongings are in safe hands.</p>
                        </div>
                      )}
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="mb-4">
                      <button
                        type="button"
                        className={`w-full p-4 text-left border rounded ${openTab === 2 ? ' bg-red-500 text-white' : 'bg-red-500 text-white hover:text-white hover:bg-amber-500'
                          } transition-colors`}
                        onClick={() => handleAccordionClick(2)}
                      >
                        <span className="font-semibold">Professional and Skilled Team</span>
                        <span className="ml-auto">
                          {openTab === 2 ? '[-]' : '[+]'}
                        </span>
                      </button>
                      {openTab === 2 && (
                        <div className="p-4 border-t">
                          <p className="text-justify">Our dedicated team members are highly trained and committed to providing top-notch service. They understand the value of your possessions and handle them with the utmost care and precision.</p>
                        </div>
                      )}
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="mb-4">
                      <button
                        type="button"
                        className={`w-full p-4 text-left border rounded ${openTab === 3 ? ' bg-red-500 text-white' : 'bg-red-500 text-white hover:text-white hover:bg-amber-500'
                          } transition-colors`}
                        onClick={() => handleAccordionClick(3)}
                      >
                        <span className="font-semibold"> Tailored Solutions</span>
                        <span className="ml-auto">
                          {openTab === 3 ? '[-]' : '[+]'}
                        </span>
                      </button>
                      {openTab === 3 && (
                        <div className="p-4 border-t">
                          <p className="text-justify">We recognize that every move is unique. That's why we offer customized solutions to meet your specific needs. Whether it's a residential, commercial, or vehicle relocation, we've got you covered.</p>
                        </div>
                      )}
                    </div>
                     {/* Accordion Item 3 */}
                     <div className="mb-4">
                      <button
                        type="button"
                        className={`w-full p-4 text-left border rounded ${openTab === 4 ? ' bg-red-500 text-white' : 'bg-red-500 text-white hover:text-white hover:bg-amber-500'
                          } transition-colors`}
                        onClick={() => handleAccordionClick(4)}
                      >
                        <span className="font-semibold"> Safety is Our Priority</span>
                        <span className="ml-auto">
                          {openTab === 4 ? '[-]' : '[+]'}
                        </span>
                      </button>
                      {openTab === 4 && (
                        <div className="p-4 border-t">
                          <p className="text-justify">Your peace of mind matters to us. We prioritize the safety of your belongings during transit. Our use of high-quality packing materials and secure handling techniques ensures your items arrive in perfect condition.</p>
                        </div>
                      )}
                    </div>
                     {/* Accordion Item 3 */}
                     <div className="mb-4">
                      <button
                        type="button"
                        className={`w-full p-4 text-left border rounded ${openTab === 5 ? ' bg-red-500 text-white' : 'bg-red-500 text-white hover:text-white hover:bg-amber-500'
                          } transition-colors`}
                        onClick={() => handleAccordionClick(5)}
                      >
                        <span className="font-semibold"> Competitive Pricing</span>
                        <span className="ml-auto">
                          {openTab === 5 ? '[-]' : '[+]'}
                        </span>
                      </button>
                      {openTab === 5 && (
                        <div className="p-4 border-t">
                          <p className="text-justify">We believe that quality service shouldn't come with a hefty price tag. GALAXY Packers and Movers offers competitive pricing without compromising on the excellence of our services. Your satisfaction is our priority.</p>
                        </div>
                      )}
                    </div>
                    
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-left whitespace-nowrap">
                      Choose GALAXY Packers and Movers for your next move and experience the difference. Contact us today to get started on your hassle-free relocation journey.
                    </p>
                  </div>
                </div>


              </div>


              <div className="col-span-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-4 gap-2">
                  {/* Service Card 1 - Packing */}
                  <div className="col-span-1">
                    <div className="card-service bg-main-color p-4 bg-red-500 hover:bg-amber-600 hover:text-white transition duration-300">
                      <div className="icon">
                        <img draggable="false" src="dist/img/avg-2.png" alt="" />
                      </div>
                      <h2 className="text-white flex justify-center items-center">Packing</h2>
                      <hr className="bg-white" />
                      <div className="text text-white">
                        <p className="text-justify">
                          Packing refers to the process of carefully preparing items for transportation. It involves placing items into suitable containers or boxes, wrapping fragile items with protective materials like bubble wrap or packing paper, and ensuring that everything is securely packed to prevent damage during transit. Proper labeling of boxes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 2 - Loading */}
                  <div className="col-span-1">
                    <div className="card-service bg-main-color p-4 bg-red-500 hover:bg-amber-600 hover:text-white transition duration-300">
                      <div className="icon">
                        <img draggable="false" src="dist/img/avg-3.png" alt="" />
                      </div>
                      <h2 className="text-white flex justify-center items-center">Loading</h2>
                      <hr className="bg-white" />
                      <div className="text text-white">
                        <p className="text-justify">
                          Loading involves physically placing the packed items into a vehicle or container for transportation. It is essential to load items in a way that maximizes space utilization and prevents shifting or damage during transit. Loading often requires physical labor and the use of equipment like dollies, ramps, and straps to secure items in place.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 - Moving */}
                  <div className="col-span-1">
                    <div className="card-service bg-main-color p-4 bg-red-500 hover:bg-amber-600 hover:text-white transition duration-300">
                      <div className="icon">
                        <img draggable="false" src="dist/img/avg-6.png" alt="" />
                      </div>
                      <h2 className="text-white flex justify-center items-center">Moving</h2>
                      <hr className="bg-white" />
                      <div className="text text-white">
                        <p className="text-justify">
                          Moving encompasses the entire process of relocating goods from one location to another. This involves coordinating the transportation, overseeing the packing and loading processes, and ensuring that items reach their destination safely and on time.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 4 - Unloading */}
                  <div className="col-span-1">
                    <div className="card-service bg-main-color p-4 bg-red-500 hover:bg-amber-600 hover:text-white transition duration-300">
                      <div className="icon">
                        <img draggable="false" src="dist/img/avg-7.jpg" alt="" />
                      </div>
                      <h2 className="text-white flex justify-center items-center">Unloading</h2>
                      <hr className="bg-white" />
                      <div className="text text-white">
                        <p className="text-justify">
                          Unloading is the process of removing items from the transportation vehicle or container at the destination. It is crucial to handle items with care during unloading to prevent damage. Unloading often involves physically carrying or using equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}