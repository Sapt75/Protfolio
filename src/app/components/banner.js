import React from "react";
import Link from "next/link";
import Image from "next/image";
import author from "../../assets/img/blog-author.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Banner = () => {
  return (
    <div className="relative hero bg-cover bg-center bg-no-repeat py-8">
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat" />
      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <Image
              src={author}
              className="sm:w-60 w-52 h-48 object-cover object-left rounded-full sm:h-56"
              alt="author"
            />
          </div>

          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              Hello I&apos;m Saptarshi Nag!
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">
                  Let&apos;s connect
                </p>
                <div className="hidden sm:block">
                  <ChevronRightIcon className="text-yellow" />
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link href="https://www.facebook.com/share/1BeNyQR36n/?mibextid=wwXIfr" target="_blank">
                  <FacebookIcon className="hover:text-yellow text-white" />
                </Link>
                <Link href="https://x.com/SaptarshiNag7" target="_blank" className="pl-4">
                  <TwitterIcon className="hover:text-yellow text-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/saptarshi-nag-132803234" target="_blank" className="pl-4">
                  <LinkedInIcon className="hover:text-yellow text-white" />
                </Link>
                <Link href="https://www.instagram.com/nexus_supernova/profilecard/?igsh=a2xsYmdxMTh4NG8x" target="_blank" className="pl-4">
                  <InstagramIcon className="hover:text-yellow text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
