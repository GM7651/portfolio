"use client";
import { useEffect } from "react"; // Import useEffect from React

import Image from "next/image";
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactForm from '../components/contactform';

function Home() {
  useEffect(() => {
    // Add smooth scrolling to links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);


  return (
    <div className = "relative flex flex-col items-center max-w-screem-xl px-4 mx-autoo md:f;ex-row sm:px-6 p-8">
      <div className = "flex items-center py-5 md:w-1/2 md:pb-10 md:pr-10">
        <div className = "text-center">
          
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><a className="md:p-4 py-3 px-0 block" href="#skills">Skills</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#projects">Projects</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Resume</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </div>


          <h2 className = "text=4xl mt-8 mb-32 font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Geri Mato 
              <div className ="font-bold mt-2 text-blue-500 mb-6"> Full-Stack Developer</div>
          </h2>

          <h1 className='text-xl  text-blue-400 mb-4'>About me</h1>
          <p className="text-base sm:text-lg md:text-xl text-black mb-6">
          I am a passionate full-stack developer with knowledge in JavaScript, Next.js, Tailwind CSS, and AWS. 
          Currently pursuing a Bachelor of Science in Computer Information Systems at Brooklyn College, I have hands-on experience in building responsive, 
          user-friendly web applications and websites. My portfolio showcases projects like a local carwash business website and a gym membership management system, where I’ve applied modern UX/UI principles, 
          SEO strategies, and secure payment integrations. With fluency in English and Albanian, I am committed to delivering innovative solutions and 
          continuously improving my technical skills.

          </p>
          <div id="skills">
            <Skills />
          </div>
        </div>

      </div>
      <div id= "projects">
            <Projects />
</div>
      <div id="contact">
            <ContactForm />
            </div>
    </div>

 

  );
}

export default Home;
