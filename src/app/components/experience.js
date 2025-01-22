import React from "react";
import Image from "next/image";
import solar from "../../assets/img/solar.png";
import webshark from "../../assets/img/webshark.png";
import vmetrics from "../../assets/img/vmetrics.png";

const Experience = () => {
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s what I did before
      </h3>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block" />
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <Image
                  src={solar}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Sept 2022 - Nov 2022
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Web Developer Intern
                  </span>
                  <div className="pt-2">
                    <ul className="block font-body text-black list-disc ml-6">
                      <li>
                        Worked with Solar Secure Solutions to help them build an
                        Ecommerce Application.
                      </li>
                      <li>
                        Worked with HTML, CSS & Jquery & Node js to build an
                        Ecommerce Website .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <Image
                  src={webshark}
                  className="h-auto w-40"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Nov 2022 - Dec 2023
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    MERN Stack Developer
                  </span>
                  <div className="pt-2">
                    <ul className="block font-body text-black list-disc ml-6">
                      <li>
                        Worked on both Frontend and Backend of a website using
                        React, Node JS Express and MongoDB.
                      </li>
                      <li>
                        Designed an e-commerce web app using Woo-Commerce.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <Image
                  src={vmetrics}
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block" />
              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block" />
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Dec 2023 - Current
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    MERN Stack Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Worked on a car price comparison website using Next.js for the
                      frontend, Node.js and Express.js for backend services,
                      MongoDB for database management, and Sanity for content
                      management.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
