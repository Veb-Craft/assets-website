import React from "react";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

import { footerData } from "../data";

const Footer = () => {
  return (
    <footer className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-2 px-4 py-2 md:flex-row md:px-2">
      <div className="flex w-full flex-col justify-between gap-2 self-stretch">
        {/* Logo Container */}
        <div className="flex h-full items-center justify-start p-4">
          VebCraft
        </div>
        {/* Social Container */}
        <div className="flex items-end justify-start gap-4 p-4">
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
                <a
                  href={link.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="text-lg">{link.title}</h5>
                </a>
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
