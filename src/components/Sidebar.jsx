const navLinks = [
  { icon: "home", label: "Home", active: true },
  { icon: "insights", label: "My Progress" },
  { icon: "leaderboard", label: "Leaderboard" },
  { icon: "settings", label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-0 border-r border-outline-variant bg-surface-container-low w-64 z-50">
      <div className="px-gutter py-margin-desktop">
        <div className="font-headline-lg text-primary-fixed-dim mb-margin-desktop">
          QuizMaster
        </div>

        <nav className="space-y-2">
          {navLinks.map(({ icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={
                active
                  ? "flex items-center gap-unit bg-primary-container/20 border border-primary-container/30 text-primary-fixed-dim rounded-lg px-4 py-3 transition-all duration-200 ease-in-out neon-glow-primary"
                  : "flex items-center gap-unit text-on-surface-variant px-4 py-3 hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out rounded-lg"
              }
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-label-caps text-[14px]">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-gutter">
        <button className="w-full py-4 bg-primary-container text-on-primary-container rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all duration-200 neon-glow-primary">
          <span className="material-symbols-outlined">play_circle</span>
          Start Quiz
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
