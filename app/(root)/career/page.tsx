import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Page = () => {
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

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
          {/* Left Section: Labels and Inputs */}
          <div className="space-y-8">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <Label className="font-bold text-base">Lable</Label>
                  <Input
                    id="picture"
                    type="text"
                    className="max-w-sm p-4 h-12 rounded-md ring-1 ring-[#D5D4DC]"
                    placeholder="placeholder text"
                  />
                </div>
              ))}
          </div>

          {/* Right Section: File Upload and Message */}
          <div className="space-y-6 flex flex-col justify-end">
            {/* Resume Upload */}
            <div>
              <Label htmlFor="pdf" className="font-bold text-base">
                Resume{" "}
              </Label>
              <Input
                id="resume"
                type="file"
                className="ring-2 ring-hilight max-w-[150px] rounded-md"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800 placeholder-gray-400"
              />
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
