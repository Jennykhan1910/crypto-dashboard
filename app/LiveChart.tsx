export default function LiveChart() {
  return (
    <div
      className="
        w-full lg:w-full
        h-[441px]
        rounded-[15px]
        bg-black
        shadow-[4px_4px_33px_rgba(0,0,0,0.05)]
        px-4 lg:pl-[30px]
        pt-[20px] lg:pt-[30px]
        relative
        overflow-hidden
      "
    >

      {/* First row */}
      <div className="flex items-center justify-between pr-2 lg:pr-[34px]">
        <h2 className="text-[#FFF] text-[21px] font-[600]">
          Chart
        </h2>

        <div className="flex items-center gap-2 lg:gap-[15px]">

          <div className="border-[1px] border-gray-500 rounded-[5px] p-[7px]">
            <img src="candle.png" />
          </div>

          <div className="flex items-center gap-2 lg:gap-[10px] border-[1px] border-gray-500 p-[5px] rounded-[5px]">
            <img src="dollar-circle.png" />
            <img src="USD.png" />
            <img
              src="ac.png"
              className="w-[21px] h-[22px]"
            />
          </div>

        </div>
      </div>


      {/* Bitcoin/BTC */}
      <div className="flex mt-[24px] gap-[10px]">
        <span className="text-[14px] font-[400] text-gray-500">
          Bitcoin/BTC
        </span>

        <img src="ac.png" />
      </div>


      {/* Price */}
      <span className="text-[18px] font-[600] leading-normal">
        $35,352.07
      </span>


      {/* Time buttons */}
      <div className="flex items-center gap-2 lg:gap-[15px] justify-end mt-[-25px] mr-0 lg:mr-[24px]">

        

        <span className="rounded-[15px] border-[1px] px-3 lg:px-[15px] border-gray-500 text-gray-500">
          1d
        </span>

        <span className="rounded-[15px] border-[1px] px-3 lg:px-[15px] border-gray-500 text-gray-500">
          1w
        </span>

        <span className="rounded-[15px] border-[1px] px-3 lg:px-[15px] border-gray-500 text-gray-500">
          1m
        </span>

      </div>


      {/* Number list */}
      <div className="flex flex-col gap-[33px] mt-[18px]">
        <span className="text-[12px] text-gray-500">50.000</span>
        <span className="text-[12px] text-gray-500">40.000</span>
        <span className="text-[12px] text-gray-500">30.000</span>
        <span className="text-[12px] text-gray-500">20.000</span>
        <span className="text-[12px] text-gray-500">10.000</span>
      </div>


      {/* Crypto Chart */}
      <img
        src="Whats.jpeg"
        className="
          absolute
          top-[188px]
          left-[60px]
          w-[calc(100%-80px)]
          h-[188px]
          object-fill
          lg:left-auto
          lg:right-[28px]
          lg:w-[628px]
        "
      />


      {/* Bottom row */}
      <div className="flex justify-between mx-[40px] lg:gap-[75px] lg:justify-start lg:ml-[59px] mt-[15px] text-[12px] font-[400] leading-[16px] text-gray-500">
        <span>19.00</span>
        <span>19.10</span>
        <span>19.20</span>
        <span>19.30</span>
        <span>19.40</span>
       
      </div>

    </div>
  );
}