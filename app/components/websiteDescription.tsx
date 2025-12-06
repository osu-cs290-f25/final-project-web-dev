interface FooterBannerProps {
    description: string;
    image: string;
}

export default function WebsiteDescription({ description, image }: FooterBannerProps) {
    return (
        <div className="flex flex-col items-center text-center flex-1 bg-black/20 p-4 rounded-lg">
            <div
                className={`my-auto text-2xl hover:scale-110 transition-all duration-200`}
                style={{
                    textShadow: `2px 2px 0 black`,
                }}
            > {description}
            </div>
            <img src={image} alt="" className="mt-4 w-16 h-16" />
        </div>
    );
}
