const activity = [
  {
    icon: "history_edu",
    title: "Quantum Physics Basics",
    time: "2 hours ago",
    score: "98%",
    level: "Level 5",
    iconBox:
      "bg-secondary-container/20 text-secondary-fixed-dim border-secondary-container/30",
  },
  {
    icon: "biotech",
    title: "Cellular Biology",
    time: "Yesterday",
    score: "85%",
    level: "Level 3",
    iconBox:
      "bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim border-tertiary-fixed-dim/20",
  },
  {
    icon: "public",
    title: "European History",
    time: "3 days ago",
    score: "100%",
    level: "Level 8",
    iconBox:
      "bg-primary-fixed-dim/10 text-primary-fixed-dim border-primary-fixed-dim/20",
  },
];

function RecentActivity() {
  return (
    <div className="md:col-span-7 glass-card p-gutter rounded-3xl border border-outline-variant/30">
      <div className="flex justify-between items-center mb-gutter">
        <h3 className="font-headline-lg text-[24px] text-on-surface">
          Recent Activity
        </h3>
        <button className="text-primary-fixed-dim font-label-caps text-[12px] flex items-center gap-1 hover:gap-2 transition-all">
          View All
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="space-y-4">
        {activity.map(({ icon, title, time, score, level, iconBox }) => (
          <div
            key={title}
            className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors border border-transparent hover:border-white/10 group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${iconBox}`}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <div>
                <div className="font-body-md font-bold text-on-surface">
                  {title}
                </div>
                <div className="font-label-caps text-[10px] text-on-surface-variant">
                  {time}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-headline-lg text-[20px] text-tertiary-fixed-dim">
                {score}
              </div>
              <div className="font-label-caps text-[10px] text-on-surface-variant">
                {level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
