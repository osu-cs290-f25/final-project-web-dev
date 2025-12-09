import { PlayerData } from "../(game)/battle/types";

export default function BattleCard(
    { data, won }: { data?: PlayerData; won?: boolean },
) {
    return (
        <div className="flex flex-col w-1/4 h-7/8 items-center rounded-lg">
            {data
                ? (
                    <>
                        <div className="min-h-36 flex justify-center">
                            {[...new Array(data.crowns)].map((_, i) => (
                                <img
                                    src="/Blue Crown Animated.gif"
                                    className="h-36"
                                    key={i}
                                />
                            ))}
                        </div>
                        <div className="bg-[#1D1357]/50 w-full flex flex-col justify-center items-center rounded-2xl py-4">
                            {won ? "Won!" : "Lost :("}
                            {won
                                ? <img src="/won.png" className="h-18 mb-6" />
                                : <img src="/lost.png" className="h-18 mb-6" />}
                            <div className="flex justify-center items-center text-center w-full h-10 m-2 text-2xl rounded-md">
                                {data?.name}
                            </div>
                            <div className="text-[#FFC800] flex gap-2">
                                Trophies:{" "}
                                <img
                                    src="/trophy-icon.png"
                                    alt=""
                                    className="w-6"
                                />
                                {data?.startingTrophies}
                            </div>
                            <div className="flex gap-2">
                                Elixer Leaked:{" "}
                                <img
                                    src="/elixer.png"
                                    alt=""
                                    className=" z-20 w-6"
                                />
                                {data?.elixirLeaked}
                            </div>
                            <div className="flex flex-wrap w-full max-w-4xl mx-auto px-4 rounded-lg">
                                {data?.cards
                                    ?.slice(0, 8)
                                    .map((card, index) => (
                                        <div
                                            key={index}
                                            className="w-1/4 p-2 flex justify-center items-center flex-shrink-0"
                                        >
                                            <img
                                                src={card.iconUrls.medium}
                                                alt={card.name}
                                                className="w-20"
                                            />
                                        </div>
                                    ))}
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
