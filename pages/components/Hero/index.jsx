import { BsMouse2Fill, BsFillCaretDownFill } from "react-icons/bs";
import Arka from "../../../src/assets/Arkaa.png";
import Image from "next/image";
import Triangle from "../../../src/assets/VectorFullTriangle.png";
import Plus from "../../../src/assets/Plus.png";

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] pt-[30%] md:pt-[100px] relative">
      <div className="w-full max-w-[1800px] flex flex-col-reverse md:flex-row gap-y-20 justify-between md:justify-around">
        <div className="mx-auto max-w-[600px]">
          <div className="px-12 md:px-0">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[24px] md:text-[48px] md:leading-[48px] text-white">
              Hello!
            </h2>
            <h2 className="font-Montserrat font-bold text-[24px] leading-[24px] md:text-[48px] md:leading-[48px] text-white">
              My name is
            </h2>
            <h2 className="font-Montserrat font-bold text-[24px] leading-[24px] md:text-[48px] md:leading-[48px] text-greenlight">
              Arkananta F. Ariza
            </h2>
            <h3 className="font-Montserrat font-normal text-[12px] leading-[15px] md:leading-[20px] md:text-[16px] text-white mt-4 md:mt-8">
              I’m an undergraduate student of electrical engineering at
              University of Gadjah Mada that has deep interest in learning about
              technology , business and 4.0 industries. One of the most i
              interest is in web development.
            </h3>
            <a
              href="#skills"
              className="flex flex-col items-center mt-[5%] md:mt-[100px]"
            >
              <span className="text-[21px]">
                <BsMouse2Fill />
              </span>
              <p className="font-CoralColour text-[12px] mt-3">SCROLL DOWN</p>
              <span className="text-[20px] mt-6 animate-bounce">
                <BsFillCaretDownFill />
              </span>
            </a>
          </div>
        </div>
        <div className="mx-0 relative sm:mt-[20%] lg:mt-0">
          <Image
            src={Arka}
            className="relative max-w-screen aspect-[293/303] -mt-40 mx-auto"
          />
        </div>
      </div>
      <Image
        src={Triangle}
        className="absolute -left-[20px] bottom-[10px] md:ml-0 w-[70px] md:w-[120px] z-1"
      />
      <Image
        src={Plus}
        className="absolute bottom-0 md:bottom-[-10%] -right-[10px] md:right-[40px] mr-[40px] md:mr-0 w-[70px] md:w-[120px]"
      />
    </div>
  );
}
