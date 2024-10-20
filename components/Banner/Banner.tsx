"use client";
import Slider from "react-slick";
import BannerOneImage from "@/images/BannerOne.png";
import BannerTwo from "@/images/BannerTwo.png";
import BannerThree from "@/images/BannerThree.png";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props: { onClick?: () => void }) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative z-0">
      <Slider {...settings}>
        <div className="w-full h-[520px] relative">
          <Image src={BannerOneImage} alt="BannerOneImage" className=" w-full h-full" placeholder="blur"/>
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-full h-[520px] relative">
          <Image src={BannerTwo} alt="BannerTwo" className="w-full h-full" placeholder="blur" />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="w-full h-[520px] relative">
          <Image src={BannerThree} alt="BannerThree" className="w-full h-full" placeholder="blur"/>
          <BannerText title="Best for men" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;