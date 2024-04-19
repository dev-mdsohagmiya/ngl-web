"use client";
import Logo from "../../assets/site-logo.png";
import Logo1 from "../../assets/site-logo1.png";
import Sun from "../../assets/sun-icon.svg";
import Moon from "../../assets/moon.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ButtonC from "../components/Button";
import { useState } from "react";

const linkData = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Legal", href: "/legal" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="py-5 md:py-6 px-[5.1%] ">
      <div className="flex justify-between items-center">
        <div>
          <div className="w-[70px] md:w-[100px] h-auto">
            <Link href={"/"}>
              {" "}
              <Image src={Logo} className="w-full h-full select-none" alt="" />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5 items-center">
            {linkData.map((item, index) => (
              <div key={index}>
                <Link className="" href={item.href}>
                  <ButtonC text={item.name} />
                </Link>
              </div>
            ))}
            <div className="w-[40px] h-[40px] rounded-[50%] bg-primary flex items-center justify-center cursor-pointer">
              <Image src={Sun} alt="" className="w-[70%] h-[70%]" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-6">
          <div className="w-[40px] h-[40px] rounded-[50%] bg-primary flex items-center justify-center cursor-pointer">
            <Image src={Sun} alt="" className="w-[70%] h-[70%]" />
          </div>
          <div
            className="relative w-[30px] h-[30px] flex flex-col items-center justify-center bg-transparent group  translate-y-1"
            onClick={handleToggle}
          >
            <span
              className={` w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-[45deg] translate-y-[2px]" : ""
              }`}
            ></span>
            <span
              className={`w-full h-[3px] bg-white rounded-full transition-all duration-300 ease-in-out  ${
                isOpen ? "rotate-[-45deg] -translate-y-2" : ""
              } mt-2`}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={`transition ease-in-out duration-200  grid gap-2  absolute z-50 top-24 right-[5.1%] ${
          !isOpen ? "translate-x-[150%]" : "translate-x-[0%]"
        }`}
      >
        {linkData.map((item, index) => (
          <div key={index}>
            <Link className="" href={item.href}>
              <ButtonC text={item.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
