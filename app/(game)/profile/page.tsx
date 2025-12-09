import FooterBanner from "../../components/footerBanner";

// import {useUserS

export default function Home() {
  // const user = useUserStore()

  return (  
    <div
        className="flex h-dvh flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
         <div className="flex items-center justify-start bg-[#1D1357]/50 rounded-br-md w-125 h-16 gap-7">
                    <div className="text-white text-2md ml-10 [text-shadow:_0_0_7px_black]">BATTLES WON</div>
                    <div className="flex items-center justify-center rounded-br-md rounded-tr-md bg-[#1D1357]/50 w-40 h-7 ml-[-50] mt-2">
                            <div className="text-[#FFC800] text-2md ml-2 [text-shadow:_0_0_5px_black]">15000</div>
                    </div>
                </div>
        <div className="flex justify-center">
        <div className="">BATTLES WON</div>
        <div className="">TOTAL GEMS</div>

        </div>
    </div>
  );
}