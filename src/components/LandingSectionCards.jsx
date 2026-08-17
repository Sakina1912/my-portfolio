import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
function LandingSectionCards({ icon, icon_color, title, content }) {
  const Icon = icon;
  const colorMap = {
    yellow: "text-amber-400",
    purple: "text-purple-400",
    blue: "text-blue-400",
  };
  return (
    <div
      className="bg-teal-100/30 backdrop-blur-xl border border-teal-300/40 rounded-2xl p-8 hover:bg-teal-100/50 hover:border-teal-400/60 transition-all duration-400 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 flex flex-col justify-center items-center min-w-[250px] max-w-[280px] flex-1 w-full sm:w-[45%] lg:w-[30%]"
    >
      <Icon className={`text-4xl ${colorMap[icon_color]} mb-4`} />
      <h3 className="text-lg font-semibold text-center text-teal-900 mb-3">{title}</h3>
      <div className="flex flex-col justify-center items-center gap-2">
        {content?.map((line, index) => (
          <p key={index} className="text-sm text-teal-800 text-center">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LandingSectionCards;
