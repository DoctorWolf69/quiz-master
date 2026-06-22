function Home() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-6xl font-bold tracking-tight">
        Quiz Master
      </h1>

      <p className="mb-10 max-w-xl text-zinc-400">
        Test your knowledge across multiple categories and challenge yourself.
      </p>

      <button className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black">
        Start Quiz
      </button>
    </section>
  );
}

export default Home;