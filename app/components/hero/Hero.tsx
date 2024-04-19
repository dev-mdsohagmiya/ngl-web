// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faFacebook,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons"; // Import the clock icon
import { faClock } from "@fortawesome/free-solid-svg-icons";

import PartCardImg001 from "../../assets/Patd-Card/001.jpg";
import PartCardImg1 from "@/public/Patd-Card/1.jpg";
import PartCardImg2 from "@/public/Patd-Card/2.jpg";
import PartCardImg3 from "@/public/Patd-Card/3.jpg";
import PartCardImg4 from "@/public/Patd-Card/4.jpg";
import PartCardImg5 from "../../assets/Patd-Card/5.jpg";
import PartCardImg6 from "../../assets/Patd-Card/6.jpg";
import PartCardImg7 from "../../assets/Patd-Card/7.jpg";
import PartCardImg8 from "../../assets/Patd-Card/8.jpg";

import GalCardImg1 from "../../assets/Gal_Card/1.jpg";
import GalCardImg2 from "../../assets/Gal_Card/2.jpg";
import GalCardImg3 from "../../assets/Gal_Card/3.jpg";
import GalCardImg4 from "../../assets/Gal_Card/4.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainCard from "./MainCard";
import BlogMainSubCard from "./BlogMainSubCard";

function Hero() {
  const mainData = [];
  const data = [
    {
      topic: "AUTO",
      title:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg1,
    },
    {
      topic: "AI",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg2,
    },
    {
      topic: "Technology",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg3,
    },
    {
      topic: "Business",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg4,
    },
  ];
  return (
    <div className="bg-primarybg  py-10">
      <div className="px-[5.1%]">
        <div className="">
          <h1 className="font-[700] text-[30px] lg:text-[60px] pb-10 text-white">
            Blog
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-7 sm:gap-8">
          <div className="col-span-12 lg:col-span-5">
            <MainCard
              src={PartCardImg001}
              name="Technology"
              dsc="Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci."
              date="18/03/2024"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-7 sm:gap-8 ">
              {data.map((item, index) => (
                <div className="col-span-12 sm:col-span-6" key={index}>
                  <BlogMainSubCard
                    href={"/main-blog"}
                    src={item.src}
                    title={item.title}
                    topic={item.topic}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
