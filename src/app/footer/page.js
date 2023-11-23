import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <>
       <footer className="text-white text-center text-lg-start bg-orange-600 p-4">
      {/* First Row */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="mb-4 md:w-1/2">
          <h5 className="mb-4 text-justify text-lg text-white">GALAXY Packers & Movers Pvt. Ltd.</h5>
          <p className="text-justify text-white">
            With a rich legacy of 13 years in the Logistics industry, we've honed our skills to perfection. Over the years, we've handled countless moves, each one unique, and have consistently delivered outstanding results. Our expertise spans across residential, commercial, and vehicle relocation, making us a comprehensive solution for all your moving requirements.
          </p>

          <div className="mt-4">
            <ul className="flex space-x-4">
              <li><a className="hover:text-blue-500 transition-colors duration-300" href="https://www.facebook.com/profile.php?id=61552480531484"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
              <li><a className="hover:text-blue-500 transition-colors duration-300" href="https://www.instagram.com/galaxy_packers_movers/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a className="hover:text-blue-500 transition-colors duration-300" href="https://www.youtube.com/@GALAXYPACKERSANDMOVERS"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a className="hover:text-blue-500 transition-colors duration-300" href="https://www.linkedin.com/company/galaxy-packers-and-movers/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="lg:w-1/2 lg:mx-3 md:w-1/2 lg:md:flex lg:md:items-start ">
        
        <div className="text-2xl font-semibold text-white capitalize dark:text-white pl-12">
        
        </div>

          <div className="mt-6 space-y-8 md:mt-8">
            <p className="text-2xl font-semibold text-white capitalize dark:text-white flex items-start pl-12">
            
            Registered Office :
         
            </p>
          
            <p className="flex items-start pl-8">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="mx-2 text-white truncate w-90 dark:text-white">
              Ground Floor, Mansarover Park Metro station Complex, Delhi -110032
              </span>
            </p>

            <p className="flex items-start -mx-2 pl-8">
            <FontAwesomeIcon icon={faPhone} />
              <span className="mx-2 text-white truncate w-90 dark:text-white tracking-wider">18003095565 (Toll Free No.)</span>
            </p>

            <p className="flex items-start -mx-2 pl-8">
            <FontAwesomeIcon icon={faEnvelope} />
              <span className="mx-2 text-white truncate w-90 dark:text-white">info@galaxypackersmovers.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="text-center p-3 bg-opacity-20 bg-black">
        <p className="text-light">
          <Link href="http://www.galaxypackersmovers.com/">
            
              &copy; {currYear} <strong>GALAXY Packers & Movers</strong>. All Rights Reserved
            
          </Link>
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer