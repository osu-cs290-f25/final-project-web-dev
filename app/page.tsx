import Link from "next/link";
import { Button } from "./components/button";
import { useUserStore } from "@/lib/useLogin";
import BattleButton from "./components/battleButton";

export default function Home() {
  
  return (
    <div className="flex flex-col">
      <div
        className="flex h-[60dvh] flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <img src="/logo.png" className="w-120 object-cover" alt="" />
        <Link href="/login">
        <BattleButton />
        </Link>
      </div>

      <section>
        <div
          className="flex h-[220dvh] flex-col items-center justify-center bg-cover"
          style={{ backgroundImage: "url('/bg-main.png')" }}
        ></div>
      </section>

      <footer
        className="flex h-[60dvh] justify-between"
        style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover" }}
      >
        <div>
          <div className="flex flex-col justify-start">
            <div className="reliative">
              <div className="relative flex flex-col mt-35">
                <img src="/banner-main.png" alt="" className="w-125 " /> 
                <img src="/banner-image.png" alt="" className=" bottom-0 left-0 absolute w-125 " />
              </div>
            </div>
            <div className="flex items-center justify-start bg-[#1D1357]/50 rounded-br-md w-125 h-16">
               <div className="text-white text-2md ml-10">MEET THE TEAM</div>
               <div className="relative flex flex-col">
                <div className="flex items-center ml-30 rounded-br-md rounded-tr-md justify-start bg-[#1D1357]/50 rounded-br-md w-30 h-10"></div>
                <div className="text-white text-2md ml-10">15000</div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5 flex flex-col justify-end gap-5">
          <div className="relative">
            <img src="/banner1.png" alt="" className="w-100 scale-x-[-1]" />
            <div className="absolute inset-y-0 left-20 flex text-white">
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_green] ">SEAN GUTMANN</div>
            </div>
          </div>

          <div className="relative">
            <img src="/banner4.png" alt="" className="w-100" />
            <div className="absolute inset-y-0 left-20 flex text-white">
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_purple]">TRISTAN GOEHRING</div>
            </div>
          </div>

          <div className="relative">
            <img src="/banner2.png" alt="" className="w-100" />
            <div className="absolute inset-y-0 left-20 flex text-white">
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_black] uppercase">LUKAS seufert</div>
            </div>
          </div>

          <div className="relative">
            <img src="/banner3.png" alt="" className="w-100" />
            <div className="absolute inset-y-0 left-20 flex text-white">
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_red] uppercase">ETHAN BENTLEY</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
