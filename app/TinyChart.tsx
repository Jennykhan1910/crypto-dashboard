export default function TinyChart() {
  return (
    <div className="w-full lg:w-[738px] h-[173px] rounded-[15px] bg-black overflow-hidden mt-[13px]">

      {/* Top row */}
      <div className="flex justify-between items-center px-[20px] lg:px-[30px] pt-[25px]">
        <span className="text-[21px] text-white font-[600]">
          Live Market
        </span>

        <span className="text-gray-500 text-[10px] font-[600] leading-[22px] px-[10px] py-[5px] border border-gray-500 rounded-[5px]">
          View More
        </span>
      </div>

      {/* Scrollable market area */}
      <div className="overflow-x-auto mt-[14px]">

        {/* Fixed-width table content */}
        <div className="min-w-[700px]">

          {/* Headings */}
          <div className="grid grid-cols-[150px_100px_140px_140px_120px] px-[33px] text-[12px] font-[400] text-gray-500">
            <span>Coin</span>
            <span>Change</span>
            <span>Market Cap</span>
            <span>24h Volume</span>
            <span>Price</span>
          </div>

          {/* Bitcoin */}
          <div className="grid grid-cols-[150px_100px_140px_140px_120px] items-center mt-[4px] px-[21px] text-[14px] font-[500]">

            <div className="flex items-center gap-[8px]">
              <img
                src="bitcoin-(btc).svg"
                className="w-[24px] h-[24px]"
              />

              <span className="text-gray-300">
                Bitcoin
              </span>
            </div>

            <span>+12.00%</span>

            <span>$3.560M</span>

            <span>$65.20M</span>

            <span>$48.032,32</span>

          </div>

        </div>

      </div>

    </div>
  );
}