import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {

    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["Where Vision", "Meets", "Vibrancy"].map((item, index) => {
                    return <div className="masker">
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{width: "8vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}} className='ml-2.5 rounded-md w-[8vw] h-[5.7vw] relative top-1.25 '>
                                    <img className='w-full h-full bg-cover rounded-xl ' src="./vibe_1st.webp" alt="" />
                                </motion.div>)}
                            <h1 className='uppercase text-[8vw] leading-[7vw] tracking-tighter font-medium'>
                                {item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-600 mt-16 flex justify-between items-center py-5 px-20'>
                {["For public and Private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start">
                    <div className='px-4 py-2 border-[1.5px] rounded-full border-zinc-600 text-sm uppercase'>Start the Project</div>
                    
                </div>
            </div>

        </div>
    )
}

export default LandingPage
