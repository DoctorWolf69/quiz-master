function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-zinc-800 p-6">
      <button className="mb-4 text-left text-zinc-300">
        Home
      </button>

      <button className="mb-4 text-left text-zinc-300">
        Leaderboard
      </button>

      <button className="mt-auto rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-black">
        Start Quiz
      </button>
    </aside>
  );
}

export default Sidebar;