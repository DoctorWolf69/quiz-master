function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-zinc-800 p-6">
      <button className="mb-4 text-left">Home</button>
      <button className="mb-4 text-left">Leaderboard</button>
      <button className="mb-4 text-left">Profile</button>

      <button className="mt-auto bg-cyan-400 text-black py-3 rounded-lg font-semibold">
        Start Quiz
      </button>
    </aside>
  );
}

export default Sidebar;