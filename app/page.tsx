import Sidebar from "./Sidebar"
import Header from "./Header"
import Bitcoin from "./Bitcoin";
import Litecoin from "./Litecoin";
import Ethereum from "./Ethereum";
import Solana from "./Solana";
import Credit from "./Credit";
import Portfolio from "./Portfolio";
import LiveChart from "./LiveChart";
import TinyChart from "./TinyChart";
export default function Page() {
    return(
        <>
       
      <div className="flex min-h-screen w-full bg-[#13161c] text-white xl:overflow-hidden">

      <div className="hidden xl:block shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 min-w-0">

        <Header />

        <main className="w-full p-4 lg:p-6">

          {/* 4 Crypto Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center">
            <Bitcoin />
            <Litecoin />
            <Ethereum />
            <Solana />
          </div>

          {/* Other sections */}
          <div className="grid grid-cols-1 xl:grid-cols-[360px_739px] gap-4 mt-4 justify-center">

            <div className="flex flex-col gap-4 min-w-0 items-center">
              <Credit />
              <Portfolio />
            </div>

            <div className="flex flex-col gap-4 min-w-0">
              <LiveChart />
              <TinyChart />
            </div>

          </div>

        </main>

      </div>

    </div>
          </>
          ) }




         