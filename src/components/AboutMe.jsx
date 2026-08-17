import AboutMeCards from "./AboutMeCards";
// import { motion } from "motion/react";
import { motion } from "motion/react";
const cardInfo = [
  {
    title: "2+",
    content: [
      "Years Experience",
      "Practical exposure",
      "to development workflows",
    ],
  },
  {
    title: "10+",
    content: ["Practice Projects", "Building end-to-end products"],
  },
  {
    title: "Tech Stack",
    content: [
      "Worked with:",
      "Angular • TypeScript • SCSS",
      "Currently Working with:",
      "React • Tailwind • JavaScript",
    ],
  },
];

function AboutMe() {
  return (
    <section id="About" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="p-2 m-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto rounded-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-5">
          <div className="space-y-4 leading-relaxed text-teal-900 text-justify">
            <p>
              My interest in web development began at a young age, when
              experimenting with simple HTML and CSS sparked a genuine
              fascination. The idea of creating something from scratch and
              imagining that others could one day interact with it was
              incredibly exciting. That early curiosity gradually turned into a
              lasting passion for building intuitive and engaging web
              experiences.
            </p>
            <p>
              Although I pursued a background in mathematics, my inclination
              toward web development never faded. Without a formal degree in
              computer science, I chose to take the self-learning route and
              began developing my skills independently. This journey led me to
              secure an internship in Mumbai, where I gained valuable exposure
              to real-world development and strengthened my foundation in
              frontend technologies.
            </p>
            <p>
              Later, I took a career break to focus on an important phase of my
              life — motherhood. While this time away from my professional
              journey was deeply meaningful, my passion for development remained
              strong. Now, I am actively working toward restarting my career and
              expanding my skill set. I am currently pursuing a full-stack
              development program with Scaler, with the goal of building
              end-to-end applications and growing as a well-rounded developer.
            </p>
            {/* <p>
              Dynamic Frontend Engineer and UI/UX Developer with 2 years of
              professional experience creating responsive, user-centric web
              applications, returning to the workforce after a structured career
              break for family leadership. Proficient in translating complex
              wireframes into high-performance code using HTML, CSS, JavaScript,
              and modern frameworks. Adept at balancing aesthetic design with
              technical functionality, bringing renewed focus, time-management
              skills, and a passion for modern web technologies to a
              collaborative development team.
            </p> */}
          </div>
          {/* cards  */}
          <div className="flex flex-col gap-4 mx-5">
            {cardInfo.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                // animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className="w-full overflow-hidden"
              >
                <AboutMeCards title={card.title}>
                  {card.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </AboutMeCards>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
