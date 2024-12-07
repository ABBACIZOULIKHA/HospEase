


import doctorImg from "@/app/images/doctor.jpg";
import Image from "next/image";

import React from 'react'

function Profile() {
  return (
    <div>
        

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left side: Profile Picture */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Profile Picture</h2>
            <p className="text-sm text-gray-500">JPG or PNG no larger than 5 MB</p>
            <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden relative">
              <Image
                className="object-cover w-full h-full"
                src={doctorImg}
                alt="Profile Picture"
                width={100}
                height={100}
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 ease-in-out">
              Upload
            </button>
          </div>

          {/* Right side: Account Details */}
          <div className="col-span-2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Account Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Username</label>
                <input
                  type="text"
                  defaultValue="username"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">First name</label>
                <input
                  type="text"
                  defaultValue="Valerie"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Last name</label>
                <input
                  type="text"
                  defaultValue="Luna"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Organization name</label>
                <input
                  type="text"
                  defaultValue="Start Bootstrap"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Location</label>
                <input
                  type="text"
                  defaultValue="San Francisco, CA"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email address</label>
                <input
                  type="email"
                  defaultValue="name@example.com"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone number</label>
                <input
                  type="tel"
                  defaultValue="555-123-4567"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Birthday</label>
                <input
                  type="date"
                  defaultValue="1988-06-10"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 ease-in-out">
            Save Changes
          </button>
        </div>
        
    </div>
  )
}

export default Profile













