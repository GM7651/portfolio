import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex py-4 flex-col space-y-10 justify-center m-10">

    

<div className="flex justify-center space-x-5">
  <a href="https://www.linkedin.com/in/gerimato/" target="_blank" rel="noopener noreferrer" className="inline-block">
    <Image
      src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
      alt="LinkedIn"
      width={30}
      height={30}
      className="shadow-lg "
    />
  </a>

  <a href="mailto:gerimato123@gmail.com" className="inline-block">
    <Image
      src="https://img.icons8.com/fluent/30/000000/email-open.png"
      alt="Email"
      width={30}
      height={30}
      className="shadow-lg "
    />
  </a>
</div>
    <p className="text-center text-gray-700 font-medium"></p>
</footer>
  )
}

export default Footer
