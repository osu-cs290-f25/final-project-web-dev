"use client";

import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import { toast } from "sonner";
import { useUserStore } from "@/lib/useLogin";
import { Button } from "../components/button";

export default function Page() {
  const user = useUserStore();
  const router = useRouter();

  return (
    <form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const id = form.get("scid");
        if (!id || typeof id !== "string") {
          toast("You must enter an ID!");
          return;
        }
        user.setId(id.toUpperCase());
        router.push("/battle")
		
      }}
    >
      <div
        className="flex h-dvh flex-col items-center justify-center bg-cover text-white"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <h1 className="-mt-20 mb-20 text-6xl">Login</h1>
        <label htmlFor="scid" className="mb-2 text-2xl text-white">
          Enter your Supercell ID:{" "}
        </label>
        <input
          type="text"
          name="scid"
          className="text-center rounded-full border-2 border-white/50 py-1 text-1xl text-white focus:outline-none uppercase"
        ></input>
        <Button className="mt-4 px-10 text-2xl" type="submit">
          Go!
        </Button>
      </div>
    </form>
  );
}
