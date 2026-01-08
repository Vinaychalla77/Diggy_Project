import React from 'react'

export default function Navbar() {
    const nav = ["Home", "Deals", "Cart","Contact","Login"];
    return (
        <>
        
       
            <div className='flex gap-50 mt-10 text-2xl '>
            <img src="public/DLogo.jpeg" alt="" className='w-12'/>
                {
                    nav.map((data, index) => {
                        return (
                            <div >
                                <li key={index} className='text-white list-none' >
                                    {data}
                                </li>

                            </div>
                        )

                    })
                }
            </div>
            
            </>
        
    )
}
