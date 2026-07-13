import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
