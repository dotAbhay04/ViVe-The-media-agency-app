import React from 'react'

function Journey() {
    return (
        <div  className="w-full relative rounded-tl-3xl rounded-tr-3xl h-screen flex flex-col bg-[#c8f32b] text-black">
            
            <div className="text-center uppercase flex flex-col pt-[3vw]">
                <h1 className="text-[9vw] font-bold leading-none tracking-tight">Ready</h1>
                <h1 className="text-[9vw] font-bold leading-none tracking-tight">To Start</h1>
                <h1 className="text-[9vw] font-bold leading-none tracking-tight">Your Journey?</h1>
            </div>

            <div className="flex flex-col items-center pb-5 pt-5">

                <button className="flex items-center border-none gap-2 px-5 py-2 border-2 rounded-full bg-zinc-900 text-white hover:text-black hover:bg-zinc-300 hover:scale-105 hover:shadow-md hover:shadow-zinc-900 transition-all duration-200 ease">
                    Start Now
                    <div className="w-3 h-3 bg-zinc-50 rounded-full"></div>
                </button>

                <div className="p-2">
                    <h3 className="text-[1.5vw] py-1">Or</h3>
                </div>

                <button className="flex items-center gap-2 px-5 py-2 border-2 border-black rounded-full text-zinc-900 hover:text-white hover:bg-zinc-900 hover:scale-105 hover:shadow-md hover:shadow-zinc-900 transition-all duration-100 ease">
                    hello@vive.design
                    <div className="w-3 h-3 bg-zinc-50 rounded-full"></div>
                </button>
            </div>
        </div>
    )
}

export default Journey
