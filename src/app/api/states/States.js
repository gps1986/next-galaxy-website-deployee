'use client'
import React from 'react'
import { useState } from 'react';


const States = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount(count + 1);
    };
  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Stats Card</h1>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xl text-gray-600">Page Visits:</p>
            <p className="text-4xl font-bold">{count}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={incrementCounter}
          >
            Increment Counter
          </button>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-500">
            This is a sample stats card created with Tailwind CSS and Next.js.
          </p>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default States