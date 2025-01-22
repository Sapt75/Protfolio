import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright {date}. All right reserved, Saptarshi.
        </p>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
          <Link
            href="https://www.facebook.com/share/1BeNyQR36n/?mibextid=wwXIfr"
            target="_blank"
          >
            <FacebookIcon className="hover:text-yellow text-white" />
          </Link>
          <Link
            href="https://x.com/SaptarshiNag7"
            target="_blank"
            className="pl-4"
          >
            <TwitterIcon className="hover:text-yellow text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/saptarshi-nag-132803234"
            target="_blank"
            className="pl-4"
          >
            <LinkedInIcon className="hover:text-yellow text-white" />
          </Link>
          <Link
            href="https://www.instagram.com/nexus_supernova/profilecard/?igsh=a2xsYmdxMTh4NG8x"
            target="_blank"
            className="pl-4"
          >
            <InstagramIcon className="hover:text-yellow text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
