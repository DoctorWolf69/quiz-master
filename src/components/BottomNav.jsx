const items = [
  { icon: "home", label: "Home", active: true },
  { icon: "query_stats", label: "Stats" },
  { icon: "local_library", label: "Library" },
  { icon: "person", label: "Profile" },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 lg:hidden bg-surface-container border-t border-outline-variant/30 backdrop-blur-xl">
      {items.map(({ icon, label, active }) => (
        <a
          key={label}
          href="#"
          className={
            active
              ? "flex flex-col items-center justify-center text-primary-fixed-dim bg-primary-fixed-dim/10 rounded-xl px-4 py-2 transition-all duration-150 border border-primary-fixed-dim/20"
              : "flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:text-primary-fixed-dim transition-all duration-150"
          }
        >
          <span className="material-symbols-outlined">{icon}</span>
          <span className="font-label-caps text-[10px]">{label}</span>
        </a>
      ))}
    </nav>
  );
}

export default BottomNav;
