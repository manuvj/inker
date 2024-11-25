"use client";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { AiOutlineYoutube } from "react-icons/ai";

const socialLinks = [
  { icon: <FaFacebookF size={20} />, href: "#", label: "Facebook" },
  { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
  { icon: <AiOutlineYoutube size={20} />, href: "#", label: "Youtube" },
];

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  category: z.enum([
    "Academic Collaborations",
    "Investment Opportunities",
    "Partnerships & Associations",
  ]),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting form. Please try again.");
    }
    // console.log("Form data", data);
  };

  return (
    <div className="max-md:py-32 p-4 md:p-16 lg:p-32 flex flex-col justify-center items-center bg-white">
      <h1 className="capitalize font-orbitron text-3xl md:text-4xl lg:text-6xl font-semibold z-10 text-center">
        contact us
      </h1>
      <h6 className="text-hilight font-poppins text-center px-4">
        Reach out to us! Share your details and let’s get started.
      </h6>
      <div
        style={{
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
        }}
        className="flex flex-col lg:flex-row gap-8 bg-white my-8 md:my-16 lg:my-32 w-full max-w-7xl"
      >
        <div className="flex flex-col gap-8 md:gap-32 bg-black text-white p-8 rounded-xl w-full lg:max-w-md relative overflow-hidden">
          {/* Header */}
          <div>
            <h2 className="text-xl md:text-2xl font-poppins mb-2">
              Contact Information
            </h2>
            <p className="text-sm text-[#C9C9C9] mb-6 font-poppins">
              Say something to start a live chat!
            </p>
          </div>
          {/* Contact Details */}
          <div className="space-y-6 md:space-y-10">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white" />
              <span>+91 90615 00800</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-white" />
              <span>info@robopark.in</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-auto">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl mx-auto bg-white p-4 md:p-6 md:pt-12 rounded-xl space-y-6 font-poppins"
        >
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
                {...register("firstName")}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
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
                {...register("lastName")}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
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
                {...register("email")}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                {...register("phone")}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Select Category */}
          <div>
            <p className="text-sm text-black font-bold mb-4">
              Select Category?
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:space-x-6">
              {[
                "Academic Collaborations",
                "Investment Opportunities",
                "Partnerships & Associations",
              ].map((categoryOption) => (
                <label
                  key={categoryOption}
                  className="flex items-center space-x-2 text-sm"
                >
                  <input
                    type="radio"
                    {...register("category")}
                    value={categoryOption}
                    className="form-radio text-red-600 focus:ring-red-500"
                  />
                  <span className="text-gray-800">{categoryOption}</span>
                </label>
              ))}
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
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
              {...register("message")}
              rows={4}
              placeholder="Write your message.."
              className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="w-full md:mr-20 md:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
