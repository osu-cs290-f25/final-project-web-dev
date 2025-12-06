"use client";

import GetBattleBetweenPlayers from "@/lib/action";
import { useUserStore } from "@/lib/useLogin";
import { useEffect, useRef, useState } from "react";
import BattleCard from "../../components/battleCard";
import { BattleData } from "./types";
import { Button } from "@/app/components/button";
import { toast } from "sonner";

export enum BattleState {
    PreBattle = "pre-battle",
    Betting = "betting",
    InBattle = "in-battle",
    PostBattle = "post-battle",
}

export default function Page() {
    const user = useUserStore();

    const [opponentId, setOpponentId] = useState("");
    const [battle, setBattle] = useState<BattleData>();
    const [state, setState] = useState<BattleState>(BattleState.PreBattle);
    const [gemsBet, setGemsBet] = useState(10);
    const intervalIdRef = useRef(null);

    const checkForGameFinish = () => {
        if (intervalIdRef.current) return; // Prevent multiple intervals from starting

        const id = setInterval(() => {
            if (battle) {
                console.log("GOT BATTLE");
                return;
            }
            checkBattle();
        }, 1000);
    };

    function checkBattle() {
        let betTime = Date.now();
        (async () => {
            console.log("get battle");

            const b = await GetBattleBetweenPlayers(
                user.id!,
                opponentId,
                betTime,
            ) as BattleData;
            console.log(b);
            setBattle(b);
        })();
    }

    if (state === BattleState.PreBattle) {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    const id = form.get("scid");
                    if (!id || typeof id !== "string") {
                        toast("You must enter an ID!");
                        return;
                    }
                    setOpponentId(id.toUpperCase());
                    setState(BattleState.Betting);
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
        );
    }

    if (state === BattleState.Betting) {
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    
                    setState(BattleState.InBattle);
                    checkForGameFinish();
                }}
            >
                <div
                    className="flex h-dvh flex-col items-center justify-center bg-cover text-white"
                    style={{ backgroundImage: "url('/bg.png')" }}
                >
                    <h1 className="-mt-20 mb-20 text-6xl">Place Your Bet!</h1>
                    <label
                        htmlFor="scid"
                        className="mb-2 text-2xl text-white"
                    >
                        Enter the amount of gems you want to bet:
                    </label>
                    <input
                        type="number"
                        className="text-center rounded-full border-2 border-white/50 py-1 text-1xl text-white focus:outline-none uppercase"
                        value={gemsBet}
                        onChange={(e) =>
                            setGemsBet(Number(e.currentTarget.value))}
                    >
                    </input>
                    <Button className="mt-4 px-10 text-2xl" type="submit">
                        Go!
                    </Button>
                </div>
            </form>
        );
    }

    if (state === BattleState.InBattle) {
        return (
            <div>
                <div
                    className="flex h-dvh gap-10 items-center justify-center bg-cover text-white"
                    style={{ backgroundImage: "url('/bg.png')" }}
                >
                    Waiting for battle to end...
                </div>
            </div>
        );
    }

    return (
        <div>
            <div
                className="flex h-dvh gap-10 items-center justify-center bg-cover text-white"
                style={{ backgroundImage: "url('/bg.png')" }}
            >
                <BattleCard data={battle?.player}></BattleCard>
                <BattleCard data={battle?.opponent}></BattleCard>
            </div>
        </div>
    );
}
