import Wrapper from "@/shared/Wrapper";
import React from "react";
import Logo from "../Header/logo";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

const socialIcons = [
  { icon: <BsYoutube />, label: "YouTube" },
  { icon: <BsGithub />, label: "GitHub" },
  { icon: <BsLinkedin />, label: "LinkedIn" },
  { icon: <BsFacebook />, label: "Facebook" },
  { icon: <BsTwitter />, label: "Twitter" },
];

const latestPostData = [
  { title: "Where Music Is Headed Next", date: "24-February-2015" },
  { title: "Sports Brand New Advertising Campaign", date: "1-April-2016" },
  { title: "Snippets From The Tech Mobile Conference", date: "30-June-2019" },
  { title: "New Music Video Will Blow Your Minds", date: "29-December-2022" },
];

const Links = ["Home", "About", "Cart", "NewsLetter", "Contact"];

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Wrapper>
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4 md:items-start">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              reiciendis similique doloribus voluptate harum quis unde nihil,
              odit eum quae expedita. Laborum rem vel, nihil assumenda
              voluptatum praesentium pariatur quis.
            </p>
            <div className="flex gap-2">
              {socialIcons.map(({ icon }, index) => (
                <span
                  key={index}
                  className="bg-slate-100 text-darkText p-1.5 rounded-full flex items-center justify-center text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-300"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Latest Posts</p>
            <ul className="mt-4 space-y-3">
              {latestPostData.map((item, index) => (
                <li
                  key={index}
                  className="text-slate-50 hover:text-orange-600 duration-300 cursor-pointer flex flex-col gap-1"
                >
                  {item.title}
                  <span className="text-orange-600 text-sm">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Links</p>
            <ul className="mt-2 flex flex-col gap-2 font-semibold">
              {Links.map((item, index) => (
                <li
                  key={index}
                  className="text-slate-50 hover:text-orange-600 duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;