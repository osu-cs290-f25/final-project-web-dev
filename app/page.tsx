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
        className="flex h-[60dvh] flex-col"
        style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover" }}
      >
        <div className="mt-5 flex flex-col items-end gap-5">
          <div className="relative">
            <img src="/banner1.png" alt="" className="w-100 scale-x-[-1]" />
            <div className="absolute inset-y-0 left-20 flex text-white">
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_green]">SEAN GUTMANN</div>
            </div>
          </div>

          <div className="relative">
            <img src="/banner5.png" alt="" className="w-100" />
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
              <div className="my-auto text-2xl [text-shadow:_0_0_5px_orange] uppercase">ETHAN BENTLEY</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
