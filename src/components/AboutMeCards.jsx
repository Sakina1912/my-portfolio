function AboutMeCards({ title, children }) {
  return (
    <div
      className="bg-teal-100/40 backdrop-blur-xl border border-teal-300/50 rounded-2xl p-6 hover:bg-teal-100/60 hover:border-teal-400/60 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10
                            transition-all duration-400 ease-out flex flex-col justify-center items-center w-full min-h-[150px]"
    >
      <h3 className="text-3xl font-bold text-center text-teal-700 mb-3">
        {title}
      </h3>
      <div className="flex flex-col justify-center items-center gap-2 text-sm text-teal-800">
        {children}
      </div>
    </div>
  );
}
export default AboutMeCards;
