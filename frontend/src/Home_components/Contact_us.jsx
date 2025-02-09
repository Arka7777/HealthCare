import React, { useState } from "react";
import { FiMail, FiUser, FiMessageCircle, FiSend } from "react-icons/fi";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xgvokopo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-lg bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center drop-shadow-lg mb-4">
          Contact Us
        </h2>
        <p className="text-center text-lg text-white/80 mb-6">
          Have any questions? Reach out to us, and we'll be happy to assist you.
        </p>

        <form onSubmit={handleSubmit} method="POST" className="space-y-5">
          {/* Name Input */}
          <div className="relative">
            <FiUser className="absolute left-4 top-3 text-white/70" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FiMail className="absolute left-4 top-3 text-white/70" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-12 pr-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <FiMessageCircle className="absolute left-4 top-3 text-white/70" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="w-full pl-12 pr-4 py-3 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-white/30 hover:bg-white/40 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            <FiSend className="text-lg" />
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center text-lg mt-4 text-white bg-black/40 p-3 rounded-lg">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
