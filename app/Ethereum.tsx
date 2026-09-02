"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Ethereum() {
  const price = "2,521.4";
  const percentage = "-2.34%";
  const isPositive = false;

  return (
    <div className="w-[258px] lg:w-[258px] h-[178px] rounded-[15px] bg-black relative overflow-hidden">
      <div className="flex items-start pt-[23px] px-[19px]">
        <div className="relative w-[44px] h-[44px] shrink-0">
          <img src="icon (3).png" className="absolute inset-0 w-full h-full" />
          <img src="ethereum-(eth).png" className="absolute inset-0 m-auto w-[24px] h-[24px]" />
        </div>
        <div className="ml-[19px] flex flex-col">
          <span className={poppins.className + " text-[#FFF] text-[16px] font-[600]"}>Ethereum</span>
          <span className={poppins.className + " text-[#FFF] text-[12px] font-[400]"}>ETH</span>
        </div>
        <img src={isPositive? "arrow-up.png" : "arrow-down (1).png"} className="ml-auto mt-[10px] w-[14px] h-[14px]" />
      </div>

      <div className="ml-[20px] mt-[20px]">
        <span className={poppins.className + " text-[#FFF] text-[21px] font-[600] tracking-[0.42px]"}>
          ${price}
        </span>
      </div>

      <div className="ml-[20px] mt-[12px]">
        <span className={poppins.className + ` text-[14px] font-[600] tracking-[0.28px] ${isPositive? "text-[#1ECB4F]" : "text-[#FF4D4D]"}`}>
          {percentage}
        </span>
      </div>

      <div className="absolute right-[20px] top-[100px] w-[111px] h-[46.5px]">
        <img src="graph.png" className="w-full h-full" />
      </div>
    </div>
  );
}