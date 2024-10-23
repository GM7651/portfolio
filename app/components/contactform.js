"use client";

import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen mt-32 text-red-500">
      <div className="my-6">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold">Let&apos;sTalk</h1>
            <p className="text-sm text-gray-400 mt-3">
            Thank you for visiting my portfolio! I&apos;m excited to hear from you. Whether you have a project in mind, a question, 
            or just want to connect, feel free to drop me a message. I&apos;ll get back to you as soon as possible!
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                    </svg>
                  </div>
                  <a 
                    href="mailto:gerimato1234@gmail.com"
                    className="text-[#007bff] text-sm ml-3"
                  >
                    <small className="block">Mail</small>
                    <strong>gerimato1234@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Socials</h2>
              <ul className="flex mt-3 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a 
                    href="https://www.linkedin.com/in/gerimato/"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // For security purposes
                    className="flex items-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="27px" 
                      height="30px" 
                      fill='#007bff' 
                      viewBox="0 0 16 15"
                    >
                      <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                    </svg>
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a 
                    href="https://github.com/GM7651"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // For security purposes
                    className="flex items-center"
                  >
                    <svg 
                      width="27px" 
                      height="30px" 
                      viewBox="0 0 16 16" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none"
                    >
                      <path 
                        fill="#161514" 
                        fillRule="evenodd" 
                        d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form className="ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
            ></textarea>
            <button
              type="button"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
