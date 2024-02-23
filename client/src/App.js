import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Contact />
        </div>
        <div className='footer mb-2 ms-5'>
          <h4 className="text-center">
            Made By 😍 Ofir Nahshoni &copy; 2024
          </h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#1e1e2c"
        style={{
          backgroundColor: '#f29f67',
          borderRadius: '50px',
          fontWeight: 'bold'
        }}
      />
    </>
  );
}

export default App;
