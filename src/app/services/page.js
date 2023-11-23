// pages/services.js


export default function Services() {
  return (
    <>
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

  </>
  );
}
