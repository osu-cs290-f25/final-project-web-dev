"use server";

import { BattleData } from "@/app/(game)/battle/types";
import { db } from "@/lib/drizzle";
import { winsTable } from "@/lib/schema";
import { and, eq, or } from "drizzle-orm";

const apiKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjViNjFkY2ViLTk3YTAtNGM0MS05ZGYyLWYzMWY4NTJkZGZlOCIsImlhdCI6MTc2NDgwMTYyMSwic3ViIjoiZGV2ZWxvcGVyLzQ1YTdlYTY4LTZmMzctOTM2OS04MzRkLWNlZjdhNGNmOTIxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.zoTNiB0cdC_flQym0Im27T6mQ615g2cgDqWoqATqdkzEeDk8QhE3g8y5fE6g--PFXDpoK7h3-Ob2qE605lTPXQ";
console.log(apiKey);
export default async function GetBattleBetweenPlayers(
    playerTag: string,
    opponentTag: string,
    betTime: number,
) {
    console.log(` === playerTag: ${playerTag}`);
    console.log(` === opponent: ${opponentTag}`);
    const response = await fetch(
        `https://proxy.royaleapi.dev/v1/players/%23${playerTag}/battlelog`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
            },
        },
    );

    const data = await response.json();
    //console.log(data);

    let opponent = {};
    let player = {};
    let battleTime = "";
    let output: BattleData | null = null;

    for (let i = 0; i < data.length; i++) {
        const opp = data[i].opponent[0];
        if (opp.tag === `#${opponentTag}`) {
            opponent = opp;
            player = data[i].team[0];
            battleTime = data[i].battleTime;
            output = {
                player: player,
                opponent: opponent,
                battleTime: battleTime,
            } as BattleData;
            break;
        }
    }

    if (!output) return null;

    let bet = new Date(betTime);
    const formattedDate = battleTime.replace(
        /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
        "$1-$2-$3T$4:$5:$6",
    );

    const battleT = new Date(formattedDate);

    //console.log(output);
    console.log(battleT);
    console.log(bet);

    //if (battleT < bet) return null;

    let winner = "";
    let loser = "";
    if (output!.player.crowns > output!.opponent.crowns) {
        winner = output!.player.tag;
        loser = output!.opponent.tag;
    } else {
        winner = output!.opponent.tag;
        loser = output!.player.tag;
    }

    console.log("insert");

    await db.insert(winsTable).values({
        losingPlayer: loser,
        winningPlayer: winner,
        time: output!.battleTime,
    });

    //console.log(output);
    //console.log("HERE");
    return output;
}

export const getStatsBetweenPlayers = async (
    player1Tag: string,
    player2Tag: string,
) => {
    player1Tag = "#" + player1Tag;
    player2Tag = "#" + player2Tag;
    const player1Wins = await db.$count(
        winsTable,
        and(
            eq(winsTable.losingPlayer, player2Tag),
            eq(winsTable.winningPlayer, player1Tag),
        ),
    );
    const player2Wins = await db.$count(
        winsTable,
        and(
            eq(winsTable.losingPlayer, player1Tag),
            eq(winsTable.winningPlayer, player2Tag),
        ),
    );

    console.log(player1Wins);
    console.log(player2Wins);
    return { playerWins: player1Wins, opponentWins: player2Wins };
};

export const getTotalWins = async (playerTag: string) => {
    const wins = await db.$count(
        winsTable,
        eq(winsTable.winningPlayer, playerTag),
    );

    return wins;
};
