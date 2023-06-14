import React from "react";

const Syllabus = () => {
  return (
    <div className="my-container relative h-[680px]">
      <h1 className="text-3xl mt-8 font-medium mx-auto border-b-4 border-t-4 w-max p-3 border-[#7fb71e]">Free Syllabus</h1>
      <div className="flex flex-col items-center justify-center h-[600px]">
        <div
          className="w-full bg-center bg-cover h-[500px]"
          style={{ backgroundImage: "url(https://i.ibb.co/d58qzbY/girl-g6cfac0fe3-1280.jpg)" }}
        >
          <div className="container px-4 py-8 mx-auto">
            <div className="flex justify-end">
              <form className="w-full max-w-md p-6 bg-white rounded shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Download Yoga Syllabus
                </h2>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone"
                  />
                </div>
                <button
                  className="w-full btn-primary"
                  type="submit"
                >
                  Download Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
