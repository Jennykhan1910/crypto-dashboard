"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Bitcoin() {
  const price = "64,579.0";
  const percentage = "+1.12%";
  const isPositive = true;

  return (
    <div className="w-[258px] lg:w-[258px] h-[178px] rounded-[15px] bg-black relative overflow-hidden">
      <div className="flex items-start pt-[23px] px-[19px]">
        <img src="/icon.png" alt="BTC" />
        <div className="ml-[19px] flex flex-col">
          <span className={poppins.className + " text-[#FFF] text-[16px] font-[600]"}>Bitcoin</span>
          <span className={poppins.className + " text-[#FFF] text-[12px] font-[400]"}>BTC</span>
        </div>
        <img src={isPositive? "/arrow-up.png" : "/arrow-down.png"} className="ml-auto mt-[10px] w-[14px] h-[14px]" alt="trend" />
      </div>

      <div className="ml-[20px] mt-[20px]">
        <span className={poppins.className + " text-[#FFF] text-[21px] font-[600] tracking-[0.42px]"}>
          ${price}
        </span>
      </div>

      <div className="ml-[20px] mt-[12px]">
        <span className={poppins.className + ` text-[14px] font-[600] tracking-[0.28px] ${isPositive? "text-[#00FF99]" : "text-[#FF4D4D]"}`}>
          {percentage}
        </span>
      </div>

      <div className="absolute right-[20px] top-[100px] w-[111px] h-[46.5px]">
        <img src="/graph.png" className="w-full h-full" alt="graph" />
      </div>
    </div>
  );
}