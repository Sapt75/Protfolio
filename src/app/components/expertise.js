import React from "react";
import Image from "next/image";
import react from "../../assets/img/react.png";
import next from "../../assets/img/nextjs.png";
import mongo from "../../assets/img/mongo.svg";
import node from "../../assets/img/nodejs.png";
import sanity from "../../assets/img/sanity.png";

const Expertise = () => {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My Expertise
          </h2>
          <div className="flex flex-wrap items-center justify-around pt-4 sm:pt-4">
            <span className="m-8 block">
              <Image
                src={react}
                alt="client logo"
                className="mx-auto block h-auto w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                src={next}
                alt="client logo"
                className="mx-auto block h-auto w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                src={node}
                alt="client logo"
                className="mx-auto block h-auto w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                src={mongo}
                alt="client logo"
                className="mx-auto block h-14 w-auto"
              />
            </span>
            <span className="m-8 block">
              <Image
                src={sanity}
                alt="client logo"
                className="mx-auto block h-20 w-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
