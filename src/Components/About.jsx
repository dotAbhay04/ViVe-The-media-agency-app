import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='text-4xl leading-[3.5vw] tracking-tight'>At VisionVibe, we transform ideas into compelling stories that resonate. As a strategic presentation agency, we specialize in crafting visually stunning and impactful presentations for forward thinking businesses. Whether you're raising funds, launching a product, explaining complex concepts, or building a world-class team, our goal is to amplify your message and drive results.</h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#58662a]'>
                <div className='w-1/2 pt-10'>
                    <h1 className='text-5xl pb-3'>Our Approach:</h1>
                    <button className='px-4 py-3 uppercase flex items-center gap-3 bg-zinc-900 rounded-full font-medium text-white'>Read More
                        <div className='w-3 h-3 bg-zinc-50 rounded-full'></div>
                    </button>

                </div>
                <div className='w-1/2 h-[60vh] rounded-lg'>
                <img src="./pic1.jpg" alt="VisionVibe_work" />
                </div>
            </div>
        </div>

    )
}

export default About
