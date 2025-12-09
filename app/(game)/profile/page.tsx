"use client";

import FooterBanner from "../../components/footerBanner";
import { useUserStore } from "@/lib/useLogin";
import { useState, useEffect } from "react";
import getNameFromId from "@/lib/getUser"
import { getTotalWins } from "@/lib/action"

export default function Home() {
  const user = useUserStore();

  const [userName, setUserName] = useState<string>();
  const [battlesWon, setBattlesWon] = useState<number>()

	useEffect(() => {
		(async () => {
			if (user.id) {
				const [name, wins] = await Promise.all([getNameFromId(user.id), getTotalWins(user.id)])
				setUserName(name);
        setBattlesWon(wins)
			}
		})();
	}, [user.id])
  return (
    <div
      className="flex h-dvh flex-col items-center justify-center bg-cover text-white"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex flex-col  bg-[#1D1357]/50 rounded-2xl w-125 h-125 gap-15">
        <div className="relative w-100 mt-10">
          <img
            src="banner3.png"
            alt=""
            className="scale-x-[-1]"
          />
          <div
            className="absolute inset-0 grid place-items-center text-2xl"
            style={{ textShadow: `2px 2px 0 black` }}
          >
            {userName ?? user.id ?? "Loading..."}
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center justify-center bg-[#1D1357]/50 rounded-md w-40 h-15 gap-7">
              <div className="text-white text-2md ml-10 [text-shadow:_0_0_7px_black]">
                BATTLES WON
              </div>
            </div>
            <div className="flex">
              <img src="/trophy-icon.png" className="size-6 mr-2" />
              <p>{battlesWon ?? "Loading..."}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center justify-center bg-[#1D1357]/50 rounded-md w-40 h-15 gap-7">
              <div className="text-white text-2md ml-10 [text-shadow:_0_0_7px_black]">
                GEMS EARNED
              </div>
            </div>
            <div className=" flex">
              <img src="/gems-new.png" className="size-6 mr-2" />
              <p>{user.gems}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
