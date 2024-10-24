"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct

const Resume = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu

  return (
    <div className="max-w-4xl mx-auto p-8">
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
            <li><a className="md:p-4 py-3 px-0 block" href="/">Home</a></li>
          </ul>
        </nav>
      </div>
    </div>
      <h1 className="text-3xl font-bold mb-6">Geri Mato</h1>
      <h2 className="text-xl font-semibold mb-4">Front-End Developer</h2>
      <p className="mb-6">
        Front-End developer with hands-on experience in designing and developing responsive, user-centric web applications. Proficient in JavaScript, Next.js, Tailwind CSS, HTML/CSS, with a strong foundation in SEO, responsive design, and UX/UI principles. Demonstrated ability to deliver high-quality web solutions through agile development practices and continuous integration.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Bachelor of Science, Computer Information Systems</strong> - Brooklyn College, Brooklyn, NY
        </div>
        <div>May 2024</div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Associate of Applied Science</strong> - CUNY Kingsborough Community College, Brooklyn, NY
        </div>
        <div>January 2022</div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Skills and Languages</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Front-End:</strong> JavaScript, HTML, CSS, Next.js, Tailwind CSS</li>
        <li><strong>Back-End:</strong> SQL, Microsoft SQL Server, RDS</li>
        <li><strong>Tools:</strong> Git, Subversion, AWS, Figma</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Relevant Coursework</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Web Page Development with HTML and CSS</li>
        <li>Modern Programming Techniques</li>
        <li>Database Operating Systems</li>
        <li>Management Information Systems</li>
        <li>Java Programming</li>
        <li>Data Structures and Algorithms</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Projects</h2>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Local Auto Business Website</strong> - <a href="https://shinecityautospa.com" target="_blank" rel="noopener noreferrer "className="text-blue-600 shadow-lg border hover:text-blue-800 font-semibold">Link</a>
          <p>Role: Full-Stack Developer</p>
          <p> Designed and developed a responsive website using Next.js and Tailwind CSS.</p>
          <p> Implemented SEO strategies to enhance online visibility.</p>
          <p> Deployed on Vercel for continuous integration.</p>


        </div>
        <div>Date: [Add the timeframe if applicable]</div>
      </div>
      <div className="mb-4 flex justify-between">
          <div>
          <strong>Personal Portfolio</strong> - <a href="https://gerimato.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 shadow-lg border hover:text-blue-800 font-semibold">Link</a>
            <p>Role: Full-Stack Developer</p>
            <p>Developed a comprehensive personal portfolio website leveraging Next.js and JavaScript, showcasing my skills and projects.</p>
          </div>
          <div>Date: May 2024 - Present</div>
        </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Gym Membership Management System</strong>
          <p>Role: Full-Stack Developer</p>
          <p>Developed a membership management web application, focusing on front-end with Next.js and Tailwind CSS.</p>
        </div>
        <div>Date: Dec 2023 - Present</div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Space Invaders Game</strong>
          <p>Role: Front-End Developer</p>
          <p>Collaborated with a team of 5 to design and develop a Space Invaders game, focusing on front-end development using JavaScript.</p>
        </div>
        <div>Date: Sep 2023 - Dec 2023</div>
      </div>

      <div className="mb-4 flex justify-between">
          <div>
            <strong>Moller Vitamin Showcase</strong> - <a href="https://mollerz.vercel.app/" target="_blank" rel="noopener noreferrer "className="text-blue-600 shadow-lg border hover:text-blue-800 font-semibold">Link</a>
            <p>Developed a comprehensive website for Möllers using Next.js, Tailwind CSS, and JavaScript, focusing on a user-friendly and responsive design.</p>
            <p>Implemented modern UX/UI principles to enhance user engagement and accessibility.</p>
            <p>Deployed the application on Vercel for efficient hosting and continuous integration.</p>

            

          </div>
          <div>Date: May 2024 - Present</div>
        </div>


        <div className="mb-4 flex justify-between">
          <div>
          <strong>Appointment Dashboard</strong> - <a href="https://dashboard-phi-three-46.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 shadow-lg border hover:text-blue-800 font-semibold">Link</a>
            <p>Role: Full-Stack Developer</p>
            <p>Developed a comprehensive personal portfolio website leveraging Next.js and JavaScript, showcasing my skills and projects.</p>
          </div>
          <div>Date: May 2024 - Present</div>
        </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Work Experience</h2>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Concierge</strong> - 172 Madison, Manhattan, NY
          <p>Feb. 2020 – Jan. 2021</p>
          <p>Ensured security and maintained a welcoming environment for over 100 residents.</p>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Sales and Generalist</strong> - Planet Fitness, Brooklyn, NY
          <p>Apr. - Aug. 2019</p>
          <p>Drove membership growth through strategic sales initiatives.</p>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Data Collection Intern</strong> - Enterprise Technology Research, Brooklyn, NY
          <p>June - Sep. 2018</p>
          <p>Managed a database of 400 potential clients using Microsoft Excel.</p>
        </div>
      </div>

       <div className="mb-4 flex justify-between">
        <div>
          <strong>Data Collection Intern</strong> - Enterprise Technology Research, Brooklyn, NY
          <p>June - Sep. 2018</p>
          <p>Managed a database of 400 potential clients using Microsoft Excel.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Languages</h2>
      <ul className="list-disc list-inside mb-6">
        <li>English</li>
        <li>Albanian</li>
      </ul>
    </div>
  );
};

export default Resume;
