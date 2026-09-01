import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Header() {
  return (
    <header
      className={`${poppins.className} w-full h-[70px] lg:h-[100px] bg-[#31353F] flex flex-nowrap items-center px-3 lg:px-0 overflow-hidden`}
    >
      {/* Dashboard */}
      <h1 className="text-white text-[20px] lg:text-[32px] font-normal whitespace-nowrap shrink-0 lg:ml-[26px]">
        Dashboard
      </h1>

      {/* Search */}
      <div className="relative flex-1 min-w-0 ml-3 md:ml-6 lg:ml-[106px]">
        <img
          src="search-normal.png"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[40px] lg:h-[44px] rounded-[8px] bg-[#182028] pl-3 pr-9 text-[12px] lg:text-[14px] outline-none"
        />
      </div>

      {/* Notification */}
      <button className="h-[40px] w-[40px] lg:h-[44px] lg:w-[44px] rounded-[8px] bg-[#182028] ml-2 md:ml-6 lg:ml-[102px] shrink-0">
        <img
          src="Notification.png"
          className="p-[9px] lg:p-[10px]"
        />
      </button>

      {/* Profile */}
      <button className="flex items-center shrink-0 ml-2 md:ml-4 lg:ml-[30px] gap-1 lg:gap-[15px]">
        <img
          src="emma.jpeg"
          className="h-[36px] w-[36px] lg:h-[44px] lg:w-[44px] rounded-[10px]"
        />

        <span className="hidden sm:block text-white text-[14px] whitespace-nowrap">
          Sadia Khalid
        </span>

        <img
          src="ac.png"
          className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
        />
      </button>
    </header>
  );
}