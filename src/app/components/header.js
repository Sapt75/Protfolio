"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import iconclose from "../../assets/img/icon-close.svg";

const Header = () => {
  const options = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Expertise",
      href: "#clients",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Statistics",
      href: "#statistics",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // This enables smooth scrolling
        block: "start", // Scroll to the top of the target element
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full z-50 top-0 py-3 sm:py-5 fixed ${
          isScrolled ? "bg-[#5540AF]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/">
            <h1 class="text-white text-2xl font-bold uppercase cursor-pointer">Saptarshi</h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {options.map((item) => {
                return (
                  <li key={item.label} className="group pl-6">
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                    >
                      <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                        {item.label}
                      </span>
                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <Image src={iconclose} className="h-10 w-auto" alt="" />
          </button>
          <ul className="mt-8 flex flex-col">
            {options.map((item) => {
              return (
                <li key={item.label} className="group pl-6">
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      {item.label}
                    </span>
                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
