"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Page = () => {
  const socialLinks = [
    { icon: <FaFacebookF size={20} />, href: "#", label: "Facebook" },
    { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <FaXTwitter size={20} />, href: "#", label: "Twitter" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    "Academic Collaborations"
  );

  return (
    <div className="p-32 flex flex-col justify-center items-center bg-white">
      <h1 className="capitalize font-orbitron text-6xl font-semibold z-10">
        contact us
      </h1>
      <h6 className="text-hilight font-poppins">
        Reach out to us! Share your details and let’s get started.
      </h6>
      <div className="flex gap-8 bg-white shadow-md my-32">
        <div className="flex flex-col gap-16 bg-black text-white p-8 rounded-xl  w-full max-w-md ">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-poppins mb-2">Contact Information</h2>
            <p className="text-sm text-[#C9C9C9] mb-6 font-poppins">
              Say something to start a live chat!
            </p>
          </div>
          {/* Contact Details */}
          <div className="space-y-10">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white" />
              <span>+91 90615 00800</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-white" />
              <span>info@inkerrobotics.com@houzing.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-white" />
              <span>Address</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-12">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="bg-hilight p-2 rounded-full transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Background Overlays */}
          <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <form className="max-w-4xl mx-auto bg-white p-6 pt-12 rounded-xl space-y-6 font-poppins">
          {/* Row 1: First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
            </div>
          </div>

          {/* Row 2: Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
            </div>
          </div>

          {/* Select Category */}
          <div>
            <p className="text-sm text-black font-bold mb-4">
              Select Category?
            </p>
            <div className="flex items-center space-x-6">
              {[
                "Academic Collaborations",
                "Investment Opportunities",
                "Partnerships & Associations",
              ].map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 text-sm text-nowrap"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="form-radio text-red-600 focus:ring-red-500"
                  />
                  <span className="text-gray-800">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message.."
              className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
