import React from "react";
import Image from "next/image";
import gorp from "../../assets/img/gorp.png";
import tata from "../../assets/img/tata.png";
import rools from "../../assets/img/rools.png";
import audi from "../../assets/img/audi.png";

const Portfolio = () => {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s what I have done with the past
      </h3>
      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a
          href="https://www.getonroadprice.com"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image src={gorp} className="w-full shadow" alt="portfolio image" />
        </a>
        <a
          href="https://www.getonroadprice.com/new-cars/tata/nexon"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <Image src={tata} className="w-full shadow" alt="portfolio image" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
