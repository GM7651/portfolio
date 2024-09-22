import Image from "next/image";
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactForm from '../components/contactform';




export default function Home() {
  return (
    <div className = "relative flex flex-col items-center max-w-screem-xl px-4 mx-autoo md:f;ex-row sm:px-6 p-8">
      <div className = "flex items-center py-5 md:w-1/2 md:pb-10 md:pr-10">
        <div className = "text-center">
          
        <nav className="sticky top-0 mb-4 w-full bg-white shadow-lg z-50">
          <ul className = "flex flex-row space-x-4">
            <li><a className="md:p-4 py-3 px-0 block" href ="/">About </a></li>
            <li><a className="md:p-4 py-3 px-0 block" href ="/">Skills </a></li>
            <li><a className="md:p-4 py-3 px-0 block" href ="/">Projects </a></li>
            <li><a className="md:p-4 py-3 px-0 block" href ="/">Contact Me </a></li>

          </ul>
        </nav>



          <h2 className = "text=4xl mb-32 font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
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
          <Skills />

        </div>

      </div>
            <Projects />

            <ContactForm />
    </div>

 

  );
}
