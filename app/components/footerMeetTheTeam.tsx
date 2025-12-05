export default function FooterMeetTheTeam() {
    return (
        <div>
            <div>
                <div className="reliative">
                    {/* Experice Icon */}
                    <div className="flex items-center mt-2 ml-2">
                        <div className="relative inline-block">
                            <img src="expierince-icons.png" alt="" className="w-25" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="my-auto text-white text-2md font-bold [text-shadow:_0_0_5px_black]">
                                    90
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex items-center justify-center rounded-br-md rounded-tr-md bg-[#1D1357]/50 w-40 h-7 -ml-9.5">
                            <div className="text-white text-2md ml-2 [text-shadow:_0_0_5px_black]">12396/25000</div>
                        </div>
                    </div>
                    {/* Banner */}
                    <div className="relative flex flex-col mt-10">
                        <img src="/banner-main.png" alt="" className="w-125" />
                        <img
                            src="/banner-image.png"
                            alt=""
                            className=" bottom-0 left-0 absolute w-125 "
                        />
                    </div>
                </div>
                <div className="flex items-center justify-start bg-[#1D1357]/50 rounded-br-md w-125 h-16 gap-7">
                    <div className="text-white text-2md ml-10 [text-shadow:_0_0_7px_black]">MEET THE TEAM</div>
                    <img src="/trophy-icon.png" alt="" className="z-1 w-13 h-auto ml-12" />
                    <div className="flex items-center justify-center rounded-br-md rounded-tr-md bg-[#1D1357]/50 w-40 h-7 ml-[-50] mt-2">
                            <div className="text-[#FFC800] text-2md ml-2 [text-shadow:_0_0_5px_black]">15000</div>
                    </div>
                </div>
                <div className="flex mt-3 ml-4 gap-5">
                    <img src="/little-prince-icon.png" alt="" className="w-25 h-auto" />
                    <img src="/clan-war-icon.png" alt="" className=" w-30 h-auto"/>
                </div>
            </div>
        </div>
    );
}
