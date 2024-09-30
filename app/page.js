"use client";

import { useEffect, useState } from "react"; // Import useEffect and useState from React
import Image from "next/image";
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu

  useEffect(() => {
    // Add smooth scrolling to links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 py-8">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-5 md:w-full">
        <button 
          className="md:hidden block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className={`md:flex md:items-center w-full md:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700">
              <li><a className="md:p-4 py-3 px-0 block" href="#skills">Skills</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="#projects">Projects</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="#">Resume</a></li>
              <li><a className="md:p-4 py-3 px-0 block" href="#contact">Contact Me</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          Geri Mato
          <span className="font-bold mt-2 text-blue-500"> Full-Stack Developer</span>
        </h2>
      </div>

      {/* About Section */}
      <div className="text-center py-10">
      <div className="relative max-w-6xl  mt-4 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
      <div className="bg-white  p-7 rounded-md">
        <h1 className="text-xl text-blue-400 mb-4">About me</h1>
        <p className="text-base sm:text-lg md:text-xl text-black mb-6">
          I am a passionate full-stack developer with knowledge in JavaScript, Next.js, Tailwind CSS, and AWS. 
          Currently pursuing a Bachelor of Science in Computer Information Systems at Brooklyn College, I have hands-on experience in building responsive, 
          user-friendly web applications and websites. My portfolio showcases projects like a local carwash business website and a gym membership management system, where I’ve applied modern UX/UI principles, 
          SEO strategies, and secure payment integrations. With fluency in English and Albanian, I am committed to delivering innovative solutions and 
          continuously improving my technical skills.
        </p>
      </div>
      </div>
      </div>
      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>
      
        <Footer />
      

    </div>
    
  );
}

export default Home;
