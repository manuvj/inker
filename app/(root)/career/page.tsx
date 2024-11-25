"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//firebase imports
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  resume: z.any().refine((file) => file?.length > 0, "Resume is required"),
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
      const docRef = await addDoc(collection(db, "careers"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="py-36">
      <div
        style={{
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
        }}
        className="w-[90vw] mx-auto p-20 px-16 bg-white rounded-3xl mb-12"
      >
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h1 className="capitalize font-orbitron text-6xl font-semibold z-10">
            career
          </h1>
          <h6 className="text-hilight font-poppins">
            Begin your career with us!
          </h6>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24"
        >
          {/* Left Section: Labels and Inputs */}
          <div className="space-y-8">
            <div>
              <Label htmlFor="name" className="font-bold text-base">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="max-w-sm p-4 h-12 rounded-md ring-1 ring-[#D5D4DC]"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="font-bold text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="max-w-sm p-4 h-12 rounded-md ring-1 ring-[#D5D4DC]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="font-bold text-base">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="max-w-sm p-4 h-12 rounded-md ring-1 ring-[#D5D4DC]"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Section: File Upload and Message */}
          <div className="space-y-6 flex flex-col justify-end">
            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume" className="font-bold text-base">
                Resume
              </Label>
              <Input
                id="resume"
                type="file"
                {...register("resume")}
                className="ring-2 ring-hilight max-w-[150px] rounded-md"
              />
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">
                  {typeof errors.resume.message === "string" &&
                    errors.resume.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Message
              </Label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800 placeholder-gray-400"
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
                className="w-full md:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
