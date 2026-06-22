function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Quiz Master
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Test your knowledge across multiple categories and challenge yourself.
      </p>

      <button className="px-6 py-3 rounded-lg bg-black text-white hover:opacity-90 transition">
        Start Quiz
      </button>
    </main>
  );
}

export default App;