"use client"

import GetBattleBetweenPlayers from "@/lib/action";
import { useUserStore } from "@/lib/useLogin";
import { useState } from "react";

export default function Page() {
    const user = useUserStore();
    
    const [opponentTag, setOpponentTag] = useState("");
    const [battle, setBattle] = useState({});

    async function getBattle() {
        var b = await GetBattleBetweenPlayers(user.id ?? "none", opponentTag);

        setBattle(b ?? {});
    }

    return (
        <body>
            <div>
                BATTLE
            </div>
        </body>
    );
}