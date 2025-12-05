"use client";

import GetBattleBetweenPlayers from "@/lib/action";
import { useUserStore } from "@/lib/useLogin";
import { useEffect, useState } from "react";
import BattleCard from "../../components/battleCard";
import { BattleData } from "./types";
import { Button } from "@/app/components/button";
import { toast } from "sonner";

export default function Page() {
    const user = useUserStore();

    const [battle, setBattle] = useState<BattleData>();

    function submitOpponentTag(tag: string) {
        (async () => {
            console.log("get battle");

            const b = await GetBattleBetweenPlayers(
                user.id!,
                tag,
            ) as BattleData;
            console.log(b);
            setBattle(b);
        })();
    }

    return (
        (battle)
            ? (
                <div>
                    <div
                        className="flex h-dvh gap-10 items-center justify-center bg-cover text-white"
                        style={{ backgroundImage: "url('/bg.png')" }}
                    >
                        <BattleCard data={battle?.player}></BattleCard>
                        <BattleCard data={battle?.opponent}></BattleCard>
                    </div>
                </div>
            )
            : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = new FormData(e.currentTarget);
                        const id = form.get("scid");
                        if (!id || typeof id !== "string") {
                            toast("You must enter an ID!");
                            return;
                        }
                        submitOpponentTag(id.toUpperCase());
                    }}
                >
                    <div
                        className="flex h-dvh flex-col items-center justify-center bg-cover text-white"
                        style={{ backgroundImage: "url('/bg.png')" }}
                    >
                        <h1 className="-mt-20 mb-20 text-6xl">Battle!</h1>
                        <label
                            htmlFor="scid"
                            className="mb-2 text-2xl text-white"
                        >
                            Enter your Opponent's Supercell ID:{" "}
                        </label>
                        <input
                            type="text"
                            name="scid"
                            className="text-center rounded-full border-2 border-white/50 py-1 text-1xl text-white focus:outline-none uppercase"
                        >
                        </input>
                        <Button className="mt-4 px-10 text-2xl" type="submit">
                            Go!
                        </Button>
                    </div>
                </form>
            )
    );
}
