import Image from "next/image";
import Head from "../components/Header";
import Inter from "next/font/google"

export default function Home() {
  return (
    <div>

      <Head />

      <div className=" flex justify-center items-center  banner1 bg-blue-50 ">

        <div className="left">
          <h2 className="text-4xl font-semibold text-gray-500">Hey, I am Wahab  </h2><br />
          <h1 className="text-7xl font-bold text-gray-800 mt-2">I create <span className="text-purple-600">product design </span>
            <br /> and brand experience
          </h1>
          <p className="text-gray-600 mt-6 max-w-md font-normal text-2xl">
            A Computer Science graduate, A website developer, A Search Engine Optimization Expert.<span className="danda">|</span>
          </p>
          <button className="mt-6 py-3 px-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600">Get In Touch</button>

        </div>

        <div className="right ml-96">
          <Image src="/dp.png" alt="Dp" className="object-cover" width={400} height={600}></Image>
        </div>

      </div>
      <div className="banner2 items-center flex-col justify-center">
        <div className="heading"><h1 className="text-4xl text-black font-bold text-[64px] mt-20 ml-56 mb-20">My Expertise</h1></div>

        <div className="4section grid grid-cols-1 md:grid-cols-4 items-center gap-4 ml-11 mr-11">

          <div className="1 rounded-xl p-12 bg-blue-50 h-full min-h-[240px]">
            <h1 className="font-bold text-3xl">Strategy & Direction</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="2 rounded-xl p-12 bg-blue-50 h-full min-h-[240px]">
            <h1 className="font-bold text-3xl">Branding & logo</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="3 rounded-xl p-12 bg-blue-50 h-full min-h-[240px]">
            <h1 className="font-bold text-3xl">UI & UX Design</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="4 rounded-xl p-12 bg-blue-50 h-full min-h-[240px]">
            <h1 className="font-bold text-3xl">Webflow Development</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

        </div>    {/*4section*/}

      </div>    {/*banner2*/}

      <div className="banner3 my-8">
        <h2 className="text-center text-2xl mb-4">Watch Our Video</h2>
        <div className="flex justify-center">
          <iframe width="100%"  // Set width to 100% to make it full-width 
            height="1000px"
            src="https://www.youtube.com/embed/v65tOS-gBu4?&mute=1si=wpwY-iJqRsmxJ0gFautoplay=1&rel=0&showinfo=0"
            title="YouTube video player" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>   {/*banner3*/}



    </div>       /*body*/

  );

}

