"use client";

import React from "react";

const Certificates: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col md:flex-row">
      {/* Left side text */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-12">
        <p className="text-3xl md:text-4xl font-bold leading-snug max-w-lg">
          FOR MORE THAN 60 YEARS, <span className="text-orange-500">JEC</span>{" "}
          HAS BEEN ENTIRELY DEDICATED TO THE PROMOTION OF COMPOSITE MATERIALS.
        </p>
        <p className="mt-6 text-lg font-light">
          we are happy to answer any request
        </p>
      </div>

      {/* Right side form */}
      <div className="flex-1 bg-black px-6 md:px-12 py-12">
        <h2 className="text-sm font-semibold mb-6 uppercase tracking-wider">
          Contact
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              First Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Last Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Email <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Phone</label>
            <input
              type="tel"
              placeholder="Your phone"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
            />
          </div>

          {/* Job Title */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">
              Job Title <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Job title"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Company */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-semibold">
              Company <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Company"
              className="bg-transparent border-b border-gray-700 py-2 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-orange-500 text-black font-bold px-6 py-3 hover:bg-orange-600 transition flex items-center justify-between w-48"
            >
              SEND REQUEST <span className="ml-2">↵</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Certificates;
