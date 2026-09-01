import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Sidebar() {
  return (
    <aside className="w-[214px] bg-black flex flex-col rounded-[7px] min-h-[700px] lg:h-full">
      <div className="flex items-center gap-2 pt-8 px-8">
        <img src="image.svg" className="w-[36px] h-[20px]" alt="" />
        <img src="Logoipsm.png" alt="" />
      </div>

      <ul className="flex flex-col gap-8 mt-12 px-7 flex-1">
        <li className="w-full h-[50px] rounded-[10px] bg-[#3A6FF8] flex items-center px-4 gap-5">
          <img src="element-3.png" alt="" />
          <img src="Overview.png" alt="" />
        </li>
        <li className="flex items-center gap-5 px-3 text-[#9E9E9E] text-[17px]">
          <img src="graph.svg" className="w-6 h-6" alt="" />
          <span className={poppins.className}>Chart</span>
        </li>
        <li className="flex items-center gap-5 px-3 text-[#9E9E9E] text-[17px]">
          <img src="wallet-2.png" alt="" />
          <span className={poppins.className}>Transactions</span>
        </li>
        <li className="flex items-center gap-5 px-3 text-[#9E9E9E] text-[17px]">
          <img src="wallet-minus.png" alt="" />
          <span className={poppins.className}>Wallet</span>
        </li>
        <li className="flex items-center gap-5 px-3 text-[#9E9E9E] text-[17px]">
          <img src="message-text.png" alt="" />
          <span className={poppins.className}>News</span>
        </li>
        <li className="flex items-center gap-5 px-3 text-[#9E9E9E] text-[17px]">
          <img src="sms.png" alt="" />
          <span className={poppins.className}>Mail Box</span>
        </li>
      </ul>

      <div className="px-10 pb-6 flex flex-col gap-8 mt-12">
        <div className="flex items-center gap-5 text-[#9E9E9E] text-[17px]">
          <img src="setting-2.png" alt="" />
          <span className={poppins.className}>Settings</span>
        </div>
        <div className="flex items-center gap-5 text-[#9E9E9E] text-[17px]">
          <img src="logout.png" alt="" />
          <span className={poppins.className}>Logout</span>
        </div>
      </div>
    </aside>
  );
}