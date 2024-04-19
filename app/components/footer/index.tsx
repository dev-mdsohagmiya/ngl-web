import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/site-logo.png";

const Footer = () => {
  return (
    <div>
      {/* news letter */}
      <section className="relative w-full h-auto pt-[25px] md:mt-[40px] text-white">
        <div className="relative w-[90%] ml-[5%] h-auto">
          <div className="relative w-full h-auto py-[20px] flex items-center gap-5">
            <h3 className="inline-flex items-center text-[18px] font-medium">
              Subscribe{" "}
              <span className="text-[12px] font-light ml-[10px] opacity-80">
                Newsletter
              </span>
            </h3>
            <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
          </div>

          {/* subscribe_Input */}
          <div className="relative w-full h-[60px] mt-[20px] rounded-[50px] flex items-center overflow-hidden gap-[15px] custom-gradient">
            <input
              type="text"
              name=""
              placeholder="   Enter email for Newsletter"
              className="relative w-full h-full bg-transparent border-none text-white px-[20px] placeholder:text-[#FFFFFF] placeholder:opacity-60 focus:outline-none"
            />
            <button className="relative w-auto h-3/4 mr-[15px] bg-[#fff] text-[#000] rounded-[30px] px-[30px] text-[17px] font-medium">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* main footer */}
      <footer className="relative h-auto w-full py-[30px] text-white">
        <div className="relative h-auto w-[90%] ml-[5%]">
          <div className="relative w-full h-auto p-[50px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#36363C] flex flex-col items-center justify-center">
            <div className="relative max-w-[800px] h-auto text-center">
              <span className="uppercase tracking-[2px]">
                Suspendisse urna nibh viverra.
              </span>
              <h2 className="text-[32px] md:text-[64px] my-[20px] font-bold abhaya_libre_font">
                LET&apos;S BUILD SOMETHING AMAZING TOGETHER
              </h2>
              <p className="text-[17px] font-[100] lg:text-[20px] text-[#fff] text-opacity-70">
                We believe in forging enduring partnerships and driving positive
                change through our expertise and passion for service excellence.
              </p>
              <Link
                href="#"
                className="relative inline-flex items-center justify-center text-center px-[30px] py-[15px] bg-[#fff] text-[#000] rounded-[30px] text-[17px] font-medium mt-[30px] border border-[#1A1A1A]"
              >
                Contact Us
              </Link>
            </div>

            <div className="relative w-full h-auto mt-[30px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-[15px] md:gap-[10px] py-5 border-b border-solid border-[#36363C]">
              <Image src={Logo} width={100} height={100} alt="Site Logo" />
              <div className="relative text-center">
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href="#"
                  className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>

            <div className="relative w-full h-auto mt-[40px] flex flex-col md:flex-row-reverse items-center justify-center md:justify-between gap-[15px] md:gap-[10px]">
              <ul className="relative inline-flex items-center gap-[20px] text-[15px]">
                <li>
                  <Link
                    href="/legal"
                    className="transition-all duration-300 ease-in-out hover:opacity-60"
                  >
                    Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="transition-all duration-300 ease-in-out hover:opacity-60"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <p className="text-[15px]">© 2024 AGL</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
