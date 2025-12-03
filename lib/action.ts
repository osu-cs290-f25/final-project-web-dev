"use server";

import { db } from "@/lib/drizzle"
import { winsTable } from "@/lib/schema"

const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjViNjFkY2ViLTk3YTAtNGM0MS05ZGYyLWYzMWY4NTJkZGZlOCIsImlhdCI6MTc2NDgwMTYyMSwic3ViIjoiZGV2ZWxvcGVyLzQ1YTdlYTY4LTZmMzctOTM2OS04MzRkLWNlZjdhNGNmOTIxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.zoTNiB0cdC_flQym0Im27T6mQ615g2cgDqWoqATqdkzEeDk8QhE3g8y5fE6g--PFXDpoK7h3-Ob2qE605lTPXQ"
console.log(apiKey)
export default async function GetBattleBetweenPlayers(playerTag: string, opponentTag: string) {
    const response = await fetch(`https://proxy.royaleapi.dev/v1/players/%23${playerTag}/battlelog`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    
    const data = await response.json();
    //console.log(data);

    var opponent = {};
    var player = {};
    var battleTime = "";
    var output = null;
    

    for (let i = 0; i < data.length; i++) {
        const opp = data[i].opponent[0];
        if (opp.tag === `#${opponentTag}`) {
            opponent = opp;
            player = data[i].team[0];
            battleTime = data[i].battleTime;
            output = {player: player, opponent: opponent, battleTime: battleTime};
            break;
        }
    }

    if (output) {
        db.insert(winsTable).values({
		losingPlayer: "",
		winningPlayer: "",
		time: output.battleTime
	})
    }

    return output
}

await GetBattleBetweenPlayers("2YJYPRQVC", "VU8JY9L");