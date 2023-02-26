export default function Experien() {
  return (
    <div className="flex justify-center min-h-[100vh] pt-[30%] md:pt-[100px] relative mt-[100px]">
      <div className="flex flex-col w-[70%] max-w-[1500px] gap-y-8">
        <h1 className="font-Montserrat font-bold text-[20px] leading-[48px] md:text-[40px] underline decoration-greenlight text-center">
          My Recent Experience
        </h1>
        <div className="w-full bg-[#1E1F21] h-fit p-8 md:p-12 rounded-[10px] mt-8">
          <div className="flex flex-col font-Montserrat text-start">
            <h1 className="font-Montserrat text-[18px] md:text-[28px] leading-[28px]">
              Find IT 2023
            </h1>
            <h3 className="font-Montserrat text-greenlight text-[12px] md:text-[16px]">
              Front-end web developer | November 2022-Present
            </h3>
            <h2 className="font-Montserrat leading-[15px] text-[12px] md:text-[18px] leading-[15px] md:leading-[22px]">
              Being a Front-end web developer in my department competition. In
              this event we use React.js library, especially Next.Js as the
              framework
            </h2>
          </div>
        </div>
        <div className="w-full bg-[#1E1F21] h-fit p-8 md:p-12 rounded-[10px]">
          <div className="flex flex-col font-Montserrat text-start">
            <h1 className="font-Montserrat text-[18px] md:text-[28px] leading-[28px]">
              Ekspedisi Gadjah by Gadjah Lampung
            </h1>
            <h3 className="font-Montserrat text-greenlight text-[12px] md:text-[16px]">
              Speaker | December 2022-January 2023
            </h3>
            <h2 className="font-Montserrat leading-[15px] text-[12px] md:text-[18px] leading-[15px] md:leading-[22px]">
              Become the speaker and promotor about about college to many senior
              highschool in my hometown(Lampung). Also be a staff at the main
              event Ekspedisi Gadjah 2023
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
