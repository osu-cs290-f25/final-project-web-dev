import { WinBarData } from "../(game)/battle/types";

export default function WinBar({ data }: { data?: WinBarData }) {
    console.log(data?.opponentWins + ":" + data?.playerWins);
    let p = data?.playerWins! + 1;
    let o = data?.opponentWins! + 1;
    let percent = Math.round((p / (p + o)) * 100);
    console.log(percent);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="h-6 w-3/4 flex">
                <div className="flex flex-col" style={{ width: `${percent}%` }}>
                    <div className="text-center text-sm mb-1">{p - 1} Wins</div>
                    <div className="bg-blue-600 min-h-8 rounded-l-full w-full">
                    </div>
                </div>
                <div
                    className="flex flex-col"
                    style={{ width: `${100 - percent}%` }}
                >
                    <div className="text-center text-sm mb-1">
                        {o - 1} Wins
                    </div>
                    <div className="bg-red-600 min-h-8 rounded-r-full w-full">
                    </div>
                </div>
            </div>
        </div>
    );
}
