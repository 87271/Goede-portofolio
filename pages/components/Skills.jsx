import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-lime-400">
          Skills
        </p>
        <h2 className=" py-4">WAT IK KAN DOEN</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> HTML</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> CSS</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> Javascript</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/React.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> React</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/Tailwind.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> Tailwind</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/php.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> PHP</h3>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-500 ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto  ">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width='64'
                  height='62'
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3> Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
