"use client";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Item = ({ icon, name, amount, symbol, price, percent, isPositive }: any) => (
  <div className="absolute left-[31px] right-[30px] flex">
    <img src={icon} className="w-[44px] h-[44px]" />
    <span className={poppins.className + " absolute left-[60px] text-[16px] text-[#FFF] font-[500]"}>{name}</span>
    <span className={poppins.className + " absolute top-[29px] left-[60px] text-gray-400 text-[14px]"}>
      {price}
    </span>
    <span className={poppins.className + ` absolute top-0 left-[215px] text-[12px] font-[500] ${isPositive? "text-[#1ECB4F]" : "text-[#FF4D4D]"}`}>
      {percent}
    </span>
    <span className={poppins.className + " absolute left-[215px] top-[29px] text-[13px] text-[#FFF]"}>
      {amount} {symbol}
    </span>
  </div>
);

export default function Portfolio() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[360px] h-[434px] rounded-[15px] bg-black relative">
        <h2 className={poppins.className + " absolute top-[30px] left-[30px] text-[21px] text-[#E4E4E4] font-[600]"}>My Portfolio</h2>

        <div className="absolute top-[86px] w-full">
          <Item icon="icon.svg" name="Ethereum" amount="1.74" symbol="ETH" price="$6,127.32" percent="+2.34%" isPositive={true} />
        </div>

        <div className="absolute top-[154px] w-full">
          <Item icon="icon.png" name="Bitcoin" amount="1.74" symbol="BTC" price="$112,367.46" percent="+1.12%" isPositive={true} />
        </div>

        <div className="absolute top-[222px] w-full">
          <Item icon="icon (1).png" name="Litecoin" amount="70" symbol="LTC" price="$146.36" percent="-0.45%" isPositive={false} />
        </div>

        <div className="absolute top-[290px] w-full">
          <Item icon="icon (4).png" name="Solana" amount="3.7" symbol="SOL" price="$5,406.58" percent="+5.21%" isPositive={true} />
        </div>

        <div className="absolute top-[358px] w-full">
          <Item icon="icon (6).png" name="Binance Coin" amount="47" symbol="BNB" price="$187,824.25" percent="-0.82%" isPositive={false} />
        </div>
      </div>
    </div>
  );
}