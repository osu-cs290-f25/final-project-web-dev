import { PlayerData } from "../(game)/battle/types";

export default function BattleCard({ data }: { data?: PlayerData }) {
    return (
        <div className="flex flex-col w-1/4 bg-green-100 h-3/4 items-center">
            {data
                ? (
                    <>
                        <img
                            src="/Blue Crown Animated.gif"
                            className="w-1/2 h-1/4"
                        />
                        <div className="bg-blue-500 w-full h-3/4">
                            <div>
                                {data?.name}
                            </div>
                        </div>
                    </>
                )
                : (
                    "no battle"
                )}
        </div>
    );
}
