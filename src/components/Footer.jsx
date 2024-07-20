import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

import { footerData } from "../data";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      // External link
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Internal link
      navigate(link);
    }
  };

  return (
    <footer className="mx-auto mt-4 flex w-full select-none flex-col items-center justify-center gap-2 rounded-t-3xl bg-gray-300 px-4 py-2 text-black shadow-inner md:flex-row md:px-2">
      <div className="flex w-full flex-col justify-between gap-2 self-stretch">
        {/* Logo Container */}
        <div className="flex h-full max-h-36 items-center justify-start p-4">
          <span
            onClick={() => handleNavigate(footerData.LOGO_DATA.redirectURL)}
            className="cursor-pointer select-none"
          >
            <img
              src={footerData.LOGO_DATA.logo}
              alt="VebCraft Logo"
              className="-ml-5 size-28 object-cover md:size-36"
            />
          </span>
          <span
            onClick={() => handleNavigate(footerData.LOGO_DATA.redirectURL)}
            className="cursor-pointer select-none"
          >
            <h3 className="text-2xl font-bold">{footerData.LOGO_DATA.name}</h3>
          </span>
        </div>
        {/* Social Container */}
        <div className="flex items-end justify-between p-4 md:justify-start md:gap-10">
          <SocialLink
            Icon={SiFacebook}
            href={footerData.SOCIAL_MEDIA_LINKS.facebook}
          />
          <SocialLink
            Icon={SiInstagram}
            href={footerData.SOCIAL_MEDIA_LINKS.instagram}
          />
          <SocialLink
            Icon={SiTwitter}
            href={footerData.SOCIAL_MEDIA_LINKS.twitter}
          />
          <SocialLink
            Icon={SiLinkedin}
            href={footerData.SOCIAL_MEDIA_LINKS.linkedin}
          />
          <SocialLink
            Icon={SiGithub}
            href={footerData.SOCIAL_MEDIA_LINKS.github}
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-2">
        {/* Additional Link Container */}
        <div className="flex flex-row flex-wrap justify-between gap-2 p-4">
          {footerData.ADDITIONAL_LINKS.map((section, index) => (
            <div
              key={index}
              className="flex flex-col justify-center font-medium md:p-2"
            >
              <h4 className="cursor-default text-xl underline">
                {section.heading}
              </h4>
              {section.links.map((link, index) => (
                <span
                  key={index}
                  onClick={() => handleNavigate(link.url)}
                  className="cursor-pointer select-none"
                >
                  <h5 className="text-lg">{link.title}</h5>
                </span>
              ))}
            </div>
          ))}
        </div>
        {/* Copyright Container */}
        <div className="flex items-start justify-end p-4">
          <h6 className="font-normal">{footerData.COPYRIGHT_INFO}</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const SocialLink = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-xl md:text-2xl" />
    </a>
  );
};
