"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Skills from './components/skills';
import Projects from './components/projects';
import ContactForm from './components/contactform';
import Footer from './components/footer';
import Navbar from './components/Navbar'; // Ensure this path is correct


const useTypingEffect = (text, duration, isTypeByLetter = false) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split('') : text.split(' ');

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? '' : ' ');
};

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Typing effect for name and title
  const name = useTypingEffect('Geri Mato', 100, true); // Typing by letter
  const title = useTypingEffect('Full-Stack Developer', 100, true); // Typing by letter

  useEffect(() => {
    // Add smooth scrolling to links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Corrected line
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 py-8">
      <Navbar />

      {/* Header Section */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
          {name}
          <span className="font-bold mt-2 text-blue-500"> {title}</span>
        </h2>
      </div>

      {/* About Section */}
      <div
        ref={sectionRef}
        className={`text-center py-10 transition-transform duration-1000 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'
        }`}
      >
        <div className="relative max-w-6xl mt-4 mx-auto rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
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
