// pages/contact.js
"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

export default function Contact() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation for email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email Address',
        text: 'Please enter a valid email address.',
      });
      return; // Stop form submission
    }

    // Custom validation for phone number format
    if (!/^\d{10}$/.test(phone)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number.',
      });
      return; // Stop form submission
    }

    // Client-side validation
    if (!name || !phone || !email || !message) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      highlightRequiredFields();
      return;
    }

    // Continue with form submission logic
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        Swal.fire(
          'Message sent successfully!',
          'We will get back to you soon.',
          'success'
        );

        // Reset form after successful submission
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        const inputElements = document.querySelectorAll('.contact-input');
        inputElements.forEach((input) => {
          input.style.border = '1px solid #ced4da';
        });
      } else {
        console.error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const highlightRequiredFields = () => {
    // Add red border to required input fields
    const requiredFields = ['name', 'phone', 'email', 'message'];
    requiredFields.forEach((field) => {
      const inputElement = document.getElementsByName(field)[0];
      if (inputElement) {
        inputElement.style.border = '2px solid red';
      }
    });
  };



  return (
    <>
      <div className="container lg:md:mx-14 lg:md:mt-5 lg:md:mb-6 my-16 lg:md:my-36">
        <div className="section-title mb-8">
          <div className="flex items-center justify-center mb-8">
            <div className="mr-4">
              {/* Left Arrow (You can replace this with your own arrow icon or use an icon library) */}
              &larr;
            </div>
            <div className="relative">
              <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
              <div className="flex justify-center space-x-4 my-3">
                {/* <FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-2xl" /> */}
                <a href="https://www.linkedin.com/company/galaxy-packers-and-movers/"><FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl" /></a>
                <a href="https://www.facebook.com/profile.php?id=61552480531484" ><FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-2xl" /></a>
                <a href="https://www.instagram.com/galaxy_packers_movers/"><FontAwesomeIcon icon={faInstagram} className="text-blue-500 text-2xl" /></a>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200"></div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-black via-red-600 via-30% to-yellow-200 mt-2"></div>
            </div>
            <div className="ml-4">
              {/* Right Arrow (You can replace this with your own arrow icon or use an icon library) */}
              &rarr;
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center">

          <div className="container py-8 ">
            <div className="mb-8">
              {/* Main Container with Hover Effect */}
              <div className="group hover:border-2 hover:border-red-500 rounded-md overflow-hidden p-2 md:p-8 lg:md:ml-8 lg:md:mx-36 border-2 border-yellow-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address Card with Hover Effect */}
                  <div className="group">
                    <div className="bg-white p-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-500 hover:text-white">
                      <h2 className="text-xl font-semibold mb-4">Registered Office :</h2>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Ground Floor, Mansarover Park Metro Station Complex, Delhi -110032
                      </p>
                      <p className="flex items-start mb-2 tracking-wider">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
                        18003095565 (Toll Free No)
                      </p>
                      <p className="flex items-start">
                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
                        info@galaxypackersmovers.com
                      </p>
                      <p className="flex items-start">
                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
                        customercare@galaxypackersmovers.com
                      </p>
                    </div>

                    <div className="bg-white mt-3 p-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-500 hover:text-white">
                      <h2 className="text-xl font-semibold mb-4">Branch Offices :</h2>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Ambala
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Chandigarh
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Mohali
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Ludhiana
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Mumbai
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Bangalore
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Kolkata
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Hyderabad
                      </p>

                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Ahemdabad
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Pune
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Chennai
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Goa
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Guwahati
                      </p>
                      <p className="flex items-start mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                        Panchkula
                      </p>

                    </div>
                  </div>



                  {/* Contact Form with Hover Effect */}
                  <div className=" bg-white p-2 lg:md:p-2 lg:md:mr-2 rounded-md shadow-md  border-2 border-red-500 hover:border-2 hover:border-red-500">
                    <h2 className="text-xl font-semibold mb-4">Send Us a Message - Frequently Asked Questions</h2>
                    {/* Contact Form */}
                    <form >
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 contact-input"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 contact-input"
                          required
                        />
                        <small>Enter a valid email address.</small>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          pattern="[0-9]{10}" minLength="10" maxLength="10" placeholder="Enter your mobile number" required title="Please enter a 10-digit mobile number without spaces or dashes" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 contact-input"

                        />

                        <small>Enter a 10-digit mobile number without spaces or dashes.</small>

                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 contact-input"
                          placeholder="Type your message here..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                      >
                        Submit
                      </button>
                    </form>
                    {/* End of Contact Form */}
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
