import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col items-center gap-8 mt-8 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 p-12 text-white relative overflow-hidden border-t-4 border-teal-300"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/5 via-transparent to-teal-600/5 pointer-events-none"></div>

      <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold caret-transparent text-center relative z-10 text-teal-100">
        Let's Work Together
      </h3>
      <p className="text-teal-100 text-center max-w-2xl relative z-10">
        I'm always interested in hearing about new projects and opportunities.
        Feel free to reach out if you'd like to collaborate!
      </p>
      <ul className="flex flex-wrap gap-8 relative z-10">
        <li className="flex flex-col items-center cursor-pointer transition-all duration-300 group">
          <a
            href="https://github.com/Sakina1912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-teal-600/20 border border-teal-300/30 rounded-xl p-4 group-hover:bg-teal-600/40 group-hover:border-teal-400/60 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
              <FiGithub className="text-4xl text-white group-hover:text-teal-200 transition-colors duration-300" />
            </div>
            {/* <p className="mt-3 text-teal-100 group-hover:text-teal-200 transition-colors duration-300 font-medium">
              GitHub
            </p> */}
          </a>
        </li>
        <li className="flex flex-col items-center cursor-pointer transition-all duration-300 group">
          <a
            href="https://www.linkedin.com/in/sakina-kagalwala19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-teal-600/20 border border-teal-300/30 rounded-xl p-4 group-hover:bg-teal-600/40 group-hover:border-teal-400/60 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
              <SlSocialLinkedin className="text-4xl text-white group-hover:text-teal-200 transition-colors duration-300" />
            </div>
            {/* <p className="mt-3 text-teal-100 group-hover:text-teal-200 transition-colors duration-300 font-medium">
              LinkedIn
            </p> */}
          </a>
        </li>
        <li className="flex flex-col items-center cursor-pointer transition-all duration-300 group">
          <a
            href="mailto:sakku.kagalwala@gmail.com"
            onClick={(e) => console.log(e.currentTarget.href)}
          >
            <div className="bg-teal-600/20 border border-teal-300/30 rounded-xl p-4 group-hover:bg-teal-600/40 group-hover:border-teal-400/60 group-hover:shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
              <MdOutlineEmail className="text-4xl text-white group-hover:text-teal-200 transition-colors duration-300" />
            </div>
            {/* <p className="mt-3 text-teal-100 group-hover:text-teal-200 transition-colors duration-300 font-medium">
              Email
            </p> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
