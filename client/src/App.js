import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Techstack />
      </div>
    </div>
  );
}

export default App;
