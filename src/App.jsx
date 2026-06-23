import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <Navbar />

      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 lg:ml-64 p-margin-mobile lg:p-margin-desktop pb-32 lg:pb-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <Home />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
