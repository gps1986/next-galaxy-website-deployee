"use client"
import { useState } from 'react';
import Swal from 'sweetalert2';

const Booking = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [pickupFrom, setPickupFrom] = useState('');
  const [deliveryTo, setDeliveryTo] = useState('');
  const [shiftingDate, setShiftingDate] = useState('');
  const [bookingType, setBookingType] = useState('HouseHold Shifting');
  const [subBookingType, setSubBookingType] = useState('One BHK');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation for exactly 10 digits
    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Mobile Number',
        text: 'Please enter a 10-digit mobile number without spaces or dashes.',
      });
      return; // Stop form submission
    }

    // Custom validation for email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email Address',
        text: 'Please enter a valid email address.',
      });
      return; // Stop form submission
    }

    // Client-side validation
    if (!username || !mobile || !email || !pickupFrom || !deliveryTo || !shiftingDate) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      highlightRequiredFields();
      return;
    }

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          mobile,
          email,
          pickupFrom,
          deliveryTo,
          shiftingDate,
          bookingType,
          subBookingType,
        }),
      });

      if (response.ok) {
        Swal.fire(
          'Booking submitted successfully!',
          'Our Team will contact you shortly',
          'success'
        );
        console.log('Booking submitted successfully!');

        // Reset form after successful submission
        resetForm();

      } else {
        console.error('Failed to submit booking.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const highlightRequiredFields = () => {
    // Add red border to required input fields
    const requiredFields = ['username', 'mobile', 'email', 'pickupFrom', 'deliveryTo', 'shiftingDate'];
    requiredFields.forEach((field) => {
      const inputElement = document.getElementsByName(field)[0];
      if (inputElement) {
        inputElement.style.border = '2px solid red';
      }
    });
  };

  const resetForm = () => {
    // Reset form after successful submission
    setUsername('');
    setMobile('');
    setEmail('');
    setPickupFrom('');
    setDeliveryTo('');
    setShiftingDate('');
    setBookingType('HouseHold Shifting');
    setSubBookingType('One BHK');

    // Remove red border from input fields
    const inputElements = document.querySelectorAll('.booking-input');
    inputElements.forEach((input) => {
      input.style.border = '1px solid #ced4da';
    });
  };

  return (
    <>
      <div className="col col-1 lg:md:flex lg:md:items-center lg:md:justify-center lg:md:min-h-screen bg-gray-100 min-h-screen min-w-screen h-full w-full">
        {/* Left Column */}
        <div className=" col col-1 lg:md:w-1/2 group lg:md:hover:border-2 lg:md:hover:border-red-500 lg:md:transition lg:md:duration-300 lg:md:ease-in-out lg:md:transform lg:md:hover:scale-90 rounded-md overflow-hidden p-4 lg:md:p-4 bg-white">



          <img
            draggable="false"
            src="/dist/img/relocation-13.jpeg"
            alt=""
            className="w-full h-full"
          />



        </div>

        {/* Right Column */}
        <div className="col col-1 lg:md:w-1/2 group rounded-md  p-4 lg:md:p-4 bg-white">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="group hover:border-2 hover:border-red-500 rounded-md p-4 lg:md:p-4 max-w-md w-full my-28 bg-white">
              <h1 className="text-3xl font-bold mb-8">Get A Free Quote</h1>
              <form className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    name="username"
                    placeholder="Full Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} required
                  />

                </div>

                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[0-9]{10}" minLength="10" maxLength="10" placeholder="Enter your mobile number" required title="Please enter a 10-digit mobile number without spaces or dashes" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                  
                  />

                  <small>Enter a 10-digit mobile number without spaces or dashes.</small>
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
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    required
                  />
                  <small>Enter a valid email address.</small>
                </div>

                <div className="mb-4">
                  <label htmlFor="pickupFrom" className="block text-sm font-medium text-gray-700">
                    Pickup From
                  </label>
                  <input
                    type="text"
                    id="pickupFrom"
                    name="pickupFrom"
                    value={pickupFrom}
                    onChange={(e) => setPickupFrom(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="deliveryTo" className="block text-sm font-medium text-gray-700">
                    Delivery To
                  </label>
                  <input
                    type="text"
                    id="deliveryTo"
                    name="deliveryTo"
                    value={deliveryTo}
                    onChange={(e) => setDeliveryTo(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="shiftingDate" className="block text-sm font-medium text-gray-700">
                    Shifting Date
                  </label>
                  <input
                    type="date"
                    id="shiftingDate"
                    name="shiftingDate"
                    value={shiftingDate}
                    onChange={(e) => setShiftingDate(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="bookingType" className="block text-sm font-medium text-gray-700">
                    Booking Type
                  </label>
                  <select
                    id="bookingType"
                    name="bookingType"
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                  >
                    <option value="HouseHold Shifting">HouseHold Shifting</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Furniture Shifting">Furniture Shifting</option>
                    <option value="Car Relocation">Car Relocation</option>
                    <option value="Bike Relocation">Bike Relocation</option>

                  </select>
                </div>

                {/* Conditional rendering for Sub Booking Type based on Booking Type */}
                {bookingType === 'HouseHold Shifting' && (
                  <div className="mb-4">
                    <label htmlFor="subBookingType" className="block text-sm font-medium text-gray-700">
                      Sub Booking Type
                    </label>
                    <select
                      id="subBookingType"
                      name="subBookingType"
                      value={subBookingType}
                      onChange={(e) => setSubBookingType(e.target.value)}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 booking-input"
                    >
                      <option value="One BHK">One BHK</option>
                      <option value="Two BHK">Two BHK</option>
                      <option value="Three BHK">Three BHK</option>
                      <option value="Four BHK">Four BHK</option>
                      <option value="Five BHK">Five BHK</option>
                      <option value="HouseHold With Car/Bike">HouseHold With Car/Bike</option>

                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Booking