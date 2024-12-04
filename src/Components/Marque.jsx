import { motion } from 'framer-motion'
import React from 'react'

function Marque() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full py-9 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]' >
      <div className="text border-t-2 border-b-2 border-zinc-400 font-semibold pr-20 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 9 }} className='text-[16vw] leading-none pr-20 tracking-tighter uppercase'>We are ViVe</motion.h1>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 9 }} className='text-[16vw] leading-none pr-20 tracking-tighter uppercase'>We are ViVe</motion.h1>
      </div>
    </div>
  )
}

export default Marque
