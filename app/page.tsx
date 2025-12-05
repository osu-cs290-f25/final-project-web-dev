import Link from "next/link";
import { Button } from "./components/button";
import { useUserStore } from "@/lib/useLogin";
import BattleButton from "./components/battleButton";
import FooterBanner from "./components/footerBanner";

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
          <FooterBanner 
            name="SEAN GUTMANN"
            link="https://github.com/SeanG-rsd"
            image="/banner1.png"
            flipX={true}
            color="green"
            />
          <FooterBanner 
            name="TRISTAN GOEHRING"
            link="https://github.com/0Tristan0"
            image="/banner4.png"
            flipX={false}
            color="purple"
            />
          <FooterBanner 
            name="LUKAS SEUFERT"
            link="https://github.com/quick007"
            image="/banner2.png"
            flipX={false}
            color="black"
            />
          <FooterBanner 
            name="ETHAN BENTLEY"
            link="https://github.com/bentleet"
            image="/banner3.png"
            flipX={false}
            color="red"
            />
        </div>
      </footer>
    </div>
  );
}
