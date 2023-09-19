import { BrowserRouter } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"; // Import icons from React Icons

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p className="mb-0">
            &copy; 2023 Sanif Mujawar. All rights reserved.{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-white hover:underline"
            >
              <FaEnvelope className="mr-1 inline-block align-middle" />{" "}
              sanifmujawar@gmail.com
            </a>{" "}
            <a
              href="https://github.com/sanifmujawar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              <FaGithub className="mr-1 ml-2 inline-block align-middle" />{" "}
              GitHub
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/sanif-mujawar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              <FaLinkedin className="mr-1 ml-2 inline-block align-middle" />{" "}
              LinkedIn
            </a>{" "}
            <a
              href="https://youtu.be/FtH7D-MNebg?si=Jbj44tyeKQA9j2L9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              <FaYoutube className="mr-1 ml-2 inline-block align-middle" />{" "}
              YouTube
            </a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
