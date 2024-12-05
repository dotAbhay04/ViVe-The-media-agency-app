
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];


    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div data-scroll data-scroll-speed="-.1" className="w-full py-12">
            <div className="w-full px-20 border-b-[1px] pb-12 border-zinc-600">
                <h1 className="text-7xl tracking-tight">Featured Projects.</h1>
            </div>
            <div className="px-20">
                <div className="cards flex gap-10 w-full mt-10">
                    {/* First Card */}
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h3 className="text-2xl pb-3 font-thin">Omachi.</h3>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className="absolute flex overflow-hidden right-0 text-[#fad636] translate-x-1/2 top-2/3 -translate-y-1/2 font-bold z-[9] leading-none tracking-tighter text-7xl">
                                {"OMACHI.".split("").map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img
                                className="w-full h-full bg-cover"
                                src="/brand1.webp"
                                alt="Projects"
                            />
                        </div>
                    </motion.div>

                    {/* Second Card */}

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h3 className="text-2xl pb-3 font-thin">Nike.</h3>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <h1 className="absolute flex overflow-hidden right-full text-[#fad636] translate-x-1/2 top-2/3 -translate-y-1/2 font-bold z-[9] leading-none tracking-tighter text-7xl">
                                {"NIKE.".split("").map((item, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img
                                className="w-full h-full bg-cover"
                                src="/Brand2.webp"
                                alt="Projects"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}


export default Featured
