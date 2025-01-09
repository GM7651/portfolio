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
<div className="text-center mb-6">
  <h2 className="text-2xl font-semibold mb-2">Geri Mato</h2>
  <p className="text-lg font-medium">Full Stack Developer | Brooklyn, NY (or Remote)</p>
  <p className="text-gray-700">
    Email: 
    <a href="mailto:Gerimato1234@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
      Gerimato1234@gmail.com
    </a>
  </p>
  <div className="flex justify-center space-x-4 mt-2">
    <a href="https://gerimato.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
       gerimato.com
    </a>
    <a href="https://linkedin.com/in/gerimato" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
      LinkedIn
    </a>
    <a href="https://github.com/GM7651" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
      GitHub
    </a>
  </div>

</div>



      <p className="mb-6">
        Full Stack Developer specializing in responsive, user-centric web applications for SaaS platforms
          and cloud environments. Skilled in Next.js, Tailwind CSS, Firebase, and API integration, with a
          proven track record of cross-functional collaboration to deliver high-performance, user-focused
        solutions that drive measurable results.        </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
      <div className="mb-4 flex justify-between items-start">
  <div>
    <h3 className="font-bold text-lg">Bachelor of Science, Computer Information Systems</h3>
    <p className="text-gray-700">Brooklyn College, Brooklyn, NY</p>
  </div>
  <div className="text-black font-semibold text-right">
    <time dateTime="2024-05">May 2024</time>
  </div>
</div>

<div className="mb-4 flex justify-between items-start">
  <div>
    <h3 className="font-bold text-lg">Associate of Applied Science</h3>
    <p className="text-gray-700">CUNY Kingsborough Community College, Brooklyn, NY</p>
  </div>
  <div className="text-black font-semibold text-right">
    <time dateTime="2022-01">January 2022</time>
  </div>
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
      <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">
      ShineCityAutoSpa (Client Project) - 
      <a 
        href="https://shinecityautospa.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit ShineCityAutoSpa website"
      >
        Link
      </a>
    </h3>
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2024-09">September 2024</time> – <time dateTime="2024-11">November 2024</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Engineered a fully responsive website using Next.js, Firebase, EmailJS, and Tailwind CSS to elevate user experience and drive customer engagement.</li>
      <li>Devised and implemented SEO strategies that increased online visibility, improving local search rankings and enabling easier discovery by potential customers.</li>
      <li>Integrated Firebase for real-time data synchronization, facilitating seamless appointment scheduling and service updates, reducing manual booking errors by 30%.</li>
      <li>Enabled direct customer communication through EmailJS-powered contact forms, enhancing convenience and user interaction with a streamlined inquiry process.</li>
    </ul>
  </div>
</div>

<div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">
      Sinani Piping & Heating (Client Project) - 
      <a 
        href="https://sinaniphcorp.org/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit Sinani Piping & Heating website"
      >
        Link
      </a>
    </h3>
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2024-09">September 2024</time> – <time dateTime="2024-11">November 2024</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Developed a fully responsive website for a local plumbing business using Next.js, EmailJS, and Cloudinary, streamlining appointment scheduling and customer issue reporting.</li>
      <li>Designed an intuitive layout tailored to customer needs, making appointment scheduling and issue reporting straightforward for non-technical users, thereby improving overall accessibility.</li>
      <li>Integrated EmailJS and Cloudinary to allow customers to upload images of plumbing issues, reducing preliminary assessment time by 40% and enabling faster, more efficient service.</li>
      <li>Deployed on Vercel for high-speed, reliable hosting, ensuring consistent performance; additionally, configured DNS settings through GoDaddy for seamless domain management and accessibility.</li>
    </ul>
  </div>
</div>



      {/* Project 2 */}
      <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">
      Personal Portfolio (Personal Project) - 
      <a 
        href="https://gerimato.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit the Personal Portfolio website"
      >
        Link
      </a>
    </h3>
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2024-05">May 2024</time> – <time dateTime="2024-11">Present</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Developed and launched a fully responsive portfolio website using Next.js (React framework), JavaScript, Tailwind CSS, and Vercel, ensuring fast, reliable hosting and showcasing project highlights and technical skills.</li>
      <li>Integrated EmailJS to enable direct, code-free contact form submissions, streamlining communication for recruiters and potential clients.</li>
      <li>Achieved 100% mobile compatibility through responsive design with Tailwind CSS, maximizing accessibility and providing an optimal experience across all device types.</li>
    </ul>
  </div>
</div>




      {/* Project 3 */}
      <div className="mb-4 flex justify-between">
  <div>
  <h3 className="font-bold text-lg">
  Gym Membership Website (Academic Project) - 
      <a 
        href="https://github.com/GM7651/UnderGround" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit the Personal Portfolio website"
      >
        Link
      </a>
    </h3>
    
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2023-02">February 2023</time> – <time dateTime="2023-12">December 2023</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Developed a membership management web application using HTML, CSS, and Express.js, providing an intuitive and efficient experience for both gym members and staff.</li>
      <li>Collaborated with a team of 2 to design and implement essential features, including member registration, profile management, and subscription tracking, enhancing operational efficiency and user satisfaction.</li>
      <li>Integrated PayPal API to facilitate secure payment processing, allowing members to manage fees directly on the platform, which improved user convenience and payment security.</li>
      <li>Used GitHub for task management and version control, promoting organized collaboration and tracking throughout the development lifecycle.</li>
      <li>Designed user interfaces and layouts in Figma, establishing a clear visual structure and seamless user flow that optimized usability and enhanced the overall user experience.</li>
    </ul>
  </div>
