function SkillsCard({ title, skills }) {
  return (
    // <main>
    <article className="flex-1 bg-teal-100/40 backdrop-blur-xl border border-teal-300/50 rounded-2xl p-6 hover:-translate-y-2 hover:bg-teal-100/60 hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-400 ease-out">
      <h3 className="text-teal-700 text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => {
          const Icon = skill.SkillIcon;
          return (
            <li
              key={skill.SkillName}
              className="flex items-center text-teal-800 hover:text-teal-900 transition-colors duration-300"
            >
              <Icon className="text-lg text-teal-600 mr-3" />
              <span className="font-medium">{skill.SkillName}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default SkillsCard;
