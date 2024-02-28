import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
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
        component={<IoIosArrowUp />}
        color="#1e1e2c"
        style={{
          backgroundColor: '#1b92c9',
          borderRadius: '20px',
          fontSize: '24px',
          height: '42px',
        }}
      />
    </>
  );
}

export default App;
