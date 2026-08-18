import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ setShowContactForm }) => {
  //   const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("SUCCESS!", result);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setShowContactForm(false);
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message.");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/98 backdrop-blur-xl rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl shadow-black/30 relative border border-teal-200">
        <button
          onClick={() => setShowContactForm(false)}
          className="absolute top-4 right-4 text-3xl text-teal-400 hover:text-teal-900 transition-colors"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6 text-teal-900">Get In Touch</h2>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
