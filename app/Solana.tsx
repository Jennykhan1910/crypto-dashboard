"use client";

import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type BinanceData = {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
};

export default function Solana() {
  const [price, setPrice] = useState("...");
  const [percentage, setPercentage] = useState("...");
  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch("/api/cards", { cache: "no-store" });
        const data: BinanceData[] = await res.json();

        const sol = data.find((x) => x.symbol === "SOLUSDT");

        if (sol) {
          setPrice(parseFloat(sol.lastPrice).toLocaleString());

          const p = parseFloat(sol.priceChangePercent);
          setIsPositive(p >= 0);

          const sign = p > 0? "+" : "";
          setPercentage(sign + p.toFixed(2) + "%");
        }
      } catch (e) {
        console.log("error", e);
      }
    };

    fetchPrice();
    const id = setInterval(fetchPrice, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-[258px] h-[178px] rounded-[15px] bg-black relative overflow-hidden">

      <div className="flex items-start pt-[23px] px-[19px]">
        <img src="icon (4).png" />
        <div className="ml-[19px] flex flex-col">
          <span className={poppins.className + " text-[#FFF] text-[16px] font-[600] leading-normal"}>
            Solana
          </span>
          <span className={poppins.className + " text-[#FFF] text-[12px] font-[400] leading-normal"}>
            SOL
          </span>
        </div>
        <img
          src={isPositive? "arrow-up.png" : "arrow-down (1).png"}
          className="ml-auto mt-[10px] w-[14px] h-[14px]"
        />
      </div>

      <div className="ml-[20px] mt-[20px]">
        <span className={poppins.className + " text-[#FFF] text-[21px] font-[600] leading-normal tracking-[0.42px]"}>
          ${price}
        </span>
      </div>

      <div className="ml-[20px] mt-[12px]">
        <span
          className={
            poppins.className +
            ` text-[14px] font-[600] leading-[22.452px] tracking-[0.28px] ${
              isPositive? "text-[#1ECB4F]" : "text-[#cf390b]"
            }`
          }
        >
          {percentage}
        </span>
      </div>

      <div className="absolute right-[20px] top-[100px] w-[111px] h-[46.5px]">
        <img src="graph (2).png" className="w-full h-full" />
      </div>

    </div>
  );
}