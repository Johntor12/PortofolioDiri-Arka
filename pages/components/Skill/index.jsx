import Image from "next/image";
import Circle from "../../../src/assets/Circle.png";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full h-full relative mx-auto pt-[82px] pb-[148px] lg:pb-[155px]"
    >
      <Image
        src={Circle}
        className="absolute bottom-[20%] md:bottom-[10%] -left-[40px] md:left-[25px] w-[90px] md:w-[190px]"
      />
      <div className="mx-auto relative md:container px-5 md:px-10">
        <h1 className="text-[24px] md:text-[40px] lg:text-[48px] font-Montserrat text-white text-center font-bold underline decoration-greenlight mb-[31px] md:mb-[52px]">
          Skills
        </h1>
        <div className="max-w-[1200px] h-[360px] mx-auto">
          <div className="h-full">
            <div className="h-full flex flex-wrap gap-11 px-[50px] py-[36px] justify-center gap-x-[84px]">
              <div className="flex flex-col max-w-[600px] text-center gap-y-4">
                <div className="flex">
                  <h1 className="font-Poppins font-bold text-[28px] leading-[28px] text-greenlight">
                    Program
                  </h1>
                  <h1 className="font-Poppins font-bold text-[28px] leading-[28px]">
                    ming
                  </h1>
                </div>
                <div className="w-full bg-[#1E1F21] h-fit rounded-[14px] items-center p-8">
                  <ul className="list-disc">
                    <li className="font-Montserrat font-medium text-[12px] leading-[15px] md:text-[18px] md:leading-[22px]">
                      HTML, CSS, JavaScript
                    </li>
                    <li className="font-Montserrat font-medium text-[12px] leading-[15px] md:text-[18px] md:leading-[22px]">
                      C++
                    </li>
                    <li className="font-Montserrat font-medium text-[12px] leading-[15px] md:text-[18px] md:leading-[22px]">
                      React.js
                    </li>
                    <li className="font-Montserrat font-medium text-[12px] leading-[15px] md:text-[18px] md:leading-[22px]">
                      Node.js
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col max-w-[600px] text-center gap-y-4">
                <div className="flex gap-x-2">
                  <h1 className="font-Poppins font-bold text-[28px] leading-[28px] text-greenlight">
                    Public
                  </h1>
                  <h1 className="font-Poppins font-bold text-[28px] leading-[28px]">
                    Speaking
                  </h1>
                </div>
                <div className="max-w-[280px] bg-[#1E1F21] h- rounded-[14px] justify-center items-center p-8 text-center">
                  <h1 className="font-Montserrat text-[18px] leading-[28px] ">
                    Though i'm not a social butterfly, i also enjoy when i talk
                    to many people.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
