import { SlCalender } from "react-icons/sl";
import { BsSuitcaseLgFill } from "react-icons/bs";
import ExperienceCard from "./ExperienceCard";

const ExperienceInfo = [
  {
    period: "Nov 2022 – Jul 2024",
    title: "UI/UX Developer",
    place: ["Inquizity Metanoia LLC", " • Mumbai"],
    description: `Worked on developing reusable UI components and enhancing web platform functionality using Angular 11, C#, and SQL. Contributed to abstraction and optimization of Web API and code generator systems.`,
    Responsibilities: [
      "Developed new display types and generalized code in a code generator, improving reusability using C# and Angular 11.",
      "Integrated client-requested features and functionalities into the web platform, collaborating closely with the design team.",
      "Contributed to abstraction and generalization of Web API and code generator components in C#.",
    ],
  },
  {
    period: "Jan 2022 – Oct 2022",
    title: "Web Developer Intern",
    place: ["Inquizity Metanoia LLC", " • Mumbai"],
    description: `Built and implemented new display components to improve data presentation and supported documentation of implemented functionalities.`,
    Responsibilities: [
      "Integrated additional features and functionalities into the PWA as per client specifications.",
      "Developed new display types to enhance data readability and documented implementation details.",
      "Transformed the website's user interface to align with wireframe specifications.",
    ],
  },
  {
    period: "Aug 2019 – Jan 2020",
    title: "Technical Support Representative",
    place: ["IBM", " • Hyderabad"],
    description: `Provided technical support for enterprise software users by managing and resolving support tickets.`,
    Responsibilities: [
      "Diagnosed technical issues by gathering information from users and coordinating with internal technical teams for timely resolution.",
      "Served as the primary point of contact between end users and technical teams, ensuring clear communication and follow-through.",
    ],
  },
];

function Experience() {
  return (
    <section id="Experience">
      <div className="border-t-2 border-teal-200 py-8 mb-8"></div>
      <h1 className="p-2 m-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
        Experience
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto rounded-full mb-8"></div>
      <p className="text-center my-6 text-teal-800 text-lg">
        A journey through my professional career, building innovative solutions
        and leading successful projects
      </p>
      {/* card */}
      <article className="">
        {/* <header className="flex items-center justify-start text-primary-600">
          <SlCalender className="mr-2" />
          <p>2023 - Present</p>
        </header>
        <div className="my-3">
          <h2 className="font-bold text-xl">Senior Full-Stack Developer</h2>
          <p className="flex items-center text-gray-600">
            <BsSuitcaseLgFill className="mr-2" />
            <span>TechCorp Solutions</span>
            <span> • San Francisco, CA</span>
          </p>
        </div>
        {/* Description */}
        {/* <p className="text-gray-600">
          Leading a team of 5 developers in building scalable web applications
          using React, Node.js, and AWS. Implemented CI/CD pipelines reducing
          deployment time by 60%.
        </p> */}
        {/* Responsibilities */}
        {/* <ul className="list-disc list-inside space-y-1 text-sm marker:text-blue-500">
          <li>
            Architected and deployed microservices handling 1M+ daily requests
          </li>
          <li>
            Architected and deployed microservices handling 1M+ daily requests
          </li>
          <li>
            Architected and deployed microservices handling 1M+ daily requests
          </li>
        </ul>  */}

        {ExperienceInfo.map((info) => {
          return (
            <ExperienceCard
              key={`${info.title}-${info.period}`}
              // period={info.period}
              // place={info.place}
              // title={info.title}
              // description={info.description}
              // Responsibilities={info.Responsibilities}
              // className=""
              {...info}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Experience;
