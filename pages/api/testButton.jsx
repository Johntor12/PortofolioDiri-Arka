import { twMerge } from "tailwind-merge";

export default function GlowBlue({ customClass }) {
  //? Class default bisa dioverride pake customClass
  return (
    <div
      className={twMerge(
        "absolute aspect-square bg-blue-100 rounded-full blur-[50px] w-[100px] " +
          customClass
      )}
    ></div>
  );
}
