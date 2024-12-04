import React from 'react'

function Cards() {
    return (
        <div  className='w-full h-screen items-center flex px-32 gap-5 bg-zinc-900'>
            <div className="cardcontainer w-1/2 h-[60vh]">
                <div className='relative w-full h-full flex items-center justify-center rounded-xl bg-[#004D43]'>
                    <h1 className='text-6xl font-bold tracking-tight text-[#CDEA68]'>Vive.</h1>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  bg-[#004D43] text-white hover:text-black hover:bg-zinc-300 hover:scale-105 hover:shadow-md hover:shadow-zinc-900 transition-all duration-200 ease'>&copy;2024</button>
                </div>
            </div>
            <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
                <div className='relative h-full  flex items-center justify-center w-1/2 rounded-xl bg-[#162b28]'>
                    <h1 className='text-6xl font-bold tracking-tight text-[#CDEA68]'>Vive.</h1>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  bg-[#162b28] text-white hover:text-black hover:bg-zinc-300 hover:scale-105 hover:shadow-md hover:shadow-zinc-900 transition-all duration-100 ease'>All Projects</button>
                </div>
                <div className='relative h-full flex items-center justify-center w-1/2 rounded-xl bg-[#162b28]'>
                    <h1 className='text-6xl font-bold tracking-tight text-[#CDEA68]'>Vive.</h1>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10  bg-[#162b28] text-white hover:text-black hover:bg-zinc-300 hover:scale-105 hover:shadow-md hover:shadow-zinc-900 transition-all duration-200 ease'>Career</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
