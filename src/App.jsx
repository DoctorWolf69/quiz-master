import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;