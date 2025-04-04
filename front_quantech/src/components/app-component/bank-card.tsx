"use client"

interface BankCardProps {
    gradient?: string
}

export function BankCard({ gradient= "bg-gradient-to-b from-pink-300 to-pink-900" }: BankCardProps) {
    return (
        <div className="relative w-full max-w-md mb-4 mx-auto">
            <div className={`relative w-full aspect-[1.586/1] rounded-3xl overflow-hidden ${gradient}`}>
                {/* Background grid pattern using clip-path */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Top left section */}
                    <div
                        className="absolute top-0 left-0 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Top middle-left section */}
                    <div
                        className="absolute top-0 left-1/4 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Top middle-right section */}
                    <div
                        className="absolute top-0 left-1/2 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Top right section */}
                    <div
                        className="absolute top-0 left-3/4 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Middle left section */}
                    <div
                        className="absolute top-1/3 left-0 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Middle middle-left section */}
                    <div
                        className="absolute top-1/3 left-1/4 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Middle middle-right section */}
                    <div
                        className="absolute top-1/3 left-1/2 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Middle right section */}
                    <div
                        className="absolute top-1/3 left-3/4 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Bottom left section */}
                    <div
                        className="absolute top-2/3 left-0 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Bottom middle-left section */}
                    <div
                        className="absolute top-2/3 left-1/4 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Bottom middle-right section */}
                    <div
                        className="absolute top-2/3 left-1/2 w-1/4 h-1/3 bg-white/10"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>

                    {/* Bottom right section */}
                    <div
                        className="absolute top-2/3 left-3/4 w-1/4 h-1/3 bg-white/5"
                        style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
                    ></div>
                </div>

                {/* Card content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-2">
                    {/* Card title */}
                    <div className="text-right">
                        <h1 className="text-lg md:text-xl font-bold text-white">BankCash</h1>
                        <p className="text-base md:text-lg text-white/90">Compte premium</p>
                    </div>

                    {/* Card number placeholder (blue outline) */}
                    <div className="my-4">
                        <p className="text-xl md:text-xl font-bold text-white">4509 81** **** ****</p>
                    </div>

                    {/* Card details */}
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-2 md:mb-0">
                            <p className="text-base md:text-base text-white">Exp Date</p>
                            <p className="text-lg md:text-lg font-bold text-white">07/26</p>
                        </div>
                        <div>
                            <p className="text-base md:text-base text-white">CVV</p>
                            <p className="text-lg md:text-lg font-bold text-white">915</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

