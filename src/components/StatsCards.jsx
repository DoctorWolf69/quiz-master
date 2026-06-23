const stats = [
  {
    icon: "quiz",
    value: "142",
    label: "Quizzes Taken",
    hover: "hover:border-primary-fixed-dim/50",
    iconBox:
      "bg-primary-fixed-dim/10 text-primary-fixed-dim border-primary-fixed-dim/20",
  },
  {
    icon: "monitoring",
    value: "94.2%",
    label: "Average Score",
    hover: "hover:border-secondary-fixed-dim/50",
    iconBox: "bg-secondary/10 text-secondary-fixed-dim border-secondary/20",
  },
  {
    icon: "public",
    value: "#248",
    label: "Global Rank",
    hover: "hover:border-tertiary-fixed-dim/50",
    iconBox:
      "bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim border-tertiary-fixed-dim/20",
  },
];

function StatsCards() {
  return (
    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
      {stats.map(({ icon, value, label, hover, iconBox }) => (
        <div
          key={label}
          className={`glass-card p-gutter rounded-2xl group transition-all duration-300 relative overflow-hidden ${hover}`}
        >
          <div className="absolute inset-0 shimmer-bg opacity-20 pointer-events-none"></div>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${iconBox}`}
          >
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div className="font-headline-lg text-on-surface">{value}</div>
          <div className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
