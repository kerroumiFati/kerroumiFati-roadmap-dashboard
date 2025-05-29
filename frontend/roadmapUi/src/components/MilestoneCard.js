export default function MilestoneCard({ milestone, status }) {
  const statusColors = {
      done: "bg-blue-500 shadow-[0_0_14px_6px_rgba(255,255,255,0.6)]",
    current: "bg-blue-300 shadow-[0_0_10px_4px_rgba(255,255,255,0.4)]",
    upcoming: " bg-gray-300 shadow-[0_0_6px_2px_rgba(255,255,255,0.2)]",
    tba: " bg-gray-100 shadow-[0_0_6px_2px_rgba(255,255,255,0.2)]",
  };

  return (
    <div className="relative pl-10 pb-8">
      {/* vertical line */}
      <div className="absolute  top-[0.60rem] left-4 bottom-0 w-px bg-gray-300 z-0"></div>

      {/* Circle over the line */}
      <div className={`absolute left-[11px] top-2 w-3 h-3 rounded-full z-10 ${statusColors[status]} shadow-md`}  ></div>
      <div className="relative z-20 pl-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {milestone.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300"> 
          {milestone.description}  </p>
        <p className="text-xs text-right text-gray-500 dark:text-gray-400">
          {milestone.date}   </p>
      </div>
    </div>
  );
}
