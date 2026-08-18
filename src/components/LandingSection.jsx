import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { MdDevices } from "react-icons/md";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import LandingSectionCards from "./LandingSectionCards";
import ContactForm from "./ContactForm";

import { useState } from "react";
// import emailjs from "@emailjs/browser";

function LandingSection() {
  // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  // console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  // console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const LandingCards = [
    {
      icon: BsSuitcaseLgFill,
      icon_color: "yellow",
      title: "Full-Stack Development",
      content: [
        "In Progress",
        "Building end-to-end products",
        "Scaler Academy",
      ],
    },
    {
      icon: IoColorPalette,
      icon_color: "purple",
      title: "UI/UX Developer",
      content: ["Building responsive", "functional user interfaces"],
    },
    {
      icon: MdDevices,
      icon_color: "blue",
      title: "Responsive & accessible UI",
      content: ["just to fix it better 😄"],
    },
  ];
  const [showContactForm, setShowContactForm] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const result = await emailjs.send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       {
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //       },
  //       import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  //     );

  //     console.log("SUCCESS!", result);

  //     alert("Message sent successfully!");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });

  //     setShowContactForm(false);
  //   } catch (error) {
  //     console.error("FAILED...", error);
  //     alert("Failed to send message.");
  //   }
  // };
  return (
    <section className="flex w-full flex-col items-center justify-center py-6">
      <div className="flex-col flex flex-wrap items-center justify-center p-2 mt-7 text-white">
        <h1 className="flex flex-wrap items-center justify-center text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-100 to-teal-200 bg-clip-text text-transparent animate-fade-in">
          Hi, I'm{"  "}
          <span className="ml-3 text-teal-300">Sakina</span>
        </h1>

        <h2
          className="my-3 text-lg text-teal-100 text-center animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Frontend Developer with over 2 years of professional experience
          building data-rich web applications
        </h2>
        <h2
          className="my-2 text-base text-teal-200/80 italic text-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          “From solving equations to crafting interfaces”
        </h2>
      </div>
      <div
        className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-4 mt-2 animate-slide-up"
        style={{ animationDelay: "0.6s" }}
      >
        <button className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105 w-full sm:w-auto text-center">
          <a href="#Projects">View My Work</a>
        </button>
        <button
          onClick={() => setShowContactForm(true)}
          className="border-2 border-teal-400/50 px-8 py-3 text-teal-100 font-semibold rounded-full hover:bg-teal-600/20 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 w-full sm:w-auto text-center"
        >
          Get in Touch
        </button>
        <button className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105 w-full sm:w-auto text-center">
          <a href="/resume.pdf" download className="...">
            Download Resume
          </a>
        </button>
        {showContactForm && (
          // <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          //   <div className="bg-white/98 backdrop-blur-xl rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl shadow-black/30 relative border border-teal-200">
          //     <button
          //       onClick={() => setShowContactForm(false)}
          //       className="absolute top-4 right-4 text-3xl text-teal-400 hover:text-teal-900 transition-colors"
          //     >
          //       ×
          //     </button>

          //     <h2 className="text-3xl font-bold mb-6 text-teal-900">
          //       Get In Touch
          //     </h2>

          //     <form onSubmit={sendEmail} className="flex flex-col gap-4">
          //       <input
          //         type="text"
          //         name="name"
          //         value={formData.name}
          //         onChange={handleChange}
          //         placeholder="Your Name"
          //         className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
          //         required
          //       />

          //       <input
          //         type="email"
          //         name="email"
          //         value={formData.email}
          //         onChange={handleChange}
          //         placeholder="Your Email"
          //         className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
          //         required
          //       />

          //       <textarea
          //         name="message"
          //         placeholder="Your Message"
          //         value={formData.message}
          //         onChange={handleChange}
          //         rows="5"
          //         className="border-2 border-teal-200 p-3 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all bg-white/80"
          //         required
          //       />

          //       <button
          //         type="submit"
          //         className="bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300"
          //       >
          //         Send Message
          //       </button>
          //     </form>
          //   </div>
          // </div>
          <ContactForm setShowContactForm={setShowContactForm} />
        )}
      </div>
      {/* cards */}
      <div className="flex flex-wrap justify-evenly mx-auto p-2 max-w-4xl gap-6 mt-3">
        {LandingCards.map((card, index) => {
          return (
            <LandingSectionCards
              key={index}
              icon={card.icon}
              icon_color={card.icon_color}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </div>
      <div>
        <HiOutlineArrowNarrowDown className="text-3xl text-teal-200 animate-bounce my-6" />
      </div>
    </section>
  );
}
export default LandingSection;
