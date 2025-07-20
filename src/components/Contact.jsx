import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_7ee1kko",
        "template_bopk1yt",
        form.current,
        "tYayDSDM93Y2WYqPY"
      );
      setTimeout(() => {
        alert(
          "Message sent successfully, Thanks for reaching out! I'll get back to you as soon as I can. Until then, have a great day!"
        );
        setName("");
        setEmail("");
        setMessage("");

        form.current.reset();
      }, 5000);
    } catch (e) {
      toast.error(e?.text);
    }
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 shadow-2xl flex flex-col justify-center items-center p-10"
    >
      <h1 className="text-3xl text-pink-300 font-extrabold">Let's Connect</h1>
      <p className="text-gray-300 text-center my-3 w-[550px]">
        Have a project in mind or just want to say hello? I'm always open to
        meaningful conversations, collaborations, or new opportunities. Let's
        connect and build something great together!
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="py-5 px-8 border-1 border-pink-300 rounded-2xl my-5 flex flex-col w-[500px] bg-black"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <textarea
          rows="4"
          type="text"
          name="message"
          placeholder="Your Message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="border-1 border-pink-300 px-4 py-2 my-3 rounded-2xl text-white bg-gradient-to-b from-gray-800 to-transparent"
        />
        <button
          type="submit"
          className="text-xl font-bold text-pink-100 px-6 py-2 border-1 border-pink-300 my-4 rounded-full bg-gradient-to-b from-orange-950 to-transparent cursor-pointer"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
