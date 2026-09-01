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

type CoinState = {
  price: string;
  percent: string;
  isPositive: boolean;
};

export default function Portfolio() {
  const [coins, setCoins] = useState<Record<string, CoinState>>({
    ETHUSDT: { price: "...", percent: "...", isPositive: true },
    BTCUSDT: { price: "...", percent: "...", isPositive: true },
    LTCUSDT: { price: "...", percent: "...", isPositive: false },
    SOLUSDT: { price: "...", percent: "...", isPositive: true },
    BNBUSDT: { price: "...", percent: "...", isPositive: false },
  });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/cards", { cache: "no-store" });
        const data: BinanceData[] = await res.json();

        const newCoins: Record<string, CoinState> = {};

        data.forEach((item) => {
          const p = parseFloat(item.priceChangePercent);
          newCoins[item.symbol] = {
            price: parseFloat(item.lastPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            percent: (p > 0 ? "+" : "") + p.toFixed(2) + "%",
            isPositive: p >= 0,
          };
        });

        setCoins(prev => ({ ...prev, ...newCoins }));
      } catch (e) {
        console.log("error", e);
      }
    };

    fetchPrices();
    const id = setInterval(fetchPrices, 4000);
    return () => clearInterval(id);
  }, []);

  const Item = ({ icon, name, amount, symbol, data }: any) => (
    <div className="absolute left-[31px] right-[30px] flex">
      <img src={icon} className="w-[44px] h-[44px]" />
      <span className={poppins.className + " absolute left-[60px] text-[16px] text-[#FFF] font-[500] leading-normal"}>
        {name}
      </span>
      <span className={poppins.className + " w-[66px] h-[15px] text-gray-400 text-[14px] font-[400] leading-normal absolute top-[29px] left-[60px]"}>
        ${data?.price}
      </span>
      <span
        className={
          poppins.className +
          ` absolute top-0 left-[215px] w-[60px] h-[24px] text-[12px] font-[500] leading-[24px] ${
            data?.isPositive ? "text-[#1ECB4F]" : "text-[#FF4D4D]"
          }`
        }
      >
        {data?.percent}
      </span>
      <span className={poppins.className + " absolute left-[215px] top-[29px] w-[100px] h-[15px] text-[13px] text-[#FFF] font-[400]"}>
        {amount} {symbol}
      </span>
    </div>
  );

  return (
    <div className="w-full flex justify-center lg:justify-center">
      <div className="w-[360px] h-[434px] rounded-[15px] bg-black relative">
        <h2 className={poppins.className + " text-[#E4E4E4] text-[21px] font-[600] leading-normal tracking-[0.63] absolute top-[30px] left-[30px]"}>
          My Portfolio
        </h2>

        <div className="absolute top-[86px] w-full">
          <Item icon="icon.svg" name="Ethereum" amount="1.74" symbol="ETH" data={coins["ETHUSDT"]} />
        </div>

        <div className="absolute top-[154px] w-full">
          <Item icon="icon.png" name="Bitcoin" amount="1.74" symbol="BTC" data={coins["BTCUSDT"]} />
        </div>

        <div className="absolute top-[222px] w-full">
          <Item icon="icon (1).png" name="Litecoin" amount="1.74" symbol="LTC" data={coins["LTCUSDT"]} />
        </div>

        <div className="absolute top-[290px] w-full">
          <Item icon="icon (4).png" name="Solana" amount="37.84" symbol="SOL" data={coins["SOLUSDT"]} />
        </div>

        <div className="absolute top-[358px] w-full">
          <Item icon="icon (6).png" name="Binance Coin" amount="312.4" symbol="BNB" data={coins["BNBUSDT"]} />
        </div>
      </div>
    </div>
  );
}