import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div id="contact">
    <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 shadow-2xl flex flex-col justify-center items-center p-10">
      <h1 className="text-3xl text-pink-300 font-extrabold">Let's Connect</h1>
      <p className="text-gray-300 text-center my-3 w-[550px]">
        Have a project in mind or just want to say hello? I'm always open to
        meaningful conversations, collaborations, or new opportunities. Let's
        connect and build something great together!
      </p>
      <form className="py-5 px-8 border-1 border-pink-300 rounded-2xl my-5 flex flex-col w-[500px] bg-black">
        <input
          type="text"
          placeholder="Your Name"
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <textarea
          rows="4"
          type="text"
          placeholder="Your Message..."
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <button className="text-xl font-bold text-pink-100 px-6 py-2 border-1 border-pink-300 my-4 rounded-full bg-gradient-to-b from-orange-950 to-transparent cursor-pointer">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