</div>







      {/* Project 5 */}
      <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">
      Moller Vitamin Showcase Website (Client Project) - 
      <a 
        href="https://mollerz.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit the Moller Vitamin Showcase Website"
      >
        Link
      </a>
    </h3>
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2024-05">May 2024</time> – <time dateTime="2024-11">Present</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Developed a responsive showcase website for Möller Vitamins using Next.js, Tailwind CSS, and JavaScript, strategically designed to increase brand visibility and drive user engagement.</li>
      <li>Implemented modern UX/UI principles, resulting in a 40% increase in positive feedback on visual appeal and design from stakeholders, including the business owner and end-users.</li>
      <li>Structured intuitive product sections that enhanced navigation, enabling users to quickly access detailed information on various vitamins and health benefits.</li>
      <li>Ensured 100% device responsiveness, delivering a seamless experience across desktop and mobile platforms to maximize accessibility and user satisfaction.</li>
      <li>Deployed on Vercel pre-launch, guaranteeing reliable, scalable hosting and smooth performance post-launch.</li>
    </ul>
  </div>
</div>



      {/* Project 6 */}
      <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">
      Appointment Dashboard (Client Project) - 
      <a 
        href="https://dashboard-phi-three-46.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 font-semibold"
        aria-label="Visit the Appointment Dashboard"
      >
        Link
      </a>
    </h3>
    <p className="text-gray-700">Role: Full-Stack Developer</p>
    <p className="text-gray-500">
      <time dateTime="2024-05">May 2024</time> – <time dateTime="2024-11">Present</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Developed and launched a responsive appointment management dashboard using Next.js, Firebase API, Tailwind CSS, and Vercel, ensuring fast, reliable hosting and optimized performance.</li>
      <li>Implemented real-time data synchronization with Firebase Firestore to provide instant appointment updates, improving accuracy and user satisfaction by reducing booking conflicts.</li>
      <li>Designed dynamic date and time slot generation to simplify appointment scheduling, reducing the average scheduling time by 20% and enhancing user experience.</li>
      <li>Built robust CRUD functionality for appointment management, enabling users to create, modify, and cancel bookings seamlessly, which improved user flexibility and control.</li>
    </ul>
  </div>
</div>



 



      <h2 className="text-2xl font-semibold mt-8 mb-4">Work Experience</h2>


      <div className="mb-4 flex justify-between">
        <div>
          <h3 className="font-bold text-lg">
          Web Development Intern - PlayWebTherapy, Remote           
          </h3>
          <p className="text-gray-700">Role: Full-Stack Developer</p>
          <p className="text-gray-500">
            <time dateTime="2024-05">December 2024</time> – Present
          </p>
          <ul className="list-disc ml-5">
            <li>
            Implemented TypeScript form validation for client and therapist account forms, ensuring correct input for age and addresses (street, city, state, zip).
            </li>
            <li>
            Standardized and updated address data in MongoDB, ensuring consistency across the database.
            </li>
            <li>
            Customized cursor lock functionality in the game interface, displaying a custom sign at the center.
            </li>
            <li>
            Refined UI elements on the therapist homepage, improving button alignment and hiding features for beta testing.
            </li>
            <li>
            Resolved code generation errors to ensure correct subtraction during therapist code creation.
            </li>
            <li>
            Optimized website responsiveness, ensuring full compatibility across desktop, tablet, and mobile screens.            
            </li>
            <li>
            Edited API routes to manage form submissions and MongoDB updates, improving data integrity and user experience.            
            </li>
          </ul>
        </div>
      </div>


      <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">Data Collection Intern</h3>
    <p className="text-gray-700">Enterprise Technology Research, Brooklyn, NY</p>
    <p className="text-gray-500">
      <time dateTime="2018-06">June 2018</time> – <time dateTime="2018-09">Sep. 2018</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Managed and organized a database of 400 potential clients using Microsoft Excel, ensuring data accuracy and consistency.</li>
      <li>Performed data entry and validation to maintain up-to-date information, contributing to a 20% improvement in outreach efficiency.</li>
      <li>Analyzed client data to identify patterns and trends, providing insights that informed marketing and sales strategies.</li>
      <li>Collaborated with team members to streamline data collection processes, reducing data entry errors by 15%.</li>
    </ul>
  </div>
</div>



  <div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">Concierge</h3>
    <p className="text-gray-700">172 Madison, Manhattan, NY</p>
    <p className="text-gray-500">
      <time dateTime="2020-02">Feb. 2020</time> – <time dateTime="2021-01">Jan. 2021</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Ensured security and maintained a welcoming, professional environment for over 100 residents in a high-end residential building.</li>
      <li>Managed visitor access and package deliveries, streamlining resident services and reducing wait times by 20% during peak hours.</li>
    </ul>
  </div>
</div>


<div className="mb-4 flex justify-between">
  <div>
    <h3 className="font-bold text-lg">Sales and Generalist</h3>
    <p className="text-gray-700">Planet Fitness, Brooklyn, NY</p>
    <p className="text-gray-500">
      <time dateTime="2019-04">Apr. 2019</time> – <time dateTime="2019-08">Aug. 2019</time>
    </p>
    <ul className="list-disc ml-5">
      <li>Drove membership growth through strategic sales initiatives, increasing memberships by 15% over a four-month period.</li>
      <li>Engaged with potential and existing members to understand their fitness goals, providing tailored recommendations that enhanced member satisfaction and retention.</li>
    </ul>
  </div>
</div>








<div className="mb-6">
  <h2 className="text-2xl font-semibold mt-8 mb-4">Languages</h2>
  <ul className="list-disc list-inside">
    <li>English – Fluent</li>
    <li>Albanian – Fluent</li>
  </ul>
</div>

    </div>
  );
};

export default Resume;
