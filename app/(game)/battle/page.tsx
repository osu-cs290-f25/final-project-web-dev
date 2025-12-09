"use client";

import GetBattleBetweenPlayers, { getStatsBetweenPlayers } from "@/lib/action";
import { useUserStore } from "@/lib/useLogin";
import { useEffect, useRef, useState } from "react";
import BattleCard from "../../components/battleCard";
import { BattleData, WinBarData } from "./types";
import { Button } from "@/app/components/button";
import { toast } from "sonner";
import WinBar from "@/app/components/winBar";

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

    const [winBarData, setWinBar] = useState<WinBarData>();

    const checkForGameFinish = () => {
        let betTime = Date.now();
        const id = setInterval(async () => {
            console.log("get battle");

            const b = await GetBattleBetweenPlayers(
                user.id!,
                opponentId,
                betTime,
            ) as BattleData;

            if (b != null) {
                const wbData = await getStatsBetweenPlayers(
                    user.id!,
                    opponentId,
                ) as WinBarData;
                console.log(wbData.playerWins);
                console.log(wbData.opponentWins);

                setWinBar(wbData);
                setBattle(b);
                console.log("GOT BATTLE");
                setState(BattleState.PostBattle);
                user.addGems((b.player.crowns > b.opponent.crowns) ?  gemsBet : -gemsBet);
                clearInterval(id);
            }
        }, 4000);
    };

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

    // post battle
    return (
        <div
            className="flex flex-col bg-cover text-white h-dvh"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <div className="flex h-7/8 gap-10 items-center justify-center">
                <BattleCard
                    data={battle?.player}
                    won={battle &&
                        (battle.player.crowns > battle.opponent.crowns)}
                >
                </BattleCard>
                <BattleCard
                    data={battle?.opponent}
                    won={battle &&
                        (battle.opponent.crowns > battle.player.crowns)}
                >
                </BattleCard>
            </div>
            <WinBar data={winBarData}></WinBar>
        </div>
    );
}
