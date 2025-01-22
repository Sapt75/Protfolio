import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m Saptarshi Nag, a Web Designer &amp; Developer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            I am a web developer and designer based in Kolkata, West Bengal,
            India. My expertise spans various aspects of web development,
            including backend programming (with technologies such as Node.js,
            Express, MongoDB, and Sanity) as well as frontend engineering
            (utilizing HTML, CSS, JavaScript/jQuery, React, Next.js, and UI
            frameworks like Tailwind CSS and Bootstrap). I also have experience
            working with platforms such as WordPress and Shopify. Additionally,
            I have a strong focus on digital accessibility, user experience, and
            visual design. <br />I am deeply passionate about web development
            and design in all its facets and strive to expand my knowledge and
            skills on a daily basis. Outside of my professional work, I enjoy
            spending time with friends, capturing moments through photography,
            and engaging in sports—particularly football, cricket, and mixed
            martial arts.
          </p>
          <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <ChevronRightIcon className="text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <Link href="https://www.facebook.com/share/1BeNyQR36n/?mibextid=wwXIfr" target="_blank">
                <FacebookIcon className="hover:text-yellow text-primary" />
              </Link>
              <Link href="https://x.com/SaptarshiNag7" target="_blank" className="pl-4">
                <TwitterIcon className="hover:text-yellow text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/saptarshi-nag-132803234" target="_blank" className="pl-4">
                <LinkedInIcon className="hover:text-yellow text-primary" />
              </Link>
              <Link href="https://www.instagram.com/nexus_supernova/profilecard/?igsh=a2xsYmdxMTh4NG8x" target="_blank" className="pl-4">
                <InstagramIcon className="hover:text-yellow text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML &amp; CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "90%" }}
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                React
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "85%" }}
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Javascript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Node JS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">80%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
