import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Head = () => {
  return (
    <div>


      <header className='flex  justify-center gap-x-96 item-center p-6 white'>

        {/* <Image src="/logo.webp" alt="logo" height={40} width={200} ></Image> */}

        <ul className=" flex text-2xl space-x-8 font-semibold text-gray-800">
          <li><Link href={"/"} className="hover:text-blue-500">Home</Link></li>
          <li><Link href={"/portfolio"} className="hover:text-blue-500">Portfolio</Link></li>
          <li><Link href={"/about"} className="hover:text-blue-500">About me</Link></li>
          <li><Link href={"/testimonial"} className="hover:text-blue-500">Testimonials</Link></li>
        </ul>

      </header>


    </div>


  )

}

export default Head;
