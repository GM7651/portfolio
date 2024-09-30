import React from 'react'

function Footer() {
  return (
    <footer class="flex py-4 flex-col space-y-10 justify-center m-10">

    

    <div className="flex justify-center space-x-5">
  <a href="https://www.linkedin.com/in/gerimato/" target="_blank" rel="noopener noreferrer" className="inline-block">
    <img
      src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
      alt="LinkedIn"
      className="w-8 h-8" 
    />
  </a>

 

  <a href="mailto:gerimato123@gmail.com" className="inline-block">
    <img
      src="https://img.icons8.com/fluent/30/000000/email-open.png"
      alt="Email"
      className="w-8 h-8"
    />
  </a>
</div>
    <p class="text-center text-gray-700 font-medium"></p>
</footer>
  )
}

export default Footer
