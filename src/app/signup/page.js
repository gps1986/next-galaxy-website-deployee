// pages/signup.js
"use client"
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Signup() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Swal.fire(
          'User Insert',
          'Go ahead for Login',
          'success'
        )
        setEmail("");
        setPassword("");

        //console.log('User signed up successfully');
        // Redirect or show success message as needed
      } else {
        console.error('Error signing up');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container my-8 mx-4">
        <h1 className="text-3xl font-semibold mb-6">Register User</h1>

        <form className="mx-4"> 
          <div className="mb-4 mx-10">
            <label htmlFor="email" className="block mb-2">User Email</label>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 px-4 py-2 w-auto" />
          </div>

          <div className="mb-4 mx-10">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 px-4 py-2 w-auto" />
          </div>

          

          <button onClick={signUpUser} type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 mx-10 rounded-lg shadow-md font-semibold">
            Register
          </button>


        </form>
      </div>
  );
}