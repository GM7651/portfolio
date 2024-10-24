'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct

const Resume = () => {

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-5 md:w-full">
      

        <div className={`md:flex md:items-center w-full md:w-auto }`}>
          <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700">
          <li>
            <a className="md:p-4 py-3 px-0 block  rounded-lg hover:bg-sky-50" href="/">
              {/* SVG Icon */}
              <svg
                fill="#000000"
                width="20px" /* Adjust size as needed */
                height="20px" /* Adjust size as needed */
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
              </svg>

            </a>
          </li>
        </ul>
          </nav>
        </div>
      </div>

      <h1 className="text-3xl text-center font-bold mb-6">Geri Mato</h1>
      <h2 className="text-xl text-center font-semibold mb-4">Front-End Developer</h2>
      <p className="mb-6">
        Front-End developer with hands-on experience in designing and developing responsive, user-centric web applications. Proficient in JavaScript, Next.js, Tailwind CSS, HTML/CSS, with a strong foundation in SEO, responsive design, and UX/UI principles. Demonstrated ability to deliver high-quality web solutions through agile development practices and continuous integration.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Bachelor of Science, Computer Information Systems</strong> - Brooklyn College, Brooklyn, NY
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">May 2024</div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <strong>Associate of Applied Science</strong> - CUNY Kingsborough Community College, Brooklyn, NY
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">January 2022</div>
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

      {/* Project 1 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Local Auto Business Website</strong> - 
          <a href="https://shinecityautospa.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold"> Link</a>
          <p>Role: Full-Stack Developer</p>
          <p>Designed and developed a responsive website using Next.js and Tailwind CSS.</p>
          <p>Implemented SEO strategies to enhance online visibility.</p>
          <p>Deployed on Vercel for continuous integration.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">September 2024 November 2024 </div>
      </div>

      {/* Project 2 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Personal Portfolio</strong> - 
          <a href="https://gerimato.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold"> Link</a>
          <p>Role: Full-Stack Developer</p>
          <p>Developed a personal portfolio website using Next.js and JavaScript to showcase skills and projects.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">May 2024  Present</div>
      </div>

      {/* Project 3 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Gym Membership Management System</strong>
          <p>Role: Full-Stack Developer</p>
          <p>Developed a membership management web app with Next.js and Tailwind CSS.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">December 2023 Present</div>
      </div>

      {/* Project 4 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Space Invaders Game</strong>
          <p>Role: Front-End Developer</p>
          <p>Collaborated with a team to design and develop a Space Invaders game using JavaScript.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">September 2023  December 2023</div>
      </div>

      {/* Project 5 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Moller Vitamin Showcase</strong> - 
          <a href="https://mollerz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold"> Link</a>
          <p>Developed a responsive website using Next.js, Tailwind CSS, and JavaScript for Möllers vitamins.</p>
          <p>Enhanced user engagement with modern UX/UI principles and deployed via Vercel.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">May 2024  Present</div>
      </div>

      {/* Project 6 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <strong>Appointment Dashboard</strong> - 
          <a href="https://dashboard-phi-three-46.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold"> Link</a>
          <p>Role: Full-Stack Developer</p>
          <p>Created a responsive appointment management dashboard using Next.js and Firebase.</p>
          <p>Implemented real-time data fetching with Firebase Firestore, dynamic date/time slot generation, and appointment CRUD functionality.</p>
        </div>
        <div className="text-red-500 font-semibold w-32 text-right">May 2024  Present</div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Work Experience</h2>

      <div className="mb-4 flex justify-between">
        <div>
          <strong>Concierge</strong> - 172 Madison, Manhattan, NY
          <p>Feb. 2020–Jan. 2021</p>
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

      <h2 className="text-2xl font-semibold mt-8 mb-4">Languages</h2>
      <ul className="list-disc list-inside mb-6">
        <li>English</li>
        <li>Albanian</li>
      </ul>
    </div>
  );
};

export default Resume;
