"use client"

const Team = () => {
    const teamMembers = [
        { name: 'Sanjay Gupta', position: 'Managing Director', image: '/dist/img/Sanjay_Gupta_ji.jpg' },
        { name: 'Asha Gupta', position: 'Director', image: '/dist/img/Asha_Gupta_Ji.jpg' },
        { name: 'Narandra Gupta', position: 'Business Head', image: '/dist/img/NPG.jpeg' },
        { name: 'Ravi Shankar', position: 'Manager(Operations)', image: '/dist/img/ravi-shankar.jpg' },
        { name: 'Pradeep Kumar', position: 'Packing Supervisor', image: '/dist/img/pradeepsup.jpg' },
        { name: 'Ram Lal', position: 'Regional Manager(PB & HR)', image: '/dist/img/ramlal1.jpg' },
      ];
  return (
    <>
     <div className="container flex flex-col items-center justify-center">
          <div className="section-title mb-8">
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                {/* Left Arrow (You can replace this with your own arrow icon or use an icon library) */}
                &larr;
              </div>
              <div className="relative">
                <h1 className="text-4xl font-bold mb-2">Our Team</h1>
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200"></div>
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200 mt-2"></div>
              </div>
              <div className="ml-4">
                {/* Right Arrow (You can replace this with your own arrow icon or use an icon library) */}
                &rarr;
              </div>
            </div>
            <div className="icon text-main-color"><i className="fa fa-truck"></i></div>
            <div className="text-justify mx-3 md:flex md:items-center md:justify-center md:mx-80 lg:flex lg:items-center lg:justify-center lg:mx-80">
              Our company management team comprises very dynamic and versatile logistics professionals with years of hands-on experience in providing satisfied customer service. Their dedication and hard work are giving new dimensions to our business. They are crucial pillars of our company who can transfer commitment, along with their expertise and skills, to the work to deliver outstanding results.
            </div>
          </div>


          <div className="grid grid-cols-1 md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="p-3 max-w-xs mx-auto transition-transform transform hover:scale-105 overflow-hidden">
                  <div className="card card-pf hover:bg-red-500 hover:text-white bg-black text-white">
                    <img src={member.image} className="card-img-top object-cover w-full h-32 md:h-40 lg:h-48" alt="" />
                    <div className="card-body">
                      <p className="card-text d-flex align-items-center justify-content-center text-uppercase font-bold text-sm">{member.name}</p>
                      <span className='d-flex align-items-center justify-content-center text-uppercase text-xs'>{member.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      

    
    
    
    </>
  )
}

export default Team