import { SlCalender } from "react-icons/sl";
import { BsSuitcaseLgFill } from "react-icons/bs";
function ExperienceCard({
  period,
  title,
  place,
  description,
  Responsibilities,
}) {
  return (
    <div className="group bg-teal-100/40 backdrop-blur-xl border border-teal-300/50 p-6 rounded-2xl transition-all duration-400 hover:translate-x-1 hover:shadow-2xl hover:shadow-teal-500/10 hover:bg-teal-100/60 hover:border-teal-400/60 mb-6">
      <header className="flex items-center justify-start text-teal-700 font-semibold mb-2">
        <SlCalender className="mr-2 text-lg" />
        <p>{period}</p>
      </header>
      <div className="my-4">
        <h2 className="font-bold text-xl text-teal-900 group-hover:text-teal-700 transition-colors duration-300">
          {title}
        </h2>
        <p className="flex items-center text-teal-800 mt-1">
          <BsSuitcaseLgFill className="mr-2 text-teal-600" />
          {place?.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </p>
      </div>
      {/* Description */}
      <p className="text-teal-800 mb-4">{description}</p>
      {/* Responsibilities */}
      <ul className="list-disc list-inside space-y-2 text-sm text-teal-800 marker:text-teal-600">
        {Responsibilities?.map((line, index) => {
          return (
            <li
              key={index}
              className="hover:text-teal-900 transition-colors duration-300"
            >
              {line}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExperienceCard;
