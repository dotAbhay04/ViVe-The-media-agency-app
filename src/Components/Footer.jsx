
import React from 'react'

function Footer() {
    return (
        <div className='w-full h-screen flex gap-[20vw]  text-black p-20 bg-zinc-200'>
            <div className='w-1/2 h-full flex flex-col justify-between'>
                <div className="heading">
                    <h1 className='text-[9vw] uppercase font-bold leading-none tracking-tighter -m-8 '>Eye-</h1>
                    <h1 className='text-[9vw] uppercase font-bold leading-none tracking-tighter -m-8 '>Opening</h1>
                </div>
                <h3 className='text-[3vw] font-bold leading-none tracking-tighter'>ViVe.</h3>
            </div>
            <div className='w-1/2 '>
                <h1 className='text-[5vw] uppercase font-bold leading-none tracking-tighter -m-8 '>Presentations</h1>
                <div className="dets  font-semibold mt-7 pt-7">
                    <h3 className='mb-3'>S:</h3>
                    <div className=" links font-thin ">
                        <a className='block text-xl ' href="#">Facebook</a>
                        <a className='block text-xl ' href="#">Instagram</a>
                        <a className='block text-xl ' href="#">Twitter</a>
                        <a className='block text-xl ' href="#">LinkedIn</a>
                    </div>
                </div>
                <div className="dets relative font-semibold mt-7 pt-[10vw]">
                    <h3 className='mb-3'>A:</h3>
                    <div className=" absolute links font-thin">
                        <a className='block text-[2.5vh] ' href="#">123, ABC Block, California-20034</a>

                    </div>
            <h3 className='absolute pt-[5vw] text-center font-thin'>© vive design 2024. Legal Terms</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
