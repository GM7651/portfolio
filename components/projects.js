import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projectData = [
  {
    title: 'Project One',
    imgSrc: '/assets/project 1.png',
    link: 'https://carwash-lac.vercel.app/',
    techIcons: ['/skills/html.png', '/skills/javascript.png', '/skills/tailwind.png'], // Example tech for Project One
    githubLink: 'https://github.com/GM7651/carwash/tree/main/carwash', // Add GitHub link

  },
  {
    title: 'Project Two',
    imgSrc: '/assets/project 2.png',
    link: '/project-two',
    techIcons: ['/skills/html.png', '/skills/javascript.png','/skills/css.png','/skills/aws.png'], // No Tailwind for Project Two
  },
  {
    title: 'Project Three',
    imgSrc: '/path/to/project3-image.jpg',
    link: 'https://carwash-lac.vercel.app/',
    techIcons: ['/skills/html.png', '/skills/javascript.png', '/skills/tailwind.png'], 
  },
  {
    title: 'Project Four',
    imgSrc: '/path/to/project4-image.jpg',
    link: '/project-four',
    techIcons: ['/skills/html.png', '/skills/javascript.png', '/skills/tailwind.png'], 
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <p className='text-xl tracking-widest -mt-24 uppercase text-[#5651e5] text-center'>
          Projects
        </p>
        <h2 className='py-4 text-center text-2xl md:text-3xl font-bold'>What I&apos;ve Built</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData.map((project, index) => (
            <div key={index} className='p-6 shadow-lg hover:shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
              <Image 
                src={project.imgSrc}
                alt={project.title}
                width={500}
                height={300}
                className='rounded-xl w-full h-auto'
              />
              <h3 className='text-lg md:text-xl font-semibold py-2 text-center'>{project.title}</h3>
              <Link href={project.link}>
                <div className='block text-center text-[#5651e5] underline py-2'>View Project</div>
              </Link>
              <div className='flex justify-center space-x-6 mt-4'>
                {project.techIcons.map((icon, i) => (
                  <Image 
                    key={i} 
                    src={icon} 
                    width={48} 
                    height={48} 
                    alt='Tech Icon'
                    className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
              {/* GitHub Link with SVG Icon */}
              {project.githubLink && (
                <div className='text-center mt-4'>
                  <Link href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                    <svg 
                      width="24px" 
                      height="24px" 
                      viewBox="0 0 48 48" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:scale-110 transition-transform duration-300"
                    >
                      
                      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-700.000000, -560.000000)" fill="#3E75C3">
                          <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" id="Github"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;