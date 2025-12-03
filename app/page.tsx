import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="flex h-[60dvh] flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <img src="/logo.png" className="w-120 object-cover" alt="" />
        <Link href="/login">
          <Button>Bet Now!!</Button>
        </Link>
      </div>

    <section>
      <div
        className="flex h-[220dvh] flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/bg-main.png')" }}
      >
      </div>
    </section>

      <footer
        className="flex h-[60dvh] flex-col"
        style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover" }}
      >
        <div className="flex flex-col items-end justify-right gap-5 mt-5">
          <div
            // bg-cover makes the background image cover the entire div
            className="flex items-center justify-center w-100 bg-cover bg-center"
            style={{ backgroundImage: "url('/banner5.png')" }}>
            <p className="text-white">TRISTAN GOEHRING</p>
          </div>
          
          <img
            src="/banner5.png"
            alt="Banner5"
            className="w-100 object-contain"
          />

          <img
            src="/banner1.png"
            alt="Banner1"
            className="w-100 scale-x-[-1] object-contain"
          />
          <img
            src="/banner2.png"
            alt="Banner2"
            className="w-100 object-contain"
          />
          <img
            src="/banner3.png"
            alt="Banner3"
            className="w-100 object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
