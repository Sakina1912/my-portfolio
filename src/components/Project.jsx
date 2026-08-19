import React from "react";
import Todo from "../assets/TodoProject.png";
import kanbanBoard from "../assets/KanbanBoardProject.png";
import movieHub from "../assets/Imdb_cloneProject.png";
import GroceryList from "../assets/GroceryListProject.png";
import ExpenseTracker from "../assets/ExpenseTrackerProject.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Todo Application",
      description:
        "A responsive task management application built with React, featuring task creation, editing, filtering, sorting, and organization. The project also demonstrates EmailJS integration, enabling users to send messages directly through the portfolio’s contact form.",
      image: Todo,
      liveURL: "",
      gitHubURL: "",
      tech_used: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    },
    {
      id: 2,
      title: "Visual Workflow Application",
      description:
        "A responsive Kanban task management board built with React, allowing users to organize, track, and manage tasks through different workflow stages.",
      image: kanbanBoard,
      liveURL: "",
      gitHubURL: "",
      tech_used: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    },
    {
      id: 3,
      title: "Movie Discovery App",
      description:
        "A responsive movie discovery platform for exploring movies, ratings, genres, and detailed film information. Also with your own watch list and favorites.",
      image: movieHub,
      liveURL: "",
      gitHubURL: "",
      tech_used: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    },
    {
      id: 4,
      title: "Grocero - Grocery Shopping App",
      description:
        "A simple and responsive grocery list application built with React, allowing users to add, organize, and manage grocery items with persistent data stored in LocalStorage.",
      image: GroceryList,
      liveURL: "",
      gitHubURL: "",
      tech_used: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    },
    {
      id: 5,
      title: "Expense Tracker",
      description:
        "Track daily expenses, manage budgets, monitor remaining balances, and gain insights into spending patterns through an interactive dashboard and visual charts.",
      image: ExpenseTracker,
      liveURL: "",
      gitHubURL: "",
      tech_used: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    },
  ];
  return (
    <section id="Projects">
      <div className="border-t-2 border-teal-200 py-8 mb-8"></div>
      <h1 className="p-2 m-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
        Featured Projects
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto rounded-full mb-8"></div>
      <p className="text-center my-6 text-teal-800 text-lg">
        A selection of my recent work showcasing various technologies and design
        approaches
      </p>
      <div className="flex flex-row flex-wrap justify-evenly mx-auto p-2 max-w-5xl gap-6 mt-3 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full min-w-[35%] sm:w-[45%] lg:w-[30%] flex-1 bg-teal-100/40 backdrop-blur-xl border border-teal-300/50 rounded-2xl hover:-translate-y-2 hover:bg-teal-100/60 hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-400 ease-out "
          >
            <div className="relative group overflow-hidden rounded-2xl aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-content"
              />

              {(project.liveURL || project.gitHubURL) && (
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.liveURL && (
                    <a
                      href={project.liveURL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-900 shadow-lg transition hover:bg-teal-50"
                    >
                      Demo
                    </a>
                  )}

                  {project.gitHubURL && (
                    <a
                      href={project.gitHubURL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-500"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-teal-700 text-xl font-semibold mb-4">
                {project.title}
              </h2>

              <p className="mb-4">{project.description}</p>

              {/* <p>
                <span className="font-semibold">Tech Used:</span>{" "}
                {project.tech_used.join(", ")}
              </p> */}
              {project.tech_used.map((tech) => (
                <button
                  key={tech}
                  className="mr-2 mb-2 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
