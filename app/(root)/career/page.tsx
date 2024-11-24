import React from "react";

const Page = () => {
  return (
    <div className="p-32">
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-md shadow-lg">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h1 className="capitalize font-orbitron text-6xl font-semibold z-10">
            career
          </h1>
          <h6 className="text-hilight font-poppins">
            Begin your career with us!
          </h6>
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Labels and Inputs */}
          <div className="space-y-6">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <label
                    className="block text-sm font-medium text-gray-600 mb-2"
                    htmlFor={`input${index}`}
                  >
                    Label
                  </label>
                  <input
                    type="text"
                    id={`input${index}`}
                    placeholder="Placeholder text"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 text-gray-800 placeholder-gray-400"
                  />
                </div>
              ))}
          </div>

          {/* Right Section: File Upload and Message */}
          <div className="space-y-6">
            {/* Resume Upload */}
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Resume
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume"
                  className="px-4 py-2 border border-red-500 text-red-500 rounded-md cursor-pointer hover:bg-red-100"
                >
                  Upload
                </label>
                <span className="text-sm text-gray-500">PDF/Word format</span>
              </div>
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
            <div>
              <button
                type="submit"
                className="w-full lg:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
