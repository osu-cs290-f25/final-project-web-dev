interface FooterBannerProps {
    description: string;
    image: string;
}

export default function WebsiteDescription({ description, image }: FooterBannerProps) {
    return (
        <div className="flex space-x-8 justify-center bg-black/20 p-4 rounded-lg w-full">
            <div className="flex flex-col items-center text-center flex-1">
                <div
                className={`text-white text-2xl`}
                style={{
                    textShadow: `2px 2px 0 black`,
                }}
                >
                {"Play games to win gems!"}
                </div>
                <img src={"/gems.png"} alt="" className="mt-4 w-48" />
            </div>

            <div className="flex flex-col items-center text-center flex-1">
                <div
                className={`text-white text-2xl`}
                style={{
                    textShadow: `2px 2px 0 black`,
                }}
                >
                {"See game results as they happen"}
                </div>
                <img src={"/Arena_GoblinBonanza.png"} alt="" className="mt-4 w-128 rounded-xl" />
            </div>
        </div>
    );
}
