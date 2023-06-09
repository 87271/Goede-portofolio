import React from "react";
import propertyImg from "public/assets/projects/property.jpg";
import reseveringImg from "public/assets/projects/reseveringImg.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
function property() {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={reseveringImg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className=" py-2">Reseveringsite</h2>
          <h3> PHP/HTML/CSS</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Project</p>
          <h2>Overvieuw</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            distinctio officiis repellendus tempora, reiciendis obcaecati
            accusantium, commodi eligendi aliquam delectus qui perspiciatis
            consequatur quisquam explicabo rem dolore fugit repudiandae impedit.
          </p>

          <button className=" px-8 py-2 mt-4 mr-8">demo</button>
          <button className=" px-8 py-2 mt-4 ">code</button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className=" p-2">
            <p className=" text-center font-bold pb-2"> Technolgie</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> HTML
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> PHP
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> CSS
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> JAVASCRIPT
              </p>
              {/* <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className=" pr-1" /> React
              </p> */}

            </div>
          </div>
        </div>
        <Link href='/#project'>
            <p className=" underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default property;
