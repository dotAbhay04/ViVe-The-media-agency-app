import React from 'react'

function Navbar() {
    return (
        <div className="fixed top-0 flex items-center justify-between w-full p-6 z-20 backdrop-blur-md transition-transform duration-500 ]">
            <div className="logo font-bold">
                ViVe.
            </div>
            <div className="links flex gap-6">
                {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index)=>(
                    <a key={index} className={`text-lg  font-semibold ${index === 4 && 'ml-32'}`}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Navbar
