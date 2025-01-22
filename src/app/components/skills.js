import React from 'react'
import Image from 'next/image'
import devwhite from "../../assets/img/icon-development-white.svg";
import devblack from "../../assets/img/icon-development-black.svg";
import marketwhite from "../../assets/img/icon-content-white.svg";
import marketblack from "../../assets/img/icon-content-black.svg";
import designwhite from "../../assets/img/icon-graphics-white.svg";
import designblack from "../../assets/img/icon-graphics-black.svg";

const Skills = () => {
  return (
    <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Here&apos;s what I&apos;m good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              These are the services Ioffer
            </h3>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image src={devwhite} alt="development icon" />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image src={devblack} alt="development icon" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    WEB DEVELOPMENT
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Crafting responsive and dynamic websites that deliver seamless
                    user experiences.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image src={designwhite} alt="Theme Design icon" />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image src={designblack} alt="Theme Design icon" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Web Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Creating visually stunning and user-friendly designs that
                    captivate and engage.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image src={marketwhite} alt="content marketing icon" />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image src={marketblack} alt="content marketing icon" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                    Technical Writing
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Translating complex concepts into clear, concise documentation
                    and guides.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
  )
}

export default Skills