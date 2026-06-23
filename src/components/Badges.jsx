const earned = [
  {
    icon: "workspace_premium",
    label: "Top Streak",
    gradient: "from-secondary-container to-secondary",
    text: "text-on-secondary",
    glow: "neon-glow-secondary",
  },
  {
    icon: "bolt",
    label: "Fast Learner",
    gradient: "from-tertiary-container to-tertiary-fixed-dim",
    text: "text-on-tertiary",
    glow: "neon-glow-tertiary",
  },
  {
    icon: "menu_book",
    label: "Scholar",
    gradient: "from-primary-container to-primary-fixed-dim",
    text: "text-on-primary",
    glow: "neon-glow-primary",
  },
];

const locked = ["Master", "Expert", "Grand Master"];

function Badges() {
  return (
    <div className="md:col-span-5 glass-card p-gutter rounded-3xl border border-outline-variant/30 relative group overflow-hidden">
      <div className="flex justify-between items-center mb-gutter">
        <h3 className="font-headline-lg text-[24px] text-on-surface">
          My Badges
        </h3>
        <span className="font-label-caps text-[12px] text-primary-fixed-dim">
          12 / 48
        </span>
      </div>

      <div className="grid grid-cols-3 gap-gutter relative z-10">
        {earned.map(({ icon, label, gradient, text, glow }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className={`w-16 h-16 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center ${text} shadow-lg border-2 border-white/20 ${glow}`}
            >
              <span className="material-symbols-outlined text-[32px]">
                {icon}
              </span>
            </div>
            <span className="font-label-caps text-[10px] text-center text-on-surface">
              {label}
            </span>
          </div>
        ))}

        {locked.map((label) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 opacity-20"
          >
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant border-2 border-white/10">
              <span className="material-symbols-outlined text-[32px]">lock</span>
            </div>
            <span className="font-label-caps text-[10px] text-center">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-margin-desktop">
        <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden border border-white/5">
          <div className="h-full bg-linear-to-r from-primary-fixed-dim via-secondary-fixed-dim to-tertiary-fixed-dim w-1/4 neon-glow-primary"></div>
        </div>
        <div className="mt-2 text-center font-label-caps text-[10px] text-on-surface-variant">
          Next badge at Level 15
        </div>
      </div>
    </div>
  );
}

export default Badges;
