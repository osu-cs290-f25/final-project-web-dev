import Link from "next/link";
import { Button } from "./components/button";
import { useUserStore } from "@/lib/useLogin";
import BattleButton from "./components/battleButton";
import FooterBanner from "./components/footerBanner";
import FooterMeetTheTeam from "./components/footerMeetTheTeam";
import WebsiteDescription from "./components/websiteDescription";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="flex h-[60dvh] flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <img src="/logo.png" className="w-120 object-cover" alt="" />
        <BattleButton />
      </div>

      <section>
        <div
          className="flex h-[220dvh] flex-col items-center justify-center bg-cover relative"
          style={{ backgroundImage: "url('/bg-main.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="text-5xl relative inset-0 m-25 text-shadow-lg space-y-6 z-11">
            <p className="text-white">
              Turn friendly Clash Royale battles into High-Stakes fun!
            </p>
            <p className="text-[#ffc800] text-2xl">
              A Clash Royale betting app where you and your friends place gem
              wagers on live friendly battles
            </p>
            <Link href="/battle" className="text-xl">
              <Button>
                Battle Now!
              </Button>
            </Link>

            <div className="relative flex flex-row gap-4 w-full">
              <WebsiteDescription
                description="Play games"
                image="/gems.png"
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        className="flex h-[60dvh] justify-between"
        style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover" }}
      >
        <div className="flex flex-col justify-start">
          <FooterMeetTheTeam />
        </div>

        <div className="mt-5 mb-5 flex flex-col justify-end gap-5">
          <FooterBanner
            name="SEAN GUTMANN"
            link="https://github.com/SeanG-rsd"
            image="/banner1.png"
            flipX={true}
            color="#568553"
          />
          <FooterBanner
            name="TRISTAN GOEHRING"
            link="https://github.com/0Tristan0"
            image="/banner4.png"
            flipX={false}
            color="#8E37A3"
          />
          <FooterBanner
            name="LUKAS SEUFERT"
            link="https://github.com/quick007"
            image="/banner2.png"
            flipX={false}
            color="#6F6F6F"
          />
          <FooterBanner
            name="ETHAN BENTLEY"
            link="https://github.com/bentleet"
            image="/banner3.png"
            flipX={false}
            color="#F37E00"
          />
        </div>
      </footer>
    </div>
  );
}
